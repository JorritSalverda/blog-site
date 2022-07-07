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
        <div className="p-3 max-w-3xl mx-auto min-h-screen">
          <div className="relative h-44 flex items-center">
            <Link to="/" className="absolute left-0">
              <img src="/go_green.png" width="100" />
            </Link>
            <Link to="/" className="flex-auto text-center leading-none font-medium">
              <h1 className="text-5xl text-lime-600">Going Green</h1>
              <h6 className="text-md text-slate-600">One step at a time</h6>
            </Link>
          </div>
          <div className="">
            <Outlet />
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
