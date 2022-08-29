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
      <body className="text-lg text-slate-700 subpixel-antialiased bg-gradient-to-b from-slate-100 to-slate-50">
        <div className="p-3 max-w-3xl mx-auto min-h-screen">
          <div className="relative h-40 p-3 flex items-center justify-end sm:justify-center">
            <Link to="/" className="flex-none w-40">
              <img src="/go_green.png" width="100" alt="logo" />
            </Link>
            <Link to="/" className="text-center w-9/12 flex-initial sm:w-full sm:flex-auto leading-none font-medium">
              <h1 className="text-5xl m-2 text-lime-600">Going Green</h1>
              <h6 className="text-md m-2 italic text-slate-500">Towards a sustainable future</h6>
            </Link>
          </div>
          <div className="pt-6">
            <Outlet />
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "cf8cb030f7d34fa1a2e96295646270ea"}'></script>
      </body>
    </html>
  );
}
