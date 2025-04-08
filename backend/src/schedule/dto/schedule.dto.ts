import { ApiProperty } from "@nestjs/swagger";

export class ScheduleDto {
  @ApiProperty({ example: 'monday' })
  day: string;

  @ApiProperty({ example: 7 })
  startTime: number;

  @ApiProperty({ example: 10 })
  endTime: number;
}
