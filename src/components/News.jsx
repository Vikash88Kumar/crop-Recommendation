import React, { useEffect, useState } from "react";
import {
  Newspaper,
  TrendingUp,
  Landmark,
  Wheat,
  ExternalLink,
  Loader2,
} from "lucide-react";

/* ------------------ CONFIG ------------------ */

const NEWS_API =
  'https://newsapi.org/v2/everything?q=("digital agriculture" OR "agri tech" OR "crop price" OR "farmer scheme" OR "government agriculture scheme" OR "farm technology")&language=en&sortBy=relevancy&apiKey=ec1af2a8b1e64ce7b04ce5d8d5524011';

/* ------------------ COMPONENT ------------------ */

export default function News() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch(NEWS_API);
        const data = await res.json();
        setArticles(data.articles || []);
      } catch (err) {
        console.error("News fetch failed", err);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* ================= HEADER ================= */}
        <header className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Newspaper className="w-8 h-8 text-white" />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            Smart Agriculture News
          </h1>

          <p className="text-slate-600 max-w-3xl mx-auto">
            Latest updates on crop prices, agri-technology, government schemes,
            and innovations helping farmers grow smarter.
          </p>
        </header>

        {/* ================= INFO STRIP ================= */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfoCard
            icon={<TrendingUp className="w-5 h-5" />}
            title="Crop Market Trends"
            desc="Daily crop price movements & demand insights"
          />
          <InfoCard
            icon={<Landmark className="w-5 h-5" />}
            title="Govt. Schemes"
            desc="Subsidies, MSP updates & farmer policies"
          />
          <InfoCard
            icon={<Wheat className="w-5 h-5" />}
            title="Agri Technology"
            desc="AI, IoT & modern farming techniques"
          />
        </section>

        {/* ================= NEWS GRID ================= */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-6 h-6 animate-spin text-emerald-600" />
            <span className="ml-3 text-slate-600">Loading agriculture news…</span>
          </div>
        ) : (
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <NewsCard key={index} article={article} />
            ))}
          </section>
        )}
      </div>
    </div>
  );
}

/* ------------------ COMPONENTS ------------------ */

function InfoCard({ icon, title, desc }) {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-5 flex gap-4 items-start">
      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-600">{desc}</p>
      </div>
    </div>
  );
}

function NewsCard({ article }) {
  const {
    title,
    description,
    url,
    urlToImage,
    source,
    publishedAt,
  } = article;

  return (
    <article className="bg-white rounded-xl border shadow-sm overflow-hidden hover:shadow-md transition">
      {/* IMAGE */}
      {urlToImage ? (
        <img
          src={urlToImage}
          alt={title}
          className="h-44 w-full object-cover"
        />
      ) : (
        <div className="h-44 bg-slate-200 flex items-center justify-center text-slate-400 text-sm">
          No Image Available
        </div>
      )}

      {/* CONTENT */}
      <div className="p-5 space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>{source?.name || "Unknown Source"}</span>
          <span>{new Date(publishedAt).toLocaleDateString()}</span>
        </div>

        <h3 className="font-semibold text-slate-900 leading-snug">
          {title}
        </h3>

        <p className="text-sm text-slate-600 line-clamp-3">
          {description || "Read full article for more details."}
        </p>

        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-emerald-600 text-sm font-medium hover:underline"
        >
          Read full article <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </article>
  );
}
