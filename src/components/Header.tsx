import styled from "styled-components";

export default function Header() {
  return (
    <>
      <header>
        <img src="/assets/logo.svg" alt="Logo" />
        <Nav>
          <img src="/assets/icon-nav-home.svg" alt="" />
          <img src="/assets/icon-nav-movies.svg" alt="" />
          <img src="/assets/icon-nav-tv-series.svg" alt="" />
          <img src="/assets/icon-nav-bookmark.svg" alt="" />
        </Nav>
        <Avatar src="/assets/image-avatar.png" alt="" />
      </header>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  gap: 2.4rem;
`;

const Avatar = styled.img`
  width: 2.4rem;
`;
