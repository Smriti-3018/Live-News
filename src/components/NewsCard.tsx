'use client'; 

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Article } from '@/data/newsData';

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80";

export default function NewsCard({ article, featured = false }: { article: Article, featured?: boolean }) {
  
  const [imgSrc, setImgSrc] = useState(article.imageUrl || FALLBACK_IMAGE);

  return (
    <Link href={`/news/${article.id}`} className="block h-full border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 bg-white group flex flex-col">
      
      <div 
        className="w-full bg-gray-200 relative overflow-hidden flex-shrink-0" 
        style={{ height: featured ? '400px' : '220px', minHeight: featured ? '400px' : '220px' }}
      >
        <Image
          src={imgSrc}
          alt={article.title}
          width={800} 
          height={500}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          priority={featured}
          onError={() => {
            setImgSrc(FALLBACK_IMAGE);
          }}
        />
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-3">
          <span className="inline-block px-2 py-1 text-[10px] font-bold text-white bg-[#cc0000] uppercase tracking-wider rounded-sm">
            {article.category}
          </span>
        </div>
          
        <h2 className={`font-serif font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#cc0000] transition-colors ${featured ? 'text-3xl' : 'text-lg line-clamp-2'}`}>
          {article.title}
        </h2>

        <p className={`text-gray-500 text-sm mb-4 ${featured ? 'line-clamp-[12]' : 'line-clamp-2'}`}>
          {article.excerpt}
        </p>

        <div className="mt-auto pt-4 border-t border-gray-100 text-xs text-gray-400 flex items-center justify-between">
           <span className="font-semibold text-gray-700">{article.author}</span>
           <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
        </div>
      </div>
    </Link>
  );
}
