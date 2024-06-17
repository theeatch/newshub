"use client";
import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

type Props = {}

const NewsList = (props: Props) => {
    const [articles, setArticles] = useState([]);
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
    console.log("this is ke", API_KEY);

  useEffect(() =>{
    const fetchArticles = async () =>{
        const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`)
        console.log(res);
    }
    fetchArticles();
  }, [] )
  return (
    <div>this contains the news list, fetch will happen here.</div>
  )
}

export default NewsList