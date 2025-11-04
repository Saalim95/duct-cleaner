import axios from "axios";

const VITE_BASE_API_URL =
  import.meta.env.VITE_BASE_API_URL || "http://localhost:8000/api";

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user?: {
    id: string;
    email: string;
    name?: string;
  };
}

export interface LogoutResponse {
  token: string;
  message?: string;
}

export interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  token: string;
  user?: {
    id: string;
    email: string;
    name?: string;
  };
}

/**
 * Login user and receive authentication token
 * @param credentials - User email and password
 * @returns Promise with login response containing token
 */
export const login = async (
  credentials: LoginCredentials
): Promise<LoginResponse> => {
  const { data } = await axios.post<LoginResponse>(
    `${VITE_BASE_API_URL}/login`,
    credentials
  );
  return data;
};

/**
 * Logout user - Note: Backend returns a new token in logout response
 * @param currentToken - Current authentication token
 * @returns Promise with logout response containing new token
 */
export const logout = async (currentToken: string): Promise<LogoutResponse> => {
  const { data } = await axios.post<LogoutResponse>(
    `${VITE_BASE_API_URL}/logout`,
    {},
    {
      headers: {
        Authorization: `Bearer ${currentToken}`,
      },
    }
  );
  return data;
};

/**
 * Register a new user
 * @param credentials - User name, email and password
 * @returns Promise with registration response containing token
 */
export const register = async (
  credentials: RegisterCredentials
): Promise<RegisterResponse> => {
  const { data } = await axios.post<RegisterResponse>(
    `${VITE_BASE_API_URL}/register`,
    credentials
  );
  return data;
};
