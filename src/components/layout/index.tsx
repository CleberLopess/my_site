import React from "react";
import * as S from "./styles";

import { Stamp } from "components/modules/stamp";
import { Header } from "components/modules/header";

interface IProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: IProps) => {
  return (
    <S.Content>
      <Header />
      {children}
      <Stamp />
    </S.Content>
  );
};
