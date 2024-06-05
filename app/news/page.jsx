import Article from "@/components/Article";

function News() {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="container px-6 py-10 mx-auto">
        <div class="text-center">
          <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            From the blog
          </h1>

          <p class="max-w-lg mx-auto mt-4 text-gray-500">
            Expert Opinions and Insights on the latest trends in Logistics and
            Express Industries
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
          <Article
            hero={
              "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            }
            author={"Busisoft"}
            role={"Social Media Lead"}
            title={"How Xpresion disrupted the Express Industry"}
            short={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores praesentium, alias nam? Tempore"
            }
            link={"https://www.linkedin.com/"}
          />
          <Article
            hero={
              "https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            }
            author={"Busisoft"}
            role={"Social Media Lead"}
            title={"How Xpresion disrupted the Express Industry"}
            short={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores praesentium, alias nam? Tempore"
            }
            link={"https://www.linkedin.com/"}
          />
          <Article
            hero={
              "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            }
            author={"Busisoft"}
            role={"Social Media Lead"}
            title={"How Xpresion disrupted the Express Industry"}
            short={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores praesentium, alias nam? Tempore"
            }
            link={"https://www.linkedin.com/"}
          />
          <Article
            hero={
              "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            }
            author={"Busisoft"}
            role={"Social Media Lead"}
            title={"How Xpresion disrupted the Express Industry"}
            short={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores praesentium, alias nam? Tempore"
            }
            link={"https://www.linkedin.com/"}
          />
          <Article
            hero={
              "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            }
            author={"Busisoft"}
            role={"Social Media Lead"}
            title={"How Xpresion disrupted the Express Industry"}
            short={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores praesentium, alias nam? Tempore"
            }
            link={"https://www.linkedin.com/"}
          />
        </div>
      </div>
    </section>
  );
}

export default News;
