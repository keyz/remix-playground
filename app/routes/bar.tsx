import { NavLink, useRouteLoaderData } from "@remix-run/react";

export default function BarRoute() {
  const data = useRouteLoaderData("root");

  return (
    <div>
      <nav className="flex flex-col">
        <NavLink to="/" className="underline">
          home
        </NavLink>
        <NavLink to="/foo" className="underline">
          /foo
        </NavLink>
        <NavLink to="/bar" className="underline">
          /bar
        </NavLink>
      </nav>

      <h1>Bar</h1>
      <p>This is the bar route.</p>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
