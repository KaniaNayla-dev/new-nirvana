const NotFound = () => {
  return (
    <>
      <section className="bg-white h-[40rem] flex items-center justify-center text-[#3A55B4]">
        <div className="text-center  p-8 rounded-lg">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
            Somethings missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we cant find that page. Youll find lots to explore on the
            home page.
          </p>
          <a
            href="/"
            className="inline-flex text-white bg-primary-base hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
          >
            Back to Homepage
          </a>
        </div>
      </section>
    </>
  );
};

export default NotFound;
