import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        { path: "/", element: <MainContainer /> },
        { path: "/watch", element: <WatchPage /> },
      ],
    },
  ]);
  return (
    <div>
      <Header />;
      <RouterProvider router={router} />;
    </div>
  );
};

export default App;
