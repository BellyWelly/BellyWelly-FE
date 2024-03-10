import { styled } from "styled-components";
import { theme } from "../../styles";
import { Text } from "../common";
import { BottomNavInfo } from "../../assets/info/BottomNav";
import { Link, useLocation } from "react-router-dom";
import React from "react";

export const BottomNav = () => {
  const { pathname } = useLocation();

  return (
    <Container>
      {BottomNavInfo.map((item, index) => (
        <MenuLink to={item.route} key={index}>
          {React.cloneElement(item.icon, { type: pathname === item.route })}
          <Text
            $paletteColor={pathname === item.route ? "Main_orange" : "Gray4"}
            $Typo="Body1"
          >
            {item.menu}
          </Text>
        </MenuLink>
      ))}
    </Container>
  );
};
const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 65px;
  background: ${theme.palette.White};
  border-radius: 100px;
  padding: 10px 44px;
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.07);

  display: flex;
  justify-content: space-between;
`;
const MenuLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  text-decoration: none;
`;
