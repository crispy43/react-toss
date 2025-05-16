import type { ActionFunctionArgs } from 'react-router';

import { ForbiddenException } from '~/.server/lib/exception';

import { LoginForm } from './components/login-form';

const ADMIN = {
  email: 'admin@gmail.com',
  password: 'test1234!',
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const payload = Object.fromEntries(formData);
  console.log('payload', payload);

  if (payload.email !== ADMIN.email) {
    throw new ForbiddenException('이메일이 존재하지 않습니다.');
  }

  if (payload.password !== ADMIN.password) {
    throw new ForbiddenException('비밀번호가 일치하지 않습니다.');
  }

  // TODO: 로그인 성공 처리
  return {};
};

export default function AdminLogin() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
