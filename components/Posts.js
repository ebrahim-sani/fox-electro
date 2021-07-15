import Image from "next/image";

function Posts({ id, title, image, content }) {
  return (
    <div>
      <h3>{title}</h3>
      <Image
        src={image.url}
        height={200}
        width={200}
        alt="image"
        objectFit="contain"
      />
      {/* <h6>{post.content}</h6> */}
    </div>
  );
}

export default Posts;
