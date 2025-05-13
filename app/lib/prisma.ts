import { withAccelerate } from '@prisma/extension-accelerate';

import { PrismaClient } from '../generated/prisma';

const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

const prisma = globalForPrisma.prisma || new PrismaClient().$extends(withAccelerate());

export default prisma;
