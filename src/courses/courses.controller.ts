import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { CoursesService } from './courses.service';
import { GetCourseDTO } from './dto/getCourse.dto';
import { CreateCourseDTO } from './dto/createCourse.dto';
import { UpdateCourseDTO } from './dto/updateCourse.dto';

@ApiTags('Cours')
@Controller('courses')
export class CoursesController {
  constructor(private courseService: CoursesService) {}

  // =====================================================================
  @Get()
  getCourses() {
    return this.courseService.getCourses();
  }

  // =====================================================================
  @ApiOperation({
    summary: 'Obtient un cours via son id',
  })
  @ApiParam({
    name: 'id',
    description: 'id du cours',
  })
  @Get('/:id')
  getCourse(@Param() id: GetCourseDTO) {
    return this.courseService.getCourse(id);
  }

  // =====================================================================
  @Post()
  createCourse(@Body() dto: CreateCourseDTO) {
    return this.courseService.createCourse(dto);
  }

  // =====================================================================
  @Put('/:id')
  updateCourse(@Param() id: number, @Body() dto: UpdateCourseDTO) {
    return this.courseService.updateCourse(id, dto);
  }

  // =====================================================================
  @ApiOperation({
    summary: 'Supprime un cours via son id',
  })
  @ApiParam({
    name: 'id',
    description: 'id du cours',
  })
  @Delete('/:id')
  deleteCourse() {
    return this.courseService.deleteCourse();
  }
}
