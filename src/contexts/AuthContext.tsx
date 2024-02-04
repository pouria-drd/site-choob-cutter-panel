import { UserRolesEnum } from "../enums/UserRolesEnum";
import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
  userRole: UserRolesEnum;
  login: (role: UserRolesEnum) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const USER_ROLE_KEY = "role";
const defaultUserRole: UserRolesEnum = UserRolesEnum.GUEST;


const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userRole, setUserRole] = useState<UserRolesEnum>(() => {
    const storedRole = sessionStorage.getItem(USER_ROLE_KEY);
    return storedRole ? (storedRole as UserRolesEnum) : defaultUserRole;
  });

  useEffect(() => {
    // Store user role in sessionStorage after each state update
    sessionStorage.setItem(USER_ROLE_KEY, userRole);
  }, [userRole]);


  const login = (role: UserRolesEnum = UserRolesEnum.USER) => {
    // Set user role asynchronously
    setTimeout(() => {
      setUserRole(role);
    }, 0);
  };

  const logout = () => {
    // Clear localStorage and set user role asynchronously
    setTimeout(() => {
      localStorage.clear();
      sessionStorage.clear();
      setUserRole(UserRolesEnum.GUEST);
    }, 0);
  };

  return (
    <AuthContext.Provider value={{ userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
