import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";
import bootstrapStyle from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { SSRProvider } from "react-bootstrap";
import global from './styles/global.css'

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export const links: LinksFunction = () => {
    return [
      {
        rel: "stylesheet",
        href: bootstrapStyle,
      },
      {
        rel: "stylesheet",
        href: global,
      },
    ];
}


export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <SSRProvider>
          <Outlet />
        </SSRProvider>
          <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
