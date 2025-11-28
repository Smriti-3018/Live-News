export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      
      <div className="h-16 w-full bg-gray-200 animate-pulse mb-8 rounded-md"></div>
      
   
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 h-96 bg-gray-200 animate-pulse rounded-xl"></div>
        <div className="flex flex-col gap-6">
          <div className="h-48 bg-gray-200 animate-pulse rounded-xl"></div>
          <div className="h-48 bg-gray-200 animate-pulse rounded-xl"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-64 bg-gray-200 animate-pulse rounded-xl"></div>
        ))}
      </div>
    </div>
  );
}