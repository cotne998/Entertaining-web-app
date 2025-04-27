import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import data from "../data.json";
import { createContext } from "react";

export const dataContext = createContext<IDataContext>({
  dataState: data,
  handleBookmark: () => {},
});

export default function MainLayout() {
  const [dataState, setDataState] = useState(data);

  const navigate = useNavigate();

  const handleBookmark = (index: number) => {
    setDataState((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, isBookmarked: !item.isBookmarked } : item
      )
    );
  };

  useEffect(() => {
    navigate("/Main/Home");
  }, []);

  return (
    <>
      <Header />
      <main>
        <dataContext.Provider value={{ dataState, handleBookmark }}>
          <Outlet />
        </dataContext.Provider>
      </main>
    </>
  );
}
