import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useEffect } from "react";

export default function MainLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/Main/Home");
  }, []);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
