import { Controller, Post, Body, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ScheduleService } from './schedule.service';
import { SubjectDto } from './dto/subject.dto';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) { }

  @Post('wizard')
  parseSchedule(@Body() subjects: SubjectDto[]) {
    return this.scheduleService.parseAndProcess(subjects);
  }

  @Post('file')
  @UseInterceptors(FileInterceptor('file'))
  async uploadSchedule(@UploadedFile() file: Express.Multer.File) {
    return this.scheduleService.processExcel(file);
  }
}
