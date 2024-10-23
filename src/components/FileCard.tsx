import React from 'react';
import { Heart, Download, Link } from 'lucide-react';
import { FileItem } from '../types';
import { useStore } from '../store/useStore';

interface FileCardProps {
  file: FileItem;
}

export const FileCard: React.FC<FileCardProps> = ({ file }) => {
  const { user, toggleFavorite, addDownload } = useStore();
  const isFavorite = user?.favorites.some((f) => f.id === file.id);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <img
        src={file.imageUrl}
        alt={file.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{file.title}</h3>
        <p className="text-gray-600 mb-4">{file.description}</p>
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <a
              href={file.officialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <Link className="w-4 h-4 mr-2" />
              Official
            </a>
            <a
              href={file.downloadLink}
              onClick={() => addDownload(file.id)}
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </a>
          </div>
          {user && (
            <button
              onClick={() => toggleFavorite(file.id)}
              className={`p-2 rounded-full ${
                isFavorite ? 'text-red-500' : 'text-gray-400'
              } hover:bg-gray-100`}
            >
              <Heart className="w-6 h-6" fill={isFavorite ? 'currentColor' : 'none'} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};