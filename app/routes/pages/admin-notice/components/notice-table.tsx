import dayjs from 'dayjs';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table';
import type { Notice } from '~/generated/prisma';

interface Props {
  notices: Notice[];
}

export const NoticeTable = ({ notices }: Props) => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>제목</TableHead>
            <TableHead>생성시간</TableHead>
            <TableHead>수정시간</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {notices.map((notice) => (
            <TableRow key={notice.id}>
              <TableCell>{notice.id}</TableCell>
              <TableCell>{notice.title}</TableCell>
              <TableCell>
                {dayjs(notice.createdAt).format('YYYY.MM.DD HH:mm:ss')}
              </TableCell>
              <TableCell>
                {dayjs(notice.updatedAt).format('YYYY.MM.DD HH:mm:ss')}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
