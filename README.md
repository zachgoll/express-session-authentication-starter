## 2 Part Repository

This repository is supplementary to my tutorial on [authenticating users in Node, Express, and Angular](https://zachgoll.github.io/blog/2019/choosing-authentication-strategy).

### Setup

You will need to create a `.env` file in the base of the project with the following contents:

```
DB_STRING=
SECRET=
```

### Part 1 - All in One

See `app-all.js` for a fully functional Express Session authentication strategy all in one file (easier to follow what is actually going on in conjunction with [tutorial](https://zachgoll.github.io/blog/2019/choosing-authentication-strategy))

```
node app-all.js
```

### Part 2 - Refactored

The refactored app, `app.js` is how you would use this in an actual application.

```
node app.js
```