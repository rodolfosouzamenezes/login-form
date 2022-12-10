import React, { createContext, useState } from "react";

export interface UserProps {
  email: string;
  password: string;
}

export interface AuthContextDataProps {
  user: UserProps;
  isUserLoading: boolean;
  signIn: (user: UserProps) => Promise<void>;
  logout: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode,
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthProviderProps) {
  const [isUserLoading, setIsUserLoading] = useState(false)
  var users: UserProps[] = []
  const [user, setUser] = useState<UserProps>({} as UserProps)

  async function signIn(user: UserProps) {
    try {
      setIsUserLoading(true)

      setTimeout(() => {
        setUser(user)
        users.push(user)
        console.log(users)
        setIsUserLoading(false)
      }, 1500)

    } catch (error) {
      console.log(error);
      throw error;
    } finally {
    }
  }

  async function logout() {
    try {
      setIsUserLoading(true)

      setUser({} as UserProps);
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setIsUserLoading(false)
    }
  }

  return (
    <AuthContext.Provider value={{
      signIn,
      logout,
      isUserLoading,
      user,
    }}>
      {children}
    </AuthContext.Provider>
  )
}