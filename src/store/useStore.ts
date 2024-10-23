import { create } from 'zustand';
import { User, FileItem } from '../types';

interface Store {
  user: User | null;
  files: FileItem[];
  searchQuery: string;
  setUser: (user: User | null) => void;
  setFiles: (files: FileItem[]) => void;
  setSearchQuery: (query: string) => void;
  addFile: (file: FileItem) => void;
  toggleFavorite: (fileId: string) => void;
  addDownload: (fileId: string) => void;
}

export const useStore = create<Store>((set) => ({
  user: null,
  files: [],
  searchQuery: '',
  setUser: (user) => set({ user }),
  setFiles: (files) => set({ files }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  addFile: (file) => set((state) => ({ files: [...state.files, file] })),
  toggleFavorite: (fileId) =>
    set((state) => {
      if (!state.user) return state;
      const isFavorite = state.user.favorites.some((f) => f.id === fileId);
      const file = state.files.find((f) => f.id === fileId);
      if (!file) return state;
      
      return {
        user: {
          ...state.user,
          favorites: isFavorite
            ? state.user.favorites.filter((f) => f.id !== fileId)
            : [...state.user.favorites, file],
        },
      };
    }),
  addDownload: (fileId) =>
    set((state) => {
      if (!state.user) return state;
      const file = state.files.find((f) => f.id === fileId);
      if (!file) return state;
      
      return {
        user: {
          ...state.user,
          downloads: [...state.user.downloads, file],
        },
      };
    }),
}));