import { type LoaderFunctionArgs, redirect } from 'react-router';

import prisma from '~/.server/lib/prisma';
import { getAdminAuthSession } from '~/.server/services/session.service';
import { BreadcrumbItem } from '~/components/ui/breadcrumb';
import { SortOrder } from '~/generated/prisma/internal/prismaNamespace';

import type { Route } from '../admin-notice/+types/route';
import { NoticeTable } from './components/notice-table';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const adminAuthSession = await getAdminAuthSession(request);
  const adminAuth = adminAuthSession.getAdminAuth();
  if (!adminAuth) {
    return redirect('/admin/login');
  }

  const url = new URL(request.url);
  const query = Object.fromEntries(url.searchParams);
  let page = parseInt(query.page);
  if (!page) page = 1;
  let sort = query.sort as SortOrder;
  if (!sort) sort = SortOrder.desc;

  const [notices, totalCount] = await Promise.all([
    prisma.notice.findMany({
      take: 10,
      skip: (page - 1) * 10,
      orderBy: {
        createdAt: sort,
      },
    }),
    prisma.notice.count(),
  ]);

  return {
    notices,
    totalCount,
    page,
  };
};

export const handle = {
  breadcrumb: () => <BreadcrumbItem>공지사항 관리</BreadcrumbItem>,
};

export default function AdminNotice({ loaderData }: Route.ComponentProps) {
  const { notices, totalCount, page } = loaderData;
  return (
    <div>
      <NoticeTable notices={notices} totalCount={totalCount} page={page} />
    </div>
  );
}
