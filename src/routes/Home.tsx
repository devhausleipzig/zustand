import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";
import { Post } from "../types/Post";

export function homeLoader() {
  return axios.get("https://dummyjson.com/posts").then((res) => res.data.posts);
}

export function Home() {
  const posts = useLoaderData() as Post[];

  return (
    <div>
      {posts.map((post) => (
        <Link to={post.id.toString()} key={post.id}>
          <article>
            <h4>{post.title}</h4>
            <p>{post.tags.join(", ")}</p>
          </article>
        </Link>
      ))}
    </div>
  );
}
