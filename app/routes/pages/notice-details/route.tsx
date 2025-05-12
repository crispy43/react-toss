import { Link } from 'react-router';

import { Button } from '~/components/ui/button';

import { NOTICES } from '../notice/route';
import NoticeContent from './components/notice-content';
import NoticeTitle from './components/notice-title';

export const loader = ({ params }) => {
  const { id } = params;
  // console.log('id', id);

  const notice = NOTICES.find((n) => n.id === id);
  if (!notice) {
    throw new Error('Notice not found');
  }

  return {
    notice,
  };
};

export default function NoticeDetails({ loaderData }) {
  const { notice } = loaderData;
  // console.log('notice', notice);

  return (
    <section>
      <div className="container">
        <h1 className="pt-[168px] pb-[25px] text-[44px] leading-[66px] font-[700]">
          공지사항
        </h1>
        <div>
          <NoticeTitle title={notice.title} createdAt={notice.createdAt} />
        </div>
        <div>
          <NoticeContent content={notice.content} />
          <Link to="/notice">
            <Button variant="secondary" className="my-[100px]">
              목록으로 돌아가기
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
