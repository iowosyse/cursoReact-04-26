import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <>
      <div className="bg-gray-200 flex flex-col h-dvh">

        {/* HEADER */}
        <div className="bg-amber-100 h-20 border-b text-center flex items-center justify-center">
          <h1>HEADER PRRON</h1>
        </div>

        {/* CONTENIDO */}
        <div className="flex-1">
          <Outlet />
        </div>

        {/* FOOTER */}
        <footer className="bg-amber-100 text-center py-4 flex flex-col gap-y-4">
          <p>footer prron</p>

          <div className="flex justify-center gap-x-5">
            <Link to="/main" className="hover:underline">
              MAIN
            </Link>
            <Link to="/otra" className="hover:underline">
              OTRA
            </Link>
          </div>
        </footer>

      </div>
    </>
  );
}