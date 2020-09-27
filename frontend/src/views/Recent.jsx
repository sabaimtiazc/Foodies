import React, { useState } from "react";
import PostCardLayout from "../components/PostCardLayout";

export default function Recent(props) {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:9000/posts", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);

        for (let i = 0; i < json.posts.length; ++i) {
          json.posts[i].image_url =
            "http://localhost:9000" + json.posts[i].image_url;
        }

        setPosts(json.posts);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <PostCardLayout posts={posts} />;
}

// const posts = [
//   {
//     post_id: 0,
//     user_id: 1,
//     caption: "My Birthday Cake was too good!! :) ",
//     image_url:
//       "https://www.thespruceeats.com/thmb/iMQ49jNvVpEA8rCtJZEt3gOkKBk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/AngelFoodCakeHERO-35c72869f62443638bd2b033d6d381bd.jpg",
//     likes: 10,
//     dislikes: 5,
//   },
//   {
//     post_id: 1,
//     user_id: 2,
//     caption: "Just went to iHop, bomb french toast!",
//     image_url:
//       "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80",
//     likes: 10,
//     dislikes: 5,
//   },

//   {
//     post_id: 2,
//     user_id: 1,
//     caption: "Kheer!",
//     image_url:
//       "https://cdn.cnn.com/cnnnext/dam/assets/181019132031-16-pakistan-food-kheer.jpg",
//     likes: 10,
//     dislikes: 5,
//   },

//   {
//     post_id: 3,
//     user_id: 2,
//     caption: "traditional food!",
//     image_url:
//       " https://sm.mashable.com/mashable_pk/photo/default/foodnerd-best-pakistani-food-dishes_9jvu.jpg",
//     likes: 10,
//     dislikes: 5,
//   },
//   {
//     post_id: 4,
//     user_id: 1,
//     caption: "colorful salad made by me sabaaa!",
//     image_url:
//       "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&auto=format&fit=crop&w=631&q=80",
//     likes: 10,
//     dislikes: 5,
//   },

//   {
//     post_id: 5,
//     user_id: 2,
//     caption: "Home made yummy roti salan by Saba !",
//     image_url:
//       "https://img-global.cpcdn.com/recipes/7c7566f1512e6570/640x640sq70/photo.jpg",
//     likes: 10,
//     dislikes: 5,
//   },
// ];

// export default function Recent(props) {
//   return <PostCardLayout posts={posts}/>
// }
