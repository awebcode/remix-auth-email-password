import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { authenticator } from "~/services/auth.server";

// in the loader of the login route
export async function loader({ request }: LoaderFunctionArgs) {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
}
export async function action({ request }: ActionFunctionArgs) {
  return await authenticator.logout(request, {
    redirectTo: "/login",
  });
}
export default function Dashboard() {
  const user = useLoaderData<typeof loader>();
  return (
    <div className=" prose prose-blue prose-xl dark:prose-invert">
      dashboard <h1>{user?.username} </h1> <p>{user?.email}</p>
      <Form method="post">
        <button className=" flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Logout
        </button>
      </Form>{" "}
    </div>
  );
}
