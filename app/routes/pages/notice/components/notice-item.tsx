import dayjs from 'dayjs';

interface Props {
  title: string;
  createdAt: Date;
}

export default function NoticeItem({ title, createdAt }: Props) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{dayjs(createdAt).format('YYYY. MM. DD')}</p>
    </div>
  );
}
