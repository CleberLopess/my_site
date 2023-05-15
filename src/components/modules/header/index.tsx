import { useState } from "react";
import * as S from "./styles";

export const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpenMenu = () => {
    setOpen(!open);
  };

  return (
    <S.Header openMenu={open}>
      <S.Content>
        <S.Title openMenu={open}>Cleber - portifólio</S.Title>
        <S.Menu onClick={handleClickOpenMenu}>
          <S.Hamburguer openMenu={open} />
        </S.Menu>

        <S.ContentItens>
          <S.Ul>
            <S.Li openMenu={open}>
              <S.Link href="#tecnologi">Tecnologias</S.Link>
            </S.Li>
          </S.Ul>
        </S.ContentItens>
      </S.Content>
    </S.Header>
  );
};
