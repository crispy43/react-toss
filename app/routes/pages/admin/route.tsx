import { type LoaderFunctionArgs, redirect } from 'react-router';

import { getAdminAuthSession } from '~/.server/services/session.service';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const adminAuthSession = await getAdminAuthSession(request);
  const adminAuth = adminAuthSession.getAdminAuth();
  if (adminAuth) {
    return {};
  }
  return redirect('/admin/login');
};

export default function Admin() {
  return <div>관리자 페이지</div>;
}
