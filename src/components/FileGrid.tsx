import React from 'react';
import { FileCard } from './FileCard';
import { useStore } from '../store/useStore';

export const FileGrid: React.FC = () => {
  const { files, searchQuery } = useStore();
  
  const filteredFiles = files.filter(
    (file) =>
      file.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      file.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {filteredFiles.map((file) => (
        <FileCard key={file.id} file={file} />
      ))}
    </div>
  );
};