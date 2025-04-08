import { Controller, Post, Body } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { SubjectDto } from './dto/subject.dto';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) { }

  @Post('parse')
  parseSchedule(@Body() subjects: SubjectDto[]) {
    return this.scheduleService.parseAndProcess(subjects);
  }
}
