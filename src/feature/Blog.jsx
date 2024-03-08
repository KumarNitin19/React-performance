import React, { useEffect, useMemo, useState } from "react";
import Button from "../ui/Button";

const Blog = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [blogData, setBlogData] = useState([]);
  const [postId, setPostId] = useState("1");
  const [darkMode, setDarkMode] = useState(false);

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

  useEffect(() => {
    if (darkMode) {
      document.body.style.background = "black";
      document.body.style.color = "white";
    } else {
      document.body.style.background = "white";
      document.body.style.color = "black";
    }
  }, [darkMode]);

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
        <input
        type="checkbox"
        name="mode"
        onChange={(e) => setDarkMode(e.target.checked)}
      />
    </div>
  );
};

export default Blog;
