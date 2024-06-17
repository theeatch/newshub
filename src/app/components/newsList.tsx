"use client";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "./newsItem";
import TopNews from "./topNews";
type Props = {};

const NewsList = (props: Props) => {
  const [articles, setArticles] = useState<
    { urlToImage: string; url: string; title: string; description: string }[]
  >([]);
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`
      );
      const filteredArticles = res.data.articles.filter((article: any) => {
        return (
          article.urlToImage &&
          article.url &&
          article.title &&
          article.description
        );
      });
      setArticles(filteredArticles);
      console.log(res.data.articles);
    };
    fetchArticles();
  }, [API_KEY]);
  return (
    <div className="w-full items-center flex flex-col h-full ">
      <div className="flex flex-col w-full gap-10 pb-10">
        <h1 className="text-7xl font-bold tracking-tight mx-auto underline">Headlines of Today! </h1>
        <div className="flex w-full justify-around">
          {articles.slice(0, 4).map((article, index) => (
            <TopNews
              key={index}
              url={article.url}
              title={article.title}
              description={article.description}
              urlToImage={article.urlToImage}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full gap-10">
            <h1 className="text-4xl font-semibold text-black/70 mx-auto">Read more happenings</h1>
        <div className="w-full flex flex-wrap justify-around gap-y-10">
        {articles.reverse().map((article, index) => (
          <NewsItem
            key={index}
            url={article.url}
            title={article.title}
            description={article.description}
            urlToImage={article.urlToImage}
          />
        ))}
        </div>
      </div>
    </div>
  );
};

export default NewsList;
