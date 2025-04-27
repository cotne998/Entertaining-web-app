import styled from "styled-components";
import SearchIcon from "/assets/icon-search.svg";
import TrendingComponent from "../components/TrendingComponent";
import Recommended from "../components/Recommended";

export default function Home() {
  return (
    <>
      <InputDiv>
        <Search type="text" placeholder="Search for movies or TV series" />
        <SearchImg src={SearchIcon} />
      </InputDiv>
      <TrendingComponent />
      <Recommended />
    </>
  );
}

const InputDiv = styled.div`
  position: relative;
`;

const Search = styled.input`
  all: unset;
  box-sizing: border-box;
  padding: 2.4rem;
  width: 100%;
  font-size: 1.6rem;
  color: white;
  padding-left: 4rem;

  @media only screen and (min-width: 48rem) {
    font-size: 2.4rem;
    padding-left: 6rem;
  }
`;

const SearchImg = styled.img`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 2.4rem;

  @media only screen and (min-width: 48rem) {
    width: 3.2rem;
  }
`;
