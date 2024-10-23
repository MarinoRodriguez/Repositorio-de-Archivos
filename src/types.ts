export interface User {
  id: string;
  name: string;
  email: string;
  lastName: string;
  favorites: FileItem[];
  downloads: FileItem[];
  uploads: FileItem[];
}

export interface FileItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  officialLink: string;
  downloadLink: string;
  uploadedBy: string;
  createdAt: string;
}