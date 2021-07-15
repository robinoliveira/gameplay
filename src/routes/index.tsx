import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./app.routes";
import { Signin } from "../screens/Signin";
import { useAuth } from "../hooks/auth";

export const Routes = () => {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      {user.id ? <AppRoutes /> : <Signin />}
    </NavigationContainer>
  );
};
