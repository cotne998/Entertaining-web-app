import styled from "styled-components";
import SearchIcon from "/assets/icon-search.svg";
import data from "../data.json";

export default function Home() {
  return (
    <>
      <InputDiv>
        <Search type="text" placeholder="Search for movies or TV series" />
        <SearchImg src={SearchIcon} alt="Search Icon" />
      </InputDiv>
      <Trending>
        <TrendingTitle>Trending</TrendingTitle>
        <TrendingContent>
          {data.map((item, index) =>
            item.isTrending ? (
              <TrendingItem
                key={index}
                src={item.thumbnail.trending?.small}
                alt={item.title}
              />
            ) : null
          )}
        </TrendingContent>
      </Trending>
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
`;

const SearchImg = styled.img`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 2.4rem;
`;

const Trending = styled.section``;

const TrendingTitle = styled.h2`
  font-size: 2rem;
  color: white;
  font-weight: 300;
`;

const TrendingContent = styled.div`
  overflow-x: auto;
  white-space: nowrap;
  padding: 1rem 0; /* დამატებით სივრცე ზემოთ და ქვემოთ */
`;

const TrendingItem = styled.img`
  display: inline-block;
  margin-right: 10px;
  width: 200px; /* სურათის სიგანე */
  height: auto; /* სურათის სიმაღლე */
  border-radius: 5px; /* მომრგვალებული კუთხეები */
  vertical-align: top; /* სურათების ვერტიკალური განლაგება */
`;
