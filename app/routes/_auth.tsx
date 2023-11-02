import { Outlet } from "@remix-run/react"

export default function Auth() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}
