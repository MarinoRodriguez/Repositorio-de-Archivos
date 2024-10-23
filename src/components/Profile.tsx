import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import { UploadModal } from './UploadModal';
import { FileCard } from './FileCard';

export const Profile: React.FC = () => {
  const { user, setUser } = useStore();
  const [activeTab, setActiveTab] = useState('details');
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  if (!user) return null;

  const tabs = [
    { id: 'details', label: 'Profile Details' },
    { id: 'favorites', label: 'Favorites' },
    { id: 'downloads', label: 'Downloads' },
    { id: 'uploads', label: 'My Uploads' },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Profile</h2>
          <button
            onClick={() => setUser(null)}
            className="px-4 py-2 text-red-600 border border-red-600 rounded-lg hover:bg-red-50"
          >
            Logout
          </button>
        </div>

        <div className="border-b border-gray-200 mb-6">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {activeTab === 'details' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <p className="mt-1 text-lg">{user.name}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <p className="mt-1 text-lg">{user.lastName}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <p className="mt-1 text-lg">{user.email}</p>
            </div>
          </div>
        )}

        {activeTab === 'favorites' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {user.favorites.map((file) => (
              <FileCard key={file.id} file={file} />
            ))}
          </div>
        )}

        {activeTab === 'downloads' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {user.downloads.map((file) => (
              <FileCard key={file.id} file={file} />
            ))}
          </div>
        )}

        {activeTab === 'uploads' && (
          <>
            <div className="flex justify-end mb-6">
              <button
                onClick={() => setIsUploadModalOpen(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Upload New File
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {user.uploads.map((file) => (
                <FileCard key={file.id} file={file} />
              ))}
            </div>
          </>
        )}
      </div>

      <UploadModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
      />
    </div>
  );
};