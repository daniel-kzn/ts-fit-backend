import { PrismaClient } from '@prisma/client';
import { courses } from './seed/courses.seed';
import { roles } from './seed/roles.seed';
import { users } from './seed/users.seed';
import * as argon from 'argon2';

const prisma = new PrismaClient();

async function main() {
  console.log('######## SEED : Roles');
  for (const role of roles) {
    await prisma.roles.create({
      data: role,
    });
  }

  console.log('######## SEED : Users');
  for (const user of users) {
    const hashedPassword = await argon.hash(user.hash_password);
    user.hash_password = hashedPassword;
    await prisma.users.create({
      data: user,
    });
  }

  console.log('######## SEED : Courses');
  for (const course of courses) {
    await prisma.courses.create({
      data: course,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })

  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();

    process.exit(1);
  });
