import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.css"
          />
          {assets}
        </head>
        <body class="bg-accent">
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
