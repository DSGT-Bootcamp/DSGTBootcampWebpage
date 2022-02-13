import { useState } from "react";
import { Configuration, DSGT, DefaultApi } from "./generated-sources/openapi";

const configuration = new Configuration({
  basePath: window.location.origin,
});

const defaultApi = new DefaultApi(configuration);

const AppPrototype = () => {
  const [posts, setPosts] = useState<DSGT[] | null>(null);

  const onClick = async () => {
    const loadedPosts = await defaultApi.getDSGTS();
    setPosts(loadedPosts);
  };

  return (
    <div className="AppPrototype">
      <button onClick={onClick}>Get Posts</button>
      {posts && <PostsTable posts={posts} />}
    </div>
  );
};

const PostsTable = ({ posts }: { posts: DSGT[] }) => (
  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>userId</th>
        <th>title</th>
        <th>completed</th>
      </tr>
    </thead>
    <tbody>
      {posts.map(({ name, description, purpose, url, date, completed }) => (
        <tr>
          <td>{name}</td>
          <td>{description}</td>
          <td>{purpose}</td>
          <td>{url}</td>
          <td>{date}</td>
          <td>{completed}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default AppPrototype;