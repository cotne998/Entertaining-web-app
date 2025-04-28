import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  return (
    <>
      <header>
        <img src="/assets/logo.svg" alt="Logo" />
        <Nav>
          <StyledLink
            to="/Main/Home"
            $active={location.pathname === "/Main/Home"}>
            <NavImg src="/assets/icon-nav-home.svg" alt="" />
          </StyledLink>
          <StyledLink
            to="/Main/Movies"
            $active={location.pathname === "/Main/Movies"}>
            <NavImg src="/assets/icon-nav-movies.svg" alt="" />
          </StyledLink>
          <StyledLink
            to="/Main/TV-Series"
            $active={location.pathname === "/Main/TV-Series"}>
            <NavImg src="/assets/icon-nav-tv-series.svg" alt="" />
          </StyledLink>
          <StyledLink
            to="/Main/Bookmark"
            $active={location.pathname === "/Main/Bookmark"}>
            <NavImg src="/assets/icon-nav-bookmark.svg" alt="" />
          </StyledLink>
        </Nav>
        <Avatar src="/assets/image-avatar.png" alt="" />
      </header>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  gap: 2.4rem;

  @media only screen and (min-width: 90rem) {
    flex-direction: column;
    gap: 4rem;
  }
`;

const Avatar = styled.img`
  width: 2.4rem;

  @media only screen and (min-width: 90rem) {
    width: 4rem;
    position: absolute;
    bottom: 3.2rem;
  }
`;

const NavImg = styled.img`
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    filter: invert(25%) sepia(100%) saturate(1000%) hue-rotate(0deg)
      brightness(90%) contrast(90%);
  }

  @media only screen and (min-width: 48rem) {
    width: 2rem;
  }
`;

const StyledLink = styled(Link)<{ $active: boolean }>`
  img {
    filter: ${({ $active }) => ($active ? "brightness(0) invert(1)" : "none")};
  }
`;
