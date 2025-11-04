import axios from "axios";

const API_BASE_URL =
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

/**
 * Login user and receive authentication token
 * @param credentials - User email and password
 * @returns Promise with login response containing token
 */
export const login = async (
  credentials: LoginCredentials
): Promise<LoginResponse> => {
  const { data } = await axios.post<LoginResponse>(
    `${API_BASE_URL}/login`,
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
    `${API_BASE_URL}/logout`,
    {},
    {
      headers: {
        Authorization: `Bearer ${currentToken}`,
      },
    }
  );
  return data;
};
