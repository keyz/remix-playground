import type { MetaFunction } from "@remix-run/node";
import { NavLink, useRouteLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function IndexRoute() {
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

      <h1>home</h1>
      <p>This is the home route.</p>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
