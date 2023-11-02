import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <h1>Pusher Sidenav Index</h1>

      <iframe id="old-nexus" src="http://localhost:3000/" title="Old Nexus Client"></iframe>
    </>
  );
}
