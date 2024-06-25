function Article({ hero, author, role, title, short, link }) {
  return (
    <div className="w-[340px] ml-3 mr-[0.75rem] lg:w-auto lg:mx-0">
      <div className="relative">
        <img
          className="object-cover object-center w-full font-lato h-64 rounded-lg lg:h-80"
          src={hero}
          alt={title}
        />

        <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
          <img
            className="object-cover object-center w-10 h-10 rounded-full"
            src="/Xpr_Logo.png"
            alt={author}
          />

          <div className="mx-4">
            <h1 className="text-sm text-gray-700 dark:text-gray-200 font-slab">
              {author}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-sans">
              {role}
            </p>
          </div>
        </div>
      </div>

      <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white font-lato">
        {title}
      </h1>

      <hr className="w-32 my-6 text-blue-500" />

      <p className="text-sm text-gray-500 font-sans">{short}</p>

      <a
        href={link}
        className="inline-block mt-4 text-primary font-slab underline hover:text-onPrimaryContainer"
      >
        Read more
      </a>
    </div>
  );
}

export default Article;
