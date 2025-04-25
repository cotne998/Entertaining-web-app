import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/Login");
  }, []);

  return (
    <main>
      <Outlet />
    </main>
  );
}
