import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import data from "../data.json";
import { createContext } from "react";
import styled from "styled-components";
import SearchIcon from "/assets/icon-search.svg";

export const dataContext = createContext<IDataContext>({
  dataState: [],
  handleBookmark: () => {},
});

export default function MainLayout() {
  const [dataState, setDataState] = useState<IdataState[]>(() => {
    const savedData = localStorage.getItem("dataState");
    return savedData ? JSON.parse(savedData) : data;
  });

  const navigate = useNavigate();

  const handleBookmark = (index: number) => {
    setDataState((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, isBookmarked: !item.isBookmarked } : item
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("dataState", JSON.stringify(dataState));
  }, [dataState]);

  useEffect(() => {
    navigate("/Main/Home");
  }, []);

  return (
    <>
      <Header />
      <main>
        <InputDiv>
          <Search type="text" placeholder="Search for movies or TV series" />
          <SearchImg src={SearchIcon} />
        </InputDiv>
        <dataContext.Provider value={{ dataState, handleBookmark }}>
          <Outlet />
        </dataContext.Provider>
      </main>
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
