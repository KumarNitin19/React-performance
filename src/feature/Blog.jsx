import React, { useEffect, useState } from "react";
import Button from "../ui/Button";

const Blog = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [blogData, setBlogData] = useState([]);
  const [postId, setPostId] = useState("1");

  useEffect(() => {
    fetch(`https://dummyjson.com/post/${postId}`)
      .then((res) => res.json())
      .then((data) => {
        setBlogData(data);
        setIsLoading(false);
      });
  }, [postId]);

  const handleClick = () => {
    setPostId(Math.floor(Math.random() * 100));
  };

  return (
    <div className="blog">
      {!isLoading ? (
        <React.Fragment key={blogData.title}>
          <div className="blog-title">{blogData.title}</div>
          <div className="blog-body">{blogData.body}</div>
          <Button onClick={handleClick}>New Post</Button>
        </React.Fragment>
      ) : (
        <div className="loader">Loading...</div>
      )}
    </div>
  );
};

export default Blog;
