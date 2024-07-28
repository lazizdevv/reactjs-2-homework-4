import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Header } from "../header";
import { loadState } from "../../config/storege";

export const MainLayout = () => {
  const user = loadState("user");
  if (!user) return <Navigate to={"/login"} />;
  return (
    <>
      <header><Header/></header>
      <main>
        <Outlet />
      </main>
    </>
  );
};