import React, { createContext, useContext, useState, ReactNode } from "react";
import * as AuthSession from "expo-auth-session";
import {
  CLIENT_ID,
  REDIRECT_URI,
  RESPONSE_TYPE,
  CDN_IMAGE,
  SCOPE,
} from "../config";
import { api } from "../services/api";

type User = {
  id: string;
  username: string;
  firstName: string;
  avatar: string;
  email: string;
  token: string;
};

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token: string;
  };
};

type AuthContextData = {
  user: User;
  loading: boolean;
  signIn: () => Promise<void>;
};

type AuthProviderProps = {
  children: ReactNode;
};

//{} as valor -> significa que o objecto é do tipo valor
export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(false);

  const signIn = async () => {
    try {
      setLoading(true);
      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
      const { type, params } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthorizationResponse;
      if (type === "success") {
        api.defaults.headers.authorization = `Bearer ${params.access_token}`;
        const userInfo = await api.get("users/@me");
        const firstName = userInfo.data.username.split("")[0];
        userInfo.data.avatar = `${CDN_IMAGE}/avatar/${userInfo.data.id}/${userInfo.data.avatar}.png`;
        setUser({ ...userInfo.data, firstName, token: params.access_token });
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch {
      throw new Error("Não foi possivel autenticar");
    }
  };

  return (
    <AuthContext.Provider value={{ user, signIn, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

//

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
