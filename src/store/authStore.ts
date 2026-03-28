import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  isLoggedIn: boolean;
  user: {
    email: string;
    name: string;
    role: 'admin' | 'author' | 'user';
  } | null;
  
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      user: null,

      login: async (email: string, password: string) => {
        // Simulasi login (ganti dengan API call nanti)
        if (email === 'admin@itn.com' && password === 'admin123') {
          set({
            isLoggedIn: true,
            user: {
              email,
              name: 'Admin User',
              role: 'admin'
            }
          });
          return true;
        } else if (email === 'author@itn.com' && password === 'author123') {
          set({
            isLoggedIn: true,
            user: {
              email,
              name: 'Author User',
              role: 'author'
            }
          });
          return true;
        }
        return false;
      },

      logout: () => {
        set({
          isLoggedIn: false,
          user: null
        });
      }
    }),
    {
      name: 'auth-storage'
    }
  )
);

export default useAuthStore;