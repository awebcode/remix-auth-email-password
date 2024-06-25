import { FormStrategy } from "remix-auth-form";
// app/services/auth.server.ts
import { Authenticator } from "remix-auth";
import { Tuser } from "types/Tuser";
import { sessionStorage } from "~/services/session.server";

// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session
const authenticator = new Authenticator<Tuser>(sessionStorage);

const formStrategy = new FormStrategy(async ({ form }) => {
  // Here you can use `form` to access and input values from the form.
  // and also use `context` to access more things from the server
  const username = form.get("username") as string; // or email... etc
  const email = form.get("email") as string;
  const password = form.get("password") as string;

  // And finally, you can find, or create, the user
  const user = {
    id: 1,
    username,
    email,
    password,
  };

  // And return the user as the Authenticator expects it
  return user;
});
authenticator.use(formStrategy, "auth");

export { authenticator };
