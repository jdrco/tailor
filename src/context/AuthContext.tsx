import React, { useEffect, useState, createContext, useContext } from 'react';
import { onAuthStateChanged, getAuth, User } from 'firebase/auth';
import { firebaseApp } from '@/firebase/config';

const auth = getAuth(firebaseApp);

interface AuthContextProps {
  user: User | null;
}

export const AuthContext = createContext<AuthContextProps>({ user: null });

export const useAuthContext = (): AuthContextProps => useContext(AuthContext);

interface AuthContextProviderProps {
  children: React.ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
