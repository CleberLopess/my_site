import * as S from "./styles";

export const HeroBanner = () => {
  return (
    <S.Content>
      <S.ContentTitle>
        <S.Title>Front-End Developer</S.Title>
        <S.Description>
          hard skills:
          <S.FontAnimated>JavaScript</S.FontAnimated>
        </S.Description>
      </S.ContentTitle>
      <S.Image
        src={"images/heroBanner/notebook.png"}
        alt="notebookLogo"
      ></S.Image>
    </S.Content>
  );
};
