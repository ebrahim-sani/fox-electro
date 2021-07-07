import Posts from "./Posts";

function BlogFeed({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <Posts key={post.sys.id} post={post} />
      ))}
    </div>
  );
}

export default BlogFeed;
