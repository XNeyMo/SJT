import { Injectable } from '@nestjs/common';
import { SubjectDto } from './dto/subject.dto';
import { CourseDto } from './dto/course.dto';
import { ScheduleDto } from './dto/schedule.dto';
import { FullInformationDto } from './dto/fullInformation.dto';
import * as XLSX from 'xlsx';

@Injectable()
export class ScheduleService {
  findBestSchedule(subjects: SubjectDto[]): { best: FullInformationDto[]; hours: number } {
    const combinations = this.generateCombinations(subjects);
    const valid = combinations.filter(this.isValidCombination);
    const scored = valid.map(c => ({ courses: c, hours: this.calculateTotalHours(c) }));

    if (scored.length === 0) {
      return { best: [], hours: 0 };
    }

    scored.sort((a, b) => a.hours - b.hours);
    const bestCourses = scored[0].courses;

    const enriched: FullInformationDto[] = bestCourses.map(course => {
      const subject = subjects.find(sub => sub.courses.some(c => c.code === course.code));
      return {
        subjectName: subject?.name ?? 'Desconocida',
        code: course.code,
        schedule: course.schedule,
      };
    });

    return { best: enriched, hours: scored[0].hours };
  }

  private generateCombinations(subjects: SubjectDto[]): CourseDto[][] {
    const result: CourseDto[][] = [];

    const backtrack = (index: number, path: CourseDto[]) => {
      if (index === subjects.length) {
        result.push([...path]);
        return;
      }

      for (const course of subjects[index].courses) {
        path.push(course);
        backtrack(index + 1, path);
        path.pop();
      }
    };

    backtrack(0, []);
    return result;
  }

  private isValidCombination = (courses: CourseDto[]): boolean => {
    for (let i = 0; i < courses.length; i++) {
      for (let j = i + 1; j < courses.length; j++) {
        if (this.doCoursesOverlap(courses[i], courses[j])) {
          return false;
        }
      }
    }
    return true;
  };

  private doCoursesOverlap(c1: CourseDto, c2: CourseDto): boolean {
    for (const s1 of c1.schedule) {
      for (const s2 of c2.schedule) {
        if (s1.day === s2.day && this.timeOverlap(s1, s2)) {
          return true;
        }
      }
    }
    return false;
  }

  private timeOverlap(a: ScheduleDto, b: ScheduleDto): boolean {
    return !(a.endTime <= b.startTime || a.startTime >= b.endTime);
  }

  private calculateTotalHours(courses: CourseDto[]): number {
    const dayMap: Record<string, { min: number; max: number }> = {};

    for (const course of courses) {
      for (const s of course.schedule) {
        if (!dayMap[s.day]) {
          dayMap[s.day] = { min: s.startTime, max: s.endTime };
        } else {
          dayMap[s.day].min = Math.min(dayMap[s.day].min, s.startTime);
          dayMap[s.day].max = Math.max(dayMap[s.day].max, s.endTime);
        }
      }
    }

    return Object.values(dayMap).reduce((sum, range) => sum + (range.max - range.min), 0);
  }

  parseAndProcess(subjects: SubjectDto[]) {
    const result = this.findBestSchedule(subjects);
    return {
      message: result.best.length > 0 ? 'Schedule found' : 'No valid schedule found',
      totalHours: result.hours,
      combination: result.best,
    };
  }

  processExcel(file: Express.Multer.File) {
    const workbook = XLSX.read(file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(sheet, { range: "A1:E1000" }) as any[];

    const subjectMap = new Map<string, SubjectDto>();

    for (const row of jsonData) {
      const subjectName = row['SUBJECT'];
      const courseCode = row['COURSE'];
      const day = String(row['DAY']).toLowerCase();
      const startTime = Number(row['START TIME']);
      const endTime = Number(row['END TIME']);

      if (!subjectMap.has(subjectName)) {
        subjectMap.set(subjectName, { name: subjectName, courses: [] });
      }

      const subject = subjectMap.get(subjectName)!;
      let course = subject.courses.find(c => c.code === courseCode);

      if (!course) {
        course = { code: courseCode, schedule: [] };
        subject.courses.push(course);
      }

      course.schedule.push({ day, startTime, endTime });
    }

    const subjects: SubjectDto[] = Array.from(subjectMap.values());
    return this.parseAndProcess(subjects);
  }
}
