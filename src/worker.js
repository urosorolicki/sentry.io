import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "https://examplePublicKey@o0.ingest.sentry.io/0",
});

const worker = new Worker("worker.js");

// Errors from `onmessage` callback of `worker.js`
// will be captured.
worker.postMessage("Hello!");



