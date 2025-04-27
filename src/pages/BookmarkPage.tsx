import {
  RecommendedContainer,
  Title,
  RecommendedInfo,
  RecommendedContent,
  RecommendedItem,
  Thumbnail,
  ThumbnailDesktop,
  MovieInfo,
  CategoryIcon,
  MovieTitle,
} from "../components/Recommended";
import { Bookmark } from "../components/TrendingComponent";
import { BookmarkIcon } from "../components/TrendingComponent";
import { useContext } from "react";
import { dataContext } from "./MainLayout";

export default function BookmarkPage() {
  const { dataState, handleBookmark } = useContext(dataContext);

  return (
    <>
      <RecommendedContainer>
        <Title>Movies</Title>
        <RecommendedContent>
          {dataState.map((item, index) => {
            return (
              item.isBookmarked && (
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
