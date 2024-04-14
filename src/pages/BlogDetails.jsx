import React from 'react'
import Header from '../Common/Header'
import { useLocation } from 'react-router-dom'
import { blogs } from '../Data/blogs';

function BlogDetails() {

    let uselocation = useLocation();
    let currentId = uselocation.pathname.split('/')[2];
    let currentData = blogs.filter((v)=> v.id== currentId)[0]
    // console.log(currentData);

  return (
    <div>
      <Header/>
      <h1> {currentData.body}</h1>
    </div>
  )
}

export default BlogDetails;
