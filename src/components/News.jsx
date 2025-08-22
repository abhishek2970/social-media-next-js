import React, { useEffect, useState } from 'react';
import Dropdown from './Dropdown'; 
export default function News() {
  const [news, setNews] = useState([]);
  const [articlenum, setArticlenum] = useState(3);
  const [category, setCategory] = useState('general'); // Default category

  const fetchnews = (selectedcategory) => {
    fetch(`https://saurav.tech/NewsAPI/top-headlines/category/${selectedcategory}/in.json`)
        .then((res) => res.json())
        .then((data) => {
            setNews(data.articles || []);
            
        })
        .catch((err) => console.error(err));
  }
  useEffect(() => {
    fetchnews(category);
  }, [category]);

  const handlecategorychange = (selectedCategory) => {  
    setCategory(selectedCategory);
  }

  return (
    <div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Latest News</h2>
        <Dropdown onCategoryChange={handlecategorychange}/>
        <ul className="space-y-4">
          {news.slice(0, articlenum).map((article, index) => (
            <li
              key={index}
              className="flex items-center gap-4 border-b pb-4 last:border-b-0"
            >
              {/* News Image */}
              <img
                src={article.urlToImage || '/placeholder.jpg'}
                alt={article.title}
                className="w-20 h-20 object-cover rounded-md border border-gray-200"
              />

              {/* News Details */}
              <div className="flex-1">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm font-semibold text-blue-600 hover:underline line-clamp-2"
                >
                  {article.title}
                </a>
                <p className="text-gray-600 text-xs mt-1 line-clamp-2">
                  {article.description || 'No description available.'}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* Load More Button */}
        {articlenum < news.length && (
          <button
            onClick={() => setArticlenum(articlenum + 3)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
}
