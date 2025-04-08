import { ApiProperty } from '@nestjs/swagger';
import { ScheduleDto } from './schedule.dto';

export class CourseDto {
  @ApiProperty({ example: 'CS101' })
  code: string;

  @ApiProperty({ type: [ScheduleDto] })
  schedule: ScheduleDto[];
}
