# NextJS with Express (fully ESM version)

This is an example of running NextJS and Express in the same server so you can have the advantages of one domain address (with no CORS and auth headaches), code reuse, sharing database access between NextJS and Express at will, possiblity to have fully safe types [from database all the way to the frontend](https://www.youtube.com/watch?v=NqxchXF0RPQ), and more!

## How to run? 

### Dev environment with live reloading

Open two terminals and:

**1. Start a Typescript watcher**

```sh
npx tsc --project tsconfig.server.json --watch
```

**2. Start nodemon server**

Once the project is compiled and the `/dist` folder is populated, run: 

```sh
npx nodemon dist/index.js
```

### Production 

 **1. Build the project** 

 ```sh 
 npm run build
 ```

 **2. Start the server**

```sh 
npm run start
```

## Test the server

1. Visiting http://localhost:3000 in the browser should show you a NextJS page with a Hello world. All requests that are not handled by Express will be given to the NextJS server. 

2. There's a simple route defined in Express that handles `/api/hello`. You can test it with Httpie: 

```sh 
$ http localhost:3000/api/hello name="NextJS with Express"

HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 39
Content-Type: application/json; charset=utf-8
Date: Mon, 09 Jan 2023 09:46:26 GMT
ETag: W/"27-heyncYsW2Tdpex/+7kqTCRWLKys"
Keep-Alive: timeout=5
X-Powered-By: Express

{
    "echo": {
        "name": "NextJS with Express"
    }
}
```
