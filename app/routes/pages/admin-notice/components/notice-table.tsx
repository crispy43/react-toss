import dayjs from 'dayjs';
import { ArrowUpDown } from 'lucide-react';
import { useSearchParams } from 'react-router';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table';
import type { Notice } from '~/generated/prisma';
import { SortOrder } from '~/generated/prisma/internal/prismaNamespace';

import NoticePagination from './notice-pagination';

interface Props {
  notices: Notice[];
  totalCount: number;
  page: number;
}

export const NoticeTable = ({ notices, totalCount, page }: Props) => {
  const [_, setSearchParams] = useSearchParams();
  const handleSort = () => {
    setSearchParams((current) => {
      const params = {
        ...Object.fromEntries(current),
      };
      params.sort = params.sort === SortOrder.asc ? SortOrder.desc : SortOrder.asc;
      return params;
    });
  };

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>제목</TableHead>
            <TableHead onClick={handleSort}>
              <div className="flex cursor-pointer items-center gap-2">
                <span>생성시간</span>
                <ArrowUpDown size={16} />
              </div>
            </TableHead>
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
      <div className="mt-8">
        <NoticePagination totalCount={totalCount} page={page} />
      </div>
    </div>
  );
};
