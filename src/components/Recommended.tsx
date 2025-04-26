import styled from "styled-components";
import { Bookmark } from "./TrendingComponent";
import { BookmarkIcon } from "./TrendingComponent";

export default function Recommended({
  dataState,
  handleBookmark,
}: ITrendingProps) {
  return (
    <>
      <RecommendedContainer>
        <Title>Recommended for you</Title>
        <RecommendedContent>
          {dataState.map((item, index) => {
            return (
              !item.isTrending && (
                <>
                  <RecommendedItem key={index}>
                    <Bookmark onClick={() => handleBookmark(index)}>
                      <BookmarkIcon
                        src={
                          item.isBookmarked
                            ? "/assets/icon-bookmark-full.svg"
                            : "/assets/Bookmark.svg"
                        }
                      />
                    </Bookmark>
                    <Thumbnail src={item.thumbnail.regular.small} />
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

const Title = styled.h2`
  font-size: 2rem;
  color: white;
  font-weight: 300;

  @media only screen and (min-width: 48rem) {
    font-size: 3.2rem;
  }
`;

const RecommendedContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const RecommendedContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.4rem;

  @media only screen and (min-width: 48rem) {
    gap: 2.9rem;
  }
`;

const Thumbnail = styled.img`
  width: 16.4rem;
  border-radius: 0.7rem;

  @media only screen and (min-width: 48rem) {
    width: 22rem;
  }
`;

const RecommendedItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const RecommendedInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const MovieInfo = styled.span`
  font-size: 1.1rem;
  color: #ffffffb4;

  @media only screen and (min-width: 48rem) {
    font-size: 1.3rem;
  }
`;

const MovieTitle = styled.span`
  color: #fff;
  font-weight: 300;
  font-size: 1.4rem;

  @media only screen and (min-width: 48rem) {
    font-size: 1.8rem;
  }
`;

const CategoryIcon = styled.img`
  width: 1rem;
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%)
    contrast(0%);
`;
