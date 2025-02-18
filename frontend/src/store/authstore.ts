import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  accessToken?: string | null;
  refreshToken?: string | null;
  user: any;
}

const initialAuthState: AuthState = {
  isAuthenticated: localStorage.getItem('accessToken') ? true : false,
  accessToken: localStorage.getItem('accessToken'),
  refreshToken: localStorage.getItem('refreshToken'),
  user: JSON.parse(localStorage.getItem('user') || '{}'),
};

interface AuthStore {
  authState: AuthState;
  login: (accessToken: string, user: any, refreshToken: string) => void;
  logout: () => void;
  updateUser: (user: any) => void;
  updateAccessToken: (accessToken: string) => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  authState: { ...initialAuthState },
  login: (accessToken: string, user: any, refreshToken: string) => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('user', JSON.stringify(user));
    set((state) => ({
      authState: {
        ...state.authState,
        isAuthenticated: true,
        accessToken,
        refreshToken,
        user,
      },
    }));
  },
  updateUser: (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    set((state) => ({
      authState: {
        ...state.authState,
        user,
      },
    }));
  },
  logout: () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
    set({
      authState: {
        ...initialAuthState,
        isAuthenticated: false,
        accessToken: null,
        refreshToken: null,
        user: null,
      },
    });
  },
  updateAccessToken: (accessToken: string) => {
    localStorage.setItem('accessToken', accessToken);
    set((state) => ({
      authState: {
        ...state.authState,
        accessToken,
      },
    }));
  },
}));

export default useAuthStore;