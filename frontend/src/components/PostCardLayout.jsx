import React, { useState } from "react";
import PostCard from "./PostCard";

function getColumnCount() {
  if (window.screen.width >= 1280) return 5;

  if (window.screen.width >= 700) return 4;

  if (window.screen.width >= 540) return 3;

  return 2;
}

export default function PostCardLayout(props) {
  const { posts } = props;

  const [columnCount, setColumnCount] = useState(getColumnCount());

  /**
   *
   * @param {UIEvent} ev
   */
  const onResize = (ev) => {
    setColumnCount(getColumnCount());
  };

  React.useEffect(() => {
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const columns = [];

  for (let i = 0; i < columnCount; ++i) {
    columns.push([]);
  }

  for (let i = 0; i < posts.length; ++i) {
    const post = posts[i];

    const card = <PostCard key={post.post_id} post={post} />;

    const columnIndex = i % columnCount;

    columns[columnIndex].push(card);
  }

  return (
    <div className="flex justify-center space-x-5 pt-5 pb-20">
      {columns.map((column, index) => {
        return (
          <div key={index} className="flex flex-col space-y-5">
            {column}
          </div>
        );
      })}
    </div>
  );
}
