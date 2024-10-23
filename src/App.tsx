import React from 'react';
import { FileGrid } from './components/FileGrid';
import { SearchBar } from './components/SearchBar';
import { AuthForms } from './components/AuthForms';
import { Profile } from './components/Profile';
import { useStore } from './store/useStore';
import { FileArchive } from 'lucide-react';

function App() {
  const { user } = useStore();

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <FileArchive className="w-8 h-8 text-blue-600 mr-2" />
              <h1 className="text-2xl font-bold text-gray-900">File Repository</h1>
            </div>
            {user && (
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-blue-600 hover:text-blue-800"
              >
                {user.name} {user.lastName}
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {user ? (
          <>
            <Profile />
            <SearchBar />
            <FileGrid />
          </>
        ) : (
          <AuthForms />
        )}
      </main>
    </div>
  );
}

export default App;