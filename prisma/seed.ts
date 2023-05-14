import { PrismaClient } from '@prisma/client';
import { courses } from './seed/courses.seed';
import { roles } from './seed/roles.seed';
import { users } from './seed/users.seed';
import * as argon from 'argon2';
import { sessions } from './seed/sessions.seed';

const prisma = new PrismaClient();

async function main() {
  await prisma.courses.deleteMany({});
  await prisma.roles.deleteMany({});
  await prisma.users.deleteMany({});

  console.log('\n######## SEED : Roles \n');
  for (const role of roles) {
    await prisma.roles.upsert({
      where: { id: role.id },
      update: {},
      create: {
        id: role.id,
        name: role.name,
      },
    });
  }

  const generatedRoles = await prisma.roles.findMany({});
  console.log({ generatedRoles });

  console.log('\n######## SEED : Users \n');
  for (const user of users) {
    const hashedPassword = await argon.hash(user.hash_password);
    user.hash_password = hashedPassword;
    await prisma.users.create({
      data: {
        role: {
          connect: { id: user.role_id },
        },
        id: user.id,
        hash_password: user.hash_password,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        sexe: user.sexe,
        subscribed: user.subscribed,
      },
    });
  }

  const generatedUsers = await prisma.users.findMany({});
  console.log({ generatedUsers });

  console.log('\n######## SEED : Courses \n');
  for (const course of courses) {
    await prisma.courses.create({
      data: course,
    });
  }
  const generatedCourses = await prisma.courses.findMany({});
  console.log({ generatedCourses });

  console.log('\n######## SEED : Sessions \n');
  for (const session of sessions) {
    await prisma.sessions.create({
      data: session,
    });
  }
  console.log('\n######## SEED : Schedules \n');
  console.log('\n######## SEED : Reservations \n');
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
