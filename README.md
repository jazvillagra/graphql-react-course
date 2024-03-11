# Install
This application uses the GraphiQL IDE.
You'll need:
- Node lts/hydrogen
- nav of your choice
- IDE of your choice
  
Go to the `users` directory and run `npm install` to setup your local environment

# Run dev mode
You'll need both of these running in parallel.

Go to the `users` directory and:

## Start json server
The JSON Server provides you with a test REST API created via the `db.json` file

```npm run json:server```

URL: `http://localhost:3000/`

Example request:
- GET users: `http://localhost:3000/users`
- GET user: `http://localhost:3000/user/20`
- GET companies: `http://localhost:3000/companies`
- GET company: `http://localhost:3000/company/1`
  
## Start application

To start your GraphQL application and the GraphiQL IDE, run:

```npm run dev```

Here you'll be able to test the application.

**GraphiQL's URL:** ```http://localhost:4000```

Here you can run an example query:

```
{
  user(id: "23"){
    id
    firstName
    age
    company{
      id
      name
    }
  }
}
```
