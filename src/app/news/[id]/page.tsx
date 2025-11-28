import { getArticleById, getArticles } from '@/data/newsData';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const article = await getArticleById(id);
  
  if (!article) return { title: 'Article Not Found' };

  return {
    title: `${article.title} | LiveNews`,
    description: article.excerpt,
  };
}

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((post) => ({
    id: post.id,
  }));
}

export default async function ArticlePage({ params }: PageProps) {
  const { id } = await params;
  const article = await getArticleById(id);

  if (!article) {
    notFound();
  }

  const displayImage = article.imageUrl || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80";

  return (
    <main className="min-h-screen bg-white pb-20">
      <Navbar />
      
      <article className="container mx-auto px-4 mt-8 max-w-3xl">
        <div className="mb-4">
            <span className="bg-[#cc0000] text-white px-3 py-1 rounded-sm text-sm font-bold uppercase tracking-wide">
                {article.category}
            </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
          {article.title}
        </h1>

        <div className="flex items-center text-gray-500 text-sm mb-8 border-b border-gray-100 pb-6">
          <span className="font-bold text-gray-800 mr-2">{article.author}</span>
          <span>| {new Date(article.publishedAt).toDateString()}</span>
        </div>

        <div className="relative w-full h-64 md:h-[500px] mb-10 bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src={displayImage}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed font-serif">
            <p className="text-xl font-medium mb-6 text-gray-600">{article.excerpt}</p>
            <p className="whitespace-pre-wrap">{article.content}</p>
        </div>
      </article>
    </main>
  );
}
