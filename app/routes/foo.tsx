import { NavLink, useRouteLoaderData } from "@remix-run/react";

export default function FooRoute() {
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

      <h1>Foo</h1>
      <p>This is the foo route.</p>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
