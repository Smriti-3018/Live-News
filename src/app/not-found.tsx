

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <h1 className="text-9xl font-black text-gray-200">404</h1>
      <h2 className="text-3xl font-bold text-gray-900 mt-4">Page Not Found</h2>
      <p className="text-gray-500 mt-2 mb-8 max-w-md">
        The news article you are looking for might have been removed or is temporarily unavailable.
      </p>
      <Link 
        href="/" 
        className="bg-red-700 text-white px-6 py-3 rounded-full font-bold hover:bg-red-800 transition shadow-lg"
      >
        Back to Home
      </Link>
    </div>
  );
}