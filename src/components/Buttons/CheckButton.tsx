import { styled } from "styled-components";
import { CheckIcons } from "../../assets/CheckIcons";

export const CheckButton = ({ type }: { type: string }) => {
  return (
    <Container>
      {type === "check" ? (
        <CheckIcons type="check" />
      ) : (
        <CheckIcons type="plus" />
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 38px;
  height: 38px;
  z-index: 1000;
`;
