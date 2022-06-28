import React from "react";
import { useEffect, useState } from "react";

import instance from "../../axios/axiosConfig";
import Card from "./../../components/card/card";
import Spinner from './../../components/spinner/spinner';
import {useSelector} from 'react-redux'
const Articles = () => {
  const [articles, setArticles] = useState([]);
    const loader=  useSelector(state=>state.loader.loader)

  useEffect(() => {
    instance
      .get("everything", { params: { q: "bitcoin" } })
      .then((res) => {
        setArticles(res.data.articles);
        console.log(res.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>


    {(loader==true)?<Spinner/>:   <div className="row row-cols-1 row-cols-md-3 g-4">
        {articles.map((article, index) => {
          return <Card key={index} article={article} />;
        })}
      </div>}
            

   
    </>
  );
};

export default Articles;
