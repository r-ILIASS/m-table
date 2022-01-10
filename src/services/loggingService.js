import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

function initLogger() {
  Sentry.init({
    dsn: "https://8e5346f1aeba41dfb45fbb654031ea11@o1112427.ingest.sentry.io/6142016",
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  initLogger,
  log,
};
