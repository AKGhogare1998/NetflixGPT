import Browser from "./Browser";
import GptSearch from "./GptSearch";
import Login from "./Login";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browser />,
    },
    {
      path: "/",
      element: <Body />,
    },
  ]);

  return (
    <div className="bg-black">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
