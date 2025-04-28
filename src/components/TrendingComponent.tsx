import styled, { keyframes } from "styled-components";
import { useContext } from "react";
import { dataContext } from "../pages/MainLayout";
import { PlayContainer, Play, PlayButton } from "./Recommended";

export default function TrendingComponent() {
  const { dataState, handleBookmark, hoveredIndex, setHoveredIndex } =
    useContext(dataContext);

  return (
    <>
      <Trending>
        <TrendingTitle>Trending</TrendingTitle>
        <TrendingContent>
          {dataState.map((item, index) => {
            return (
              item.isTrending && (
                <>
                  <TrendingItem
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    key={index}>
                    <Bookmark onClick={() => handleBookmark(index)}>
                      <BookmarkIcon
                        src={
                          item.isBookmarked
                            ? "/assets/icon-bookmark-full.svg"
                            : "/assets/Bookmark.svg"
                        }
                      />
                    </Bookmark>
                    {hoveredIndex === index && (
                      <PlayContainer>
                        <PlayButton src="/assets/Shape.svg" />
                        <Play>Play</Play>
                      </PlayContainer>
                    )}
                    <TrendingImg src={item.thumbnail.trending?.small} alt="" />
                    <TrendingImgDesktop src={item.thumbnail.trending?.large} />
                    <MovieInformation>
                      {item.year} •{" "}
                      <CategoryIcon
                        src={
                          item.category === "Movie"
                            ? "/assets/icon-nav-movies.svg"
                            : "/assets/icon-nav-tv-series.svg"
                        }
                        alt=""
                      />{" "}
                      {item.category} • {item.rating}
                    </MovieInformation>
                    <MovieTitle>{item.title}</MovieTitle>
                  </TrendingItem>
                </>
              )
            );
          })}
        </TrendingContent>
      </Trending>
    </>
  );
}

const Trending = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const TrendingTitle = styled.h2`
  font-size: 2rem;
  color: white;
  font-weight: 300;

  @media only screen and (min-width: 48rem) {
    font-size: 3.2rem;
  }
`;

const SlideAnimation = keyframes`
  0% {
    transform: translateX(10%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const TrendingContent = styled.div`
  overflow-x: auto;
  white-space: nowrap;
  width: 100%;
  display: flex;
  gap: 2rem;
  animation-name: ${SlideAnimation};
  animation-duration: 0.3s;

  @media only screen and (min-width: 48rem) {
    gap: 4rem;
  }
`;

const TrendingImg = styled.img`
  width: 24rem;
  border-radius: 0.8rem;

  @media only screen and (min-width: 48rem) {
    width: 47rem;
  }

  @media only screen and (min-width: 90rem) {
    display: none;
  }
`;

const TrendingImgDesktop = styled.img`
  display: none;

  @media only screen and (min-width: 90rem) {
    display: block;
    width: 47rem;
    border-radius: 0.8rem;
  }
`;

const TrendingItem = styled.div`
  position: relative;
  cursor: pointer;
`;

const MovieTitle = styled.h4`
  color: white;
  font-weight: 300;
  font-size: 1.5rem;
  position: absolute;
  left: 1.6rem;
  bottom: 1.6rem;

  @media only screen and (min-width: 48rem) {
    font-size: 2.4rem;
  }
`;

const MovieInformation = styled.span`
  color: #ffffffb4;
  position: absolute;
  left: 1.6rem;
  bottom: 4rem;
  font-weight: 300;
  font-size: 1.2rem;

  @media only screen and (min-width: 48rem) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const CategoryIcon = styled.img`
  width: 1.2rem;
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%)
    contrast(0%);
`;

export const Bookmark = styled.button`
  all: unset;
  cursor: pointer;
  position: absolute;
  padding: 1rem 1rem 0.6rem;
  border-radius: 50%;
  background-color: #10141e8b;
  right: 0.8rem;
  top: 0.8rem;

  &:hover {
    background-color: #5b5b5b7d;
    transition: 0.1s;
  }

  &:active {
    transform: scale(0.9);
  }
`;

export const BookmarkIcon = styled.img`
  width: 1.1rem;
`;
