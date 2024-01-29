import { styled } from "styled-components";
import { CircleIcons } from "../../assets/CircleIcons";

export const CircleButtons = ({ type }: { type: string }) => {
  return (
    <Container>
      {type === "check" ? (
        <CircleIcons type="check" />
      ) : (
        <CircleIcons type="plus" />
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 38px;
  height: 38px;
`;
