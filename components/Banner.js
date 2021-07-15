import Image from "next/image";

function Banner({ banners }) {
  console.log(banners);
  return (
    <div>
      {banners.map(({ banner, title }) => {
        <div>
          <img src={banner.url} alt="img" />
        </div>;
      })}
    </div>
  );
}

export default Banner;
