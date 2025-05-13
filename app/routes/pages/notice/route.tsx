import { Link, type LoaderFunctionArgs } from 'react-router';

import prisma from '~/.server/lib/prisma';

import NoticeItem from './components/notice-item';
import NoticePagination from './components/notice-pagination';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const query = Object.fromEntries(url.searchParams);
  let page = parseInt(query.page);
  if (!page) page = 1;

  const [notices, totalCount] = await Promise.all([
    prisma.notice.findMany({
      take: 10,
      skip: (page - 1) * 10,
    }),
    prisma.notice.count(),
  ]);

  return { notices, totalCount, page };
};

export default function Notice({ loaderData }) {
  const { notices, totalCount, page } = loaderData;
  console.log('totalCount', totalCount);
  console.log('page', page);

  return (
    <section>
      <div className="container">
        <h1 className="pt-[168px] pb-[25px] text-[44px] leading-[66px] font-[700]">
          공지사항
        </h1>
        <div>
          {notices.map((notice, index) => (
            <Link to={`/notice/${notice.id}`} key={index}>
              <NoticeItem
                title={notice.title}
                createdAt={notice.createdAt}
                isLast={index === notices.length - 1}
              />
            </Link>
          ))}
        </div>
        <div className="pt-[50px]">
          <NoticePagination />
        </div>
      </div>
    </section>
  );
}
