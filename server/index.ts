import express from "express";
import next from "next";

const app = express();
app.use((req, res, next) => {
  console.log("Request: ", req.url, req.method);
  next();
});
app.use(express.json());

// start Next.js server
const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

app.post("/api/hello", (req, res) => {
  console.log(req.body);
  return res.json({
    echo: req.body,
  });
});

nextApp.prepare().then(() => {
  app.all("*", (req, res) => {
    return handle(req, res);
  });

  app.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
0;
