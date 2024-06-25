import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App About" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const about = () => {
  return (
    <div className="prose prose-blue prose-xl dark:prose-invert">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      <Link to="/" prefetch="render">home</Link>
    </div>
  );
};

export default about;
