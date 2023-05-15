import styled from "styled-components";
import { Medias } from "utils/mediaQueries";

export const Content = styled.section`
  article {
    max-width: 1200px;
    width: calc(100% - 30px);

    ${Medias.tablet} {
      width: calc(100% - 200px);
    }
  }
`;
