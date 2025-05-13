import prisma from '~/lib/prisma';

export const loader = async () => {
  const notices = await (prisma.notice as any).findMany();
  return { notices };
};

export const action = async ({ request }) => {
  const payload = await request.json();
  const { title, content } = payload;
  await prisma.notice.create({
    data: {
      title,
      content,
    },
  });
  return { status: 'ok' };
};
