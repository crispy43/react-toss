import NoticeTitle from './components/notice-title';

export default function NoticeDetails() {
  return (
    <section>
      <div className="container">
        <h1 className="pt-[168px] pb-[25px] text-[44px] leading-[66px] font-[700]">
          공지사항
        </h1>
        <div>
          <NoticeTitle title="공지사항 제목" createdAt={new Date('2025-05-10')} />
        </div>
        <div>공지사항 내용</div>
      </div>
    </section>
  );
}
