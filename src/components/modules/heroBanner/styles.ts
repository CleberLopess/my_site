import styled, { keyframes } from "styled-components";
import { Medias } from "utils/mediaQueries";

const moveImage = keyframes`
    to {transform: translateY(10px);}
    from {transform: translateY(-10px);}
`;

const blickCursor = keyframes`
 100% {border-right-color: transparent;}
`;

const typing = keyframes`
 100% {max-width: 100%}

`;

export const Content = styled.article`
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10%;

  ${Medias.desktop} {
    flex-direction: row;
    gap: 0;
  }
`;

export const ContentTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 16px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #fefefe;

  ${Medias.tablet} {
    font-size: 3rem;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  display: flex;
  gap: 8px;
  white-space: nowrap;
  margin: 0 auto;
  color: #fefefe;

  ${Medias.tablet} {
    font-size: 2rem;
  }

  ${Medias.desktop} {
    margin: 0;
  }
`;

export const FontAnimated = styled.span`
  padding-right: 2px;
  border-right: 2px solid rgba(255, 255, 2555, 0.75);
  overflow: hidden;
  display: flex;
  max-width: 0px;
  animation: ${blickCursor} 500ms steps(40) normal infinite,
    ${typing} normal 3s both steps(40);
`;

export const Image = styled.img`
  display: flex;
  width: calc(100% - 150px);
  max-width: 500px;
  margin: 0 auto;

  ${Medias.tablet} {
    height: 500px;
  }

  ${Medias.desktop} {
    margin: auto;
    animation: ${moveImage} 2s infinite alternate;
  }
`;
