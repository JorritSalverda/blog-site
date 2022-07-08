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
      <body className="text-lg subpixel-antialiased">
        <div className="p-3 max-w-3xl mx-auto min-h-screen">
          <div className="relative h-44 flex items-center justify-end sm:justify-center">
            <Link to="/" className="absolute left-0">
              <img src="/go_green.png" width="100" alt="logo" />
            </Link>
            <Link to="/" className="text-center w-9/12 flex-initial sm:w-full sm:flex-auto leading-none font-medium">
              <h1 className="text-5xl text-lime-600">Going Green</h1>
              <h6 className="text-md italic text-slate-500">For a brighter future</h6>
            </Link>
          </div>
          <div className="pt-6">
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
