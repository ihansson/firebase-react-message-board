import React from "react";
import { UserContext } from "../providers/UserProvider";

const getDisplayName = (WrappedComponent) => {
  return `${WrappedComponent.displayName || WrappedComponent.name || ""}`;
};

export const withUser = (Component) => {
  const WrappedComponent = (props) => {
    return (
      <UserContext.Consumer>
        {(user) => <Component user={user} {...props} />}
      </UserContext.Consumer>
    );
  };
  WrappedComponent.displayName = `WithUser(${getDisplayName(
    WrappedComponent
  )})`;
  return WrappedComponent;
};
