import Image from "next/image";
import Link from "next/link";

function BlogFeed({ posts }) {
  return (
    <div className="grid grid-flow-row-dense lg:max-w-6xl mx-auto md:grid-cols-2 lg:grid-cols-3 mb-6 p-4 bg-gray-100 gap-5">
      {posts.map(({ id, slug, title, image, content }) => (
        <div class="max-w-lg mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 p-2">
          <img
            class="object-cover w-full h-64"
            src={image.url}
            alt="Article"
            loading="lazy"
          />
          <div class="p-4">
            <div>
              <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
                Product
              </span>
              <div class="block mt-2 text-xl link font-semibold text-gray-800 dark:text-white hover:text-gray-600 hover:underline">
                <Link key={slug} href={`/posts/${slug}`}>
                  {title}
                </Link>
              </div>
              {/* <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Molestie parturient et sem ipsum volutpat vel. Natoque sem et
                aliquam mauris egestas quam volutpat viverra. In pretium nec
                senectus erat. Et malesuada lobortis.
              </p> */}
            </div>

            <div class="mt-4">
              <div class="flex items-center">
                <div class="flex items-center">
                  <img
                    class="object-cover h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                    alt="Avatar"
                  />
                  <a
                    href="#"
                    class="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                  >
                    Jone Doe
                  </a>
                </div>
                <span class="mx-1 text-xs text-gray-600 dark:text-gray-300">
                  21 SEP 2015
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogFeed;
