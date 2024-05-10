import styled from "styled-components";
import { palette } from "../../styles";
import { Text } from "../common";

export const ChatBubble = ({
  children,
}: {
  children: React.ReactElement | string;
}) => {
  return (
    <Container>
      <Text $Typo="Body3" $paletteColor="Gray9">
        {children}
      </Text>
    </Container>
  );
};

const Container = styled.div`
  background: ${palette.White};
  border-radius: 12px;
  width: fit-content;
  padding: 16px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
