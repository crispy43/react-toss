import { type LoaderFunctionArgs, redirect } from 'react-router';

import prisma from '~/.server/lib/prisma';
import { getAdminAuthSession } from '~/.server/services/session.service';
import { BreadcrumbItem } from '~/components/ui/breadcrumb';

import type { Route } from '../admin-notice/+types/route';
import { NoticeTable } from './components/notice-table';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const adminAuthSession = await getAdminAuthSession(request);
  const adminAuth = adminAuthSession.getAdminAuth();
  if (!adminAuth) {
    return redirect('/admin/login');
  }

  const notices = await prisma.notice.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return {
    notices,
  };
};

export const handle = {
  breadcrumb: () => <BreadcrumbItem>공지사항 관리</BreadcrumbItem>,
};

export default function AdminNotice({ loaderData }: Route.ComponentProps) {
  const { notices } = loaderData;
  return (
    <div>
      <NoticeTable notices={notices} />
    </div>
  );
}
