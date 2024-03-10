import { ChatIcon, HomeIcon, MypageIcon, ReportIcon } from "../Icons/BottomNav";

interface bottomNavInfoInterface {
  icon: React.ReactElement;
  menu: string;
  route: string;
}

export const BottomNavInfo: bottomNavInfoInterface[] = [
  {
    icon: <HomeIcon type={false} />,
    menu: "홈",
    route: "/",
  },
  {
    icon: <ReportIcon type={false} />,
    menu: "분석레포트",
    route: "/report",
  },
  {
    icon: <ChatIcon type={false} />,
    menu: "AI 추천",
    route: "/",
  },
  {
    icon: <MypageIcon type={false} />,
    menu: "마이페이지",
    route: "/",
  },
];
