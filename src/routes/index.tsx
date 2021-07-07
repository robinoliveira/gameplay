import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";
import { Signin } from "../screens/Signin";
import { useAuth } from "../hooks/auth";

export const Routes = () => {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      {user.id ? <AuthRoutes /> : <Signin />}
    </NavigationContainer>
  );
};
