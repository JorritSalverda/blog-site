import type { MetaFunction, LinksFunction } from "@remix-run/cloudflare";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "~/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Going Green",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="my-0 p-6">
          <Link to="/">
            <h1 className="text-5xl text-center mt-2 mb-6 text-lime-600 font-medium">Going Green</h1>
          </Link>
        </div>
        <div className="max-w-5xl mx-auto min-h-screen my-0 p-6">
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
