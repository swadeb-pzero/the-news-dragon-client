import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import NewsCart from '../../News/NewsCart/NewsCart';

const Category = () => {
    const {id} = useParams();
    const categoryNews = useLoaderData();

  return (
    <div>
      <h2>This is a Category: {categoryNews.length}</h2>
      {
        categoryNews.map(news => <NewsCart
        key={news._id}
        news={news}
        ></NewsCart>)
      }
    </div>
  )
}

export default Category
