import { createContext, useState } from 'react';
import { User } from '../types';

interface AuthProps {
  isAuthenticated: boolean;
  user: User | null;
  updateUser: (user: User) => void;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthProps>({} as AuthProps);

export const AuthProvider = ({ children }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  const updateUser = (user: User) => {
    setUser(user);
    localStorage.setItem('blockstoUser', JSON.stringify(user));
  };

  const login = () => {};
  const logout = () => {
    localStorage.removeItem('blockstoUser');
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, updateUser, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
