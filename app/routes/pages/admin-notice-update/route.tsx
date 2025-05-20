import { useState } from 'react';
import { Form, useNavigate } from 'react-router';

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

export const handle = {
  breadcrumb: () => <BreadcrumbItem>공지사항 관리 / 상세 / 수정</BreadcrumbItem>,
};

export default function AdminNoticeUpdate({ loaderData }: Route.ComponentProps) {
  const { notice } = loaderData;
  const [title, setTitle] = useState(() => notice.title);
  const [content, setContent] = useState(() => notice.content);
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="leading-1.4 pb-4 text-2xl font-bold">공지사항 수정</h1>
      <Separator />
      <Form className="space-y-8 py-8">
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
