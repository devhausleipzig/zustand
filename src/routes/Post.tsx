import axios from "axios";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { Post } from "../types/Post";

export function postLoader({ params }: LoaderFunctionArgs) {
  return axios
    .get(`https://dummyjson.com/posts/${params.postId}`)
    .then((res) => res.data);
}

export function Post() {
  const post = useLoaderData() as Post;
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}
