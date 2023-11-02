import { cssBundleHref } from "@remix-run/css-bundle";
import "@picocss/pico/css/pico.min.css";
import allSiteCss from "~/styles/allSite.css";

import type { LinksFunction } from "@remix-run/node";

import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: allSiteCss },
];

export default function App() {
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
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <aside id="sidenav">
          <span className="closebtn" onClick={closeSideNav}>&times;</span>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/one">One</Link>
            </li>
            <li>
              <Link to="/two">Two</Link>
            </li>
          </ul>
        </aside>

        <main id="main">
          <span id="sidenav-opener" onClick={openSideNav}>&#9776;</span>
          <Outlet />
        </main>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
