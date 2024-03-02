import { styled } from "styled-components";
import { BottomNav } from "../components/layout/BottomNav";

export const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <div className="children">{children}</div>
      <div className="bottom-nav">
        <BottomNav />
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;

  .children {
    overflow: auto;
    height: 100vh;
  }

  .bottom-nav {
    box-sizing: border-box;
    bottom: 0;
    position: absolute;
    padding: 0 20px 20px 20px;
    width: 100%;
  }
`;
