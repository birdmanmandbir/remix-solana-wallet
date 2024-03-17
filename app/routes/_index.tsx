import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { AppBar } from "~/components/AppBar";
import { ContextProvider } from "~/contexts/ContextProvider";
import walletstylesUrl from "@solana/wallet-adapter-react-ui/styles.css?url";
import stylesUrl from "~/styles/globals.css?url";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: walletstylesUrl },
    { rel: "stylesheet", href: stylesUrl },
  ];
};

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <ContextProvider>
        <div className="flex flex-col h-screen">
          <AppBar />
          <Outlet />
        </div>
      </ContextProvider>

      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
