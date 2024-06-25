import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="prose prose-blue prose-xl dark:prose-invert">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, aliquam
        recusandae nam soluta perferendis hic atque facere fuga aliquid consequuntur culpa
        totam omnis quae voluptas optio laboriosam earum itaque provident.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, aliquam
        recusandae nam soluta perferendis hic atque facere fuga aliquid consequuntur culpa
        totam omnis quae voluptas optio laboriosam earum itaque provident.
      </p>
      <Link to="/about" prefetch="render">
        about
      </Link>
      <Link to="/login" prefetch="render" className="px-2 mx-2">
        login
      </Link>
    </div>
  );
}
