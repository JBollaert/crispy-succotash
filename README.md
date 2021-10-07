# Assignment: Bowling algorithm

The goal of this assignment is to implement the bowling scoring algorithm.  
The rules of bowling can be found [here][rules].

The algorithm should be served on a HTTP server, which contains a single `/compute` endpoint. We will help you with the setup of the server, you can find instructions on how to get started below.

The assignment should take around three hours to complete.

## Specification

### Input

The input is a HTTP POST request to the `/compute` endpoint.
The body is a JSON object where the "game" key will map to a value which represents a game of bowling.
This value is an array which contains nine tupples and one triple, each representing a frame.

### Output

The output is a HTTP response with status code 200. The body is a JSON object with a single "score" key. It contains a single integer which represents the total score of the game. In case the input is invalid, the server should instead return a HTTP response with status code 400.

### Example

```
$ curl http://localhost:8080/compute \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{"game": [[1,2],[3,4],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0,0]]}'

{"score":10}
```

## Getting started

### 1. Install NodeJs

Click [here][node-install] to go to the NodeJs installer. It will install `node`, `npm` and `npx`.

### 2. Copy repository

_Please refrain from forking or using 'upnxt-assignment-cloud' as a name._

You can make a copy of the repository with the following commands:

```
npx degit inthepocket/upnxt-assignment-cloud#main assignment
cd assignment
git init
git add .
git commit -m "init"
```

Afterwards create a public repository on GitHub, we recommend to use the autogenerated name. GitHub will provide you a snippet to _push an existing repository from the command line_.

### 3. Install dependencies

You will need to use `npm`, a package manager, to download all third-party modules:

```
npm install
```

A `node_modules` directory will appear which contains all dependencies.

### 4. Bootstrap the server

Finally, start the server to begin development. The server will automatically reload when files are modified.

```
npm start
```

It is possible to invoke your server with `curl` as shown in the example above.
Alternatively, you can use any other HTTP client.

> Note: It is the `package.json` file which contains the definition of dependencies and scripts.

## Tips

- Keep it simple, stupid.
- Keep it readable. Code is read more often than written.
- Keep it typed. Static analysis prevents most mistakes.

[rules]: https://www.myactivesg.com/sports/bowling/how-to-play/bowling-rules/how-are-points-determined-in-bowling
[node-install]: https://nodejs.org/en/download/
