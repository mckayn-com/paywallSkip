"use client";

export default function GlobalError({ error }: { error: Error }) {
  return (
    <html>
      <body>
        <h1>Hydration Error</h1>
        <pre>{error.message}</pre>
        <pre>{error.stack}</pre>
      </body>
    </html>
  );
}
