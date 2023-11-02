import allSiteCss from "~/styles/allSite.css";

import type { LinksFunction } from "@remix-run/node";

import { Outlet, Link } from "@remix-run/react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: allSiteCss },
];

export default function SideNav() {
  const closeSideNav = () => {
    console.log("closeSideNav");
    document.getElementById("sidenav")!.style.width = "0";
    document.getElementById("main")!.style.marginLeft= "0";
    document.getElementById("main")!.style.width = "100%";
    document.getElementById("sidenav-opener")!.style.display = "inline";
  };

  const openSideNav = () => {
    console.log("openSideNav");
    document.getElementById("sidenav")!.style.width = "10vw";
    document.getElementById("main")!.style.marginLeft = "10vw";
    document.getElementById("main")!.style.width = "89vw";
    document.getElementById("sidenav-opener")!.style.display = "none";
  };

  return (
    <>
      <aside id="sidenav">
        <span className="closebtn" onClick={closeSideNav}>&times;</span>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/servicePoints">Service Points</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/login">Log out</Link>
          </li>
        </ul>
      </aside>

      <main id="main">
        <span id="sidenav-opener" onClick={openSideNav}>&#9776;</span>
        <Outlet />
      </main>
    </>
  );
}
