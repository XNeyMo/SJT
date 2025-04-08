import { ApiProperty } from '@nestjs/swagger';
import { CourseDto } from './course.dto';

export class SubjectDto {
  @ApiProperty({ example: 'Math' })
  name: string;

  @ApiProperty({ type: [CourseDto] })
  courses: CourseDto[];
}
