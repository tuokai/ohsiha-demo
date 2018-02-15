# \#ohsiha 2018 - guestbook CR(U)D demo


This project is created with [create-react-app](https://github.com/facebook/create-react-app).

To get started, you need [npm](http://npmjs.com/) or [yarn](https://yarnpkg.com/) installed on your machine.

## Backend
To get very simple CRUD API up and running, we use [json-server](https://github.com/typicode/json-server):


```
$ npm install -g json-server
```
or with yarn:
```
$ yarn global add json-server
```

In this example we used following `db.json`:
```
{
  "messages": [
    { "id": 1, "message": "Nice questbook!", "author": "Donald Duck" },
    { "id": 2, "message": "Greetings from Mickey!", "author": "Mickey Mouse" },
    { "id": 3, "message": "I'm just leaving this here...", "author": "Scrooge McDuck" }
  ]
}
```

Just create it wherever you want, install `json-server` and run the following command:

```
$ json-server --watch db.json --port 8080
```

Please note: `json-server` does not use real database and is meant mainly for quick prototyping. **Not** recommended to be used in a real-life projects.

## Frontend

Run
```
npm start
```
to get client up and running in dev mode at `http://localhost:3000/`.


## To set up similar project by yourself:
Run

```
$ npx create-react-app ohsiha-demo
```

(npx comes with npm 5.2+ and higher)

## See more (e.g.):
[React documentation](https://reactjs.org/)

[Official create-react-app documentation](https://github.com/facebook/create-react-app)

[Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

## Ideas about future development
- Proper state management: [redux](https://redux.js.org/), [mobx](https://github.com/mobxjs/mobx) or something similar
- Show spinner or some other indicator when API calls are ongoing
- Proper error handling
- Etc...
