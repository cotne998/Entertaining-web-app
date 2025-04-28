import styled, { keyframes } from "styled-components";
import { Bookmark } from "./TrendingComponent";
import { BookmarkIcon } from "./TrendingComponent";
import { useContext } from "react";
import { dataContext } from "../pages/MainLayout";

export default function Recommended() {
  const { dataState, handleBookmark, hoveredIndex, setHoveredIndex } =
    useContext(dataContext);

  return (
    <>
      <RecommendedContainer>
        <Title>Recommended for you</Title>
        <RecommendedContent>
          {dataState.map((item, index) => {
            return (
              !item.isTrending && (
                <>
                  <RecommendedItem
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
                    <Thumbnail src={item.thumbnail.regular.small} />
                    <ThumbnailDesktop src={item.thumbnail.regular.large} />
                    <RecommendedInfo>
                      <MovieInfo>
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
                      </MovieInfo>
                      <MovieTitle>{item.title}</MovieTitle>
                    </RecommendedInfo>
                  </RecommendedItem>
                </>
              )
            );
          })}
        </RecommendedContent>
      </RecommendedContainer>
    </>
  );
}

export const Title = styled.h2`
  font-size: 2rem;
  color: white;
  font-weight: 300;

  @media only screen and (min-width: 48rem) {
    font-size: 3.2rem;
  }
`;

export const RecommendedContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
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

export const RecommendedContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.4rem;
  animation-name: ${SlideAnimation};
  animation-duration: 0.3s;

  @media only screen and (min-width: 48rem) {
    gap: 2.9rem;
  }
`;

export const Thumbnail = styled.img`
  width: 16.4rem;
  border-radius: 0.7rem;

  @media only screen and (min-width: 48rem) {
    width: 22rem;
  }

  @media only screen and (min-width: 90rem) {
    display: none;
  }
`;

export const ThumbnailDesktop = styled.img`
  display: none;

  @media only screen and (min-width: 90rem) {
    display: block;
    width: 28rem;
    border-radius: 1rem;
  }
`;

export const RecommendedItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  cursor: pointer;
`;

export const RecommendedInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const MovieInfo = styled.span`
  font-size: 1.1rem;
  color: #ffffffb4;

  @media only screen and (min-width: 48rem) {
    font-size: 1.3rem;
  }
`;

export const MovieTitle = styled.span`
  color: #fff;
  font-weight: 300;
  font-size: 1.4rem;

  @media only screen and (min-width: 48rem) {
    font-size: 1.8rem;
  }
`;

export const CategoryIcon = styled.img`
  width: 1rem;
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%)
    contrast(0%);
`;

export const PlayAnimation = keyframes`
  0% {
    transform: translateX(-50%) translateY(-60%) scale(0.8); 
    opacity: 0;
  }
  100% {
    transform: translateX(-50%) translateY(-60%) scale(1); 
    opacity: 1;
  }
`;

export const PlayContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  display: flex;
  gap: 1.9rem;
  background-color: #ffffff54;
  align-items: center;
  padding: 0.9rem;
  border-radius: 10rem;
  padding-right: 2.4rem;
  transform: translateX(-50%) translateY(-60%);
  animation-name: ${PlayAnimation};
  animation-duration: 0.2s;
`;

export const Play = styled.span`
  font-size: 1.8rem;
  color: white;
`;

export const PlayButton = styled.img`
  width: 3rem;
`;
