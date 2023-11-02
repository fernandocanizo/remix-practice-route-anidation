import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const openSideNav = () => {
    console.log("openSideNav");
    document.getElementById("sidenav")!.style.width = "250px";
    document.getElementById("main")!.style.marginLeft = "250px";
  };

  return (
    <main id="main">
      <h2>Pusher Sidenav</h2>
      <p>Click on the element below to open the side navigation menu, and push this content to the right.</p>
      <span id="sidenav-opener" onClick={openSideNav}>&#9776; open</span>
    </main>
  );
}
