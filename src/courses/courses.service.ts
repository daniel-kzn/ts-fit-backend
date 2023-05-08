import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCourseDTO } from './dto/createCourse.dto';
import { GetCourseDTO } from './dto/getCourse.dto';
import { UpdateCourseDTO } from './dto/updateCourse.dto';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}

  async getCourses() {
    const courses = await this.prisma.courses.findMany({});
    return courses;
  }

  async getCourse(dto: GetCourseDTO) {
    const course = await this.prisma.courses.findUnique({
      where: {
        id: dto.id,
      },
    });
    return { message: 'Cours trouvé avec succes !', data: course };
  }

  async createCourse(dto: CreateCourseDTO) {
    const course = await this.prisma.courses.create({
      data: { ...dto },
    });
    return { message: 'Cours ajouté avec succès !', data: course };
  }

  async updateCourse(id: number, dto: UpdateCourseDTO) {
    const user = await this.prisma.courses.update({
      where: {
        id: id,
      },
      data: {
        ...dto,
      },
    });
    return {
      message: 'Cours modifié avec succès ! ',
      data_before: dto,
      data_after: user,
    };
  }

  async deleteCourse() {
    return 'todo';
  }
}
