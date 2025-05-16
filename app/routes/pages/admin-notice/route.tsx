import { type LoaderFunctionArgs, redirect } from 'react-router';

import { getAdminAuthSession } from '~/.server/services/session.service';
import { BreadcrumbItem } from '~/components/ui/breadcrumb';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const adminAuthSession = await getAdminAuthSession(request);
  const adminAuth = adminAuthSession.getAdminAuth();
  if (adminAuth) {
    return {};
  }
  return redirect('/admin/login');
};

export const handle = {
  breadcrumb: () => <BreadcrumbItem>공지사항 관리</BreadcrumbItem>,
};

export default function AdminNotice() {
  return <div>공지사항 페이지</div>;
}
