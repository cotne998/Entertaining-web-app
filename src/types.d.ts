interface IdataState {
  title: string;
  thumbnail: {
    trending?: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

interface ITrendingProps {
  handleBookmark: (index: number) => void;
  dataState: IdataState[];
  setDataState: React.Dispatch<React.SetStateAction>;
}

interface IDataContext {
  dataState: IdataState[];
  handleBookmark: (index: number) => void;
  inputValue: string;
}
