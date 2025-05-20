import { useState } from 'react';
import {
  type ActionFunctionArgs,
  Form,
  redirect,
  useActionData,
  useNavigate,
} from 'react-router';

import prisma from '~/.server/lib/prisma';
import { BreadcrumbItem } from '~/components/ui/breadcrumb';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Separator } from '~/components/ui/separator';
import { Textarea } from '~/components/ui/textarea';

import type { Route } from '../admin-notice-update/+types/route';

export const loader = async ({ params }) => {
  const { id } = params;
  const notice = await prisma.notice.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!notice) {
    throw new Error('Notice not found');
  }

  return {
    notice,
  };
};

class InvalidException extends Error {
  status: number;
  message: string;
  path?: string;

  constructor(message: string, path?: string) {
    super(message);
    this.status = 400;
    this.message = message;
    this.path = path;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export const action = async ({ request, params }: ActionFunctionArgs) => {
  try {
    const { id } = params;
    const formData = await request.formData();
    const payload = Object.fromEntries(formData);

    if (!payload.title) {
      throw new InvalidException('제목을 입력해주세요.', 'title');
    }
    if (!payload.content) {
      throw new InvalidException('내용을 입력해주세요.', 'content');
    }

    await prisma.notice.update({
      where: {
        id: parseInt(id),
      },
      data: {
        title: String(payload.title),
        content: String(payload.content),
      },
    });

    return redirect(`/admin/notice/${id}`);
  } catch (error) {
    console.error(error);
    if (error instanceof InvalidException) {
      return { message: error.message, path: error.path };
    }
    throw error;
  }
};

export const handle = {
  breadcrumb: () => <BreadcrumbItem>공지사항 관리 / 상세 / 수정</BreadcrumbItem>,
};

export default function AdminNoticeUpdate({ loaderData }: Route.ComponentProps) {
  const { notice } = loaderData;
  const [title, setTitle] = useState(() => notice.title);
  const [content, setContent] = useState(() => notice.content);
  const navigate = useNavigate();
  const data = useActionData();

  return (
    <div>
      <h1 className="leading-1.4 pb-4 text-2xl font-bold">공지사항 수정</h1>
      <Separator />
      <Form className="space-y-8 py-8" method="post">
        <div>
          <Label htmlFor="title" className="pb-4 text-2xl">
            제목
          </Label>
          <Input
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {data?.path === 'title' && <p className="text-destructive">{data?.message}</p>}
        </div>
        <div>
          <Label htmlFor="content" className="pb-4 text-2xl">
            내용
          </Label>
          <Textarea
            id="content"
            name="content"
            className="resize-none"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          {data?.path === 'content' && <p className="text-destructive">{data.message}</p>}
        </div>
        <div className="flex justify-between">
          <Button variant="secondary" type="submit" onClick={() => navigate(-1)}>
            취소
          </Button>
          <Button type="submit">수정</Button>
        </div>
      </Form>
    </div>
  );
}
