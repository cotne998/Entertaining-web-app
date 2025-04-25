import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  return (
    <>
      <header>
        <img src="/assets/logo.svg" alt="Logo" />
        <Nav>
          <Link to="/Main/Home">
            <NavImg src="/assets/icon-nav-home.svg" alt="" />
          </Link>
          <Link to="/Main/Movies">
            <NavImg src="/assets/icon-nav-movies.svg" alt="" />
          </Link>
          <Link to="/Main/TV-Series">
            <NavImg src="/assets/icon-nav-tv-series.svg" alt="" />
          </Link>
          <Link to="/Main/Bookmark">
            <NavImg src="/assets/icon-nav-bookmark.svg" alt="" />
          </Link>
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

  @media only screen and (min-width: 48rem) {
    width: 2rem;
  }
`;
