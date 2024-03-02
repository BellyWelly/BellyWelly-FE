import { ChatIcon, HomeIcon, MypageIcon, ReportIcon } from "../Icons/BottomNav";

export const BottomNavInfo: { icon: any; menu: string }[] = [
  {
    icon: <HomeIcon type={false} />,
    menu: "홈",
  },
  {
    icon: <ReportIcon type={false} />,
    menu: "분석레포트",
  },
  {
    icon: <ChatIcon type={false} />,
    menu: "AI 추천",
  },
  {
    icon: <MypageIcon type={false} />,
    menu: "마이페이지",
  },
];
