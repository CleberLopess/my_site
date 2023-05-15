import styled from "styled-components";
import { Medias } from "utils/mediaQueries";

interface IPropsMenuOpen {
  openMenu: boolean;
}

export const Header = styled.header<IPropsMenuOpen>`
  padding: 20px;
  position: relative;
  transition: 1s;
  background-color: ${(props) => (props.openMenu ? "#fefefe" : "transparent")};
`;

export const Content = styled.article`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.span<IPropsMenuOpen>`
  color: ${(props) => (props.openMenu ? "#5b069e" : "#fefefe")};
`;

export const Menu = styled.div`
  border-radius: 50%;
  width: 30px;
  height: 20px;
  display: flex;
  cursor: pointer;

  ${Medias.desktop} {
    display: none;
  }
`;

export const Hamburguer = styled.div<IPropsMenuOpen>`
  background-color: ${(props) => (props.openMenu ? "#5b069e" : "#fefefe")};
  width: 30px;
  height: 2px;
  position: relative;
  margin: auto;
  transition: transform 0.5s ease-in-out;
  transform: ${(props) => (props.openMenu ? "rotate(45deg)" : "none")};

  &:before,
  &:after {
    content: "";
    position: absolute;
    background-color: ${(props) => (props.openMenu ? "#5b069e" : "#fefefe")};
    width: 100%;
    height: 100%;
    transition: transform 0.5s ease-in-out;
  }

  &:before {
    top: ${(props) => (props.openMenu ? "0px" : "-7px")};
    transform: ${(props) => (props.openMenu ? "rotate(90deg)" : "none")};
  }

  &:after {
    bottom: ${(props) => (props.openMenu ? "0px" : "-7px")};
    transform: ${(props) => (props.openMenu ? "rotate(90deg)" : "none")};
  }
`;

export const ContentItens = styled.div`
  gap: 10px;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;

  ${Medias.desktop} {
    display: block;
    position: relative;
    z-index: 0;
    width: fit-content;
  }
`;

export const Ul = styled.ul`
  ${Medias.desktop} {
    display: flex;
  }
`;

export const Li = styled.li<IPropsMenuOpen>`
  list-style-type: none;
  transition: 1s;
  position: absolute;
  width: 40%;
  right: ${(props) => (props.openMenu ? "0px" : "-320px")};
  opacity: ${(props) => (props.openMenu ? "1" : "0")};
  bottom: -41px;
  background-color: #fefefe;
  padding: 10px;

  ${Medias.desktop} {
    transition: none;
    position: relative;
    right: unset;
    color: #fefefe;
    opacity: 1;
    background-color: transparent;
    bottom: unset;
    padding: 0;
    width: fit-content;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  cursor: pointer;

  ${Medias.desktop} {
    color: #fefefe;

    &:hover {
      border-bottom: 1px solid #fefefe;
    }
  }
`;
