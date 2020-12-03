import React from "react";
import { render } from "react-dom";

import "./index.scss";

import Application from "./components/Application";
import PostsProvider from "./providers/PostsProvider";
import UserProvider from "./providers/UserProvider";

render(
  <PostsProvider>
    <UserProvider>
      <Application />
    </UserProvider>
  </PostsProvider>,
  document.getElementById("root")
);
