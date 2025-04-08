import { ApiProperty } from '@nestjs/swagger';
import { ScheduleDto } from './schedule.dto';

export class FullInformationDto {
  @ApiProperty()
  subjectName: string;

  @ApiProperty()
  code: string;

  @ApiProperty({ type: [ScheduleDto] })
  schedule: ScheduleDto[];
}
