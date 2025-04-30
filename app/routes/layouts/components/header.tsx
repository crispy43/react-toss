import TossLogo from '~/components/svg/toss-logo.svg?react';
import { useLanguage } from '~/hooks/use-language';

import LangButton from './lang-button';
import NavButton from './nav-button';

interface NavItem {
  to: string;
  label: string;
}

const MENU: NavItem[] = [
  {
    to: '#',
    label: '회사 소개',
  },
  {
    to: '#',
    label: '공지사항',
  },
  {
    to: '#',
    label: '고객센터',
  },
  {
    to: '#',
    label: '자주 묻는 질문',
  },
  {
    to: '#',
    label: '토스인증서',
  },
  {
    to: '#',
    label: '채용',
  },
];

export default function Header() {
  const [language, setLanguage] = useLanguage();

  return (
    <header className="fixed z-50 h-[60px] w-full bg-white">
      <div className="container flex h-full items-center justify-between">
        <div className="w-[66px]">
          <TossLogo />
        </div>
        <nav className="flex gap-4">
          {MENU.map((item, i) => (
            <NavButton key={i}>{item.label}</NavButton>
          ))}
        </nav>
        <div>
          <LangButton language={language} setLanguage={setLanguage} value="ko">
            KOR
          </LangButton>
          <span className="text-[#d1d6db]">|</span>
          <LangButton language={language} setLanguage={setLanguage} value="en">
            ENG
          </LangButton>
        </div>
      </div>
    </header>
  );
}
