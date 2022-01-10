import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import App from "./App";

import { GlobalStyle } from "./globalStyles";

Sentry.init({
  dsn: "https://8e5346f1aeba41dfb45fbb654031ea11@o1112427.ingest.sentry.io/6142016",
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});

const element = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  element
);
