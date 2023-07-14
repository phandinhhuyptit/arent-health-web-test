import { useState, useEffect } from "react";
import { Article } from "@/types/data.types";
import API from "@/services/api-frontend";
import { v4 as uuidv4 } from 'uuid';

const usefetchArticles = () => {
  const [articleList, setArticleList] = useState<Article[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchArticlesAPI = async () => {
      try {
        const data = await API.getArticles();
        setArticleList(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticlesAPI();
  }, []);

  const loadMore = async () => {
    setLoading(true);
    try {
      const data = await API.getArticles();
      const updatedData =data && data.map((item)=>{
        return {...item,id : uuidv4()}
      })
      setArticleList((prev) => {
        if (prev && updatedData) {
          return [...prev, ...updatedData];
        }
        return prev;
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { articleList, loading, loadMore };
};

export default usefetchArticles;
