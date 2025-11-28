import { getArticles } from '@/data/newsData';
import NewsCard from '@/components/NewsCard';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'LiveNews - Latest Headlines',
  description: 'Breaking news from India and the world.',
};

export default async function Home() {
  const articles = await getArticles();

  if (!articles || articles.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 pt-24 text-center">
          <h2 className="text-2xl font-bold text-gray-500">No news available.</h2>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      <Navbar />
      
      <div className="container mx-auto px-4 mt-8">
        
        <div className="flex items-center mb-8 border-b border-gray-200 pb-4">
           <div className="h-8 w-1 bg-[#cc0000] mr-3"></div>
           <h1 className="text-3xl font-serif font-bold text-gray-900">Latest Headlines</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article) => (
            <NewsCard 
              key={article.id} 
              article={article} 
              featured={false}
            />
          ))}
        </div>

      </div>
    </main>
  );
}
