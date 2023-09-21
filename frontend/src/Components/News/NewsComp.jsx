/* eslint-disable react/prop-types */

function NewsComp({ newsItems }) {
  const isWithin48Hours = (createdAt) => {
    const now = new Date();
    const newsDate = new Date(createdAt);
    const timeDifference = now - newsDate;
    const hoursDifference = timeDifference / (1000 * 60 * 60);

    return hoursDifference <= 48;
  };

  return (
    <div className="flex flex-col  w-[429%]">
      {newsItems.map((news) => {
        const createdAt = new Date(news.createdAt);
        const formattedDate = createdAt.toLocaleString("default", {
          day: "numeric",
          month: "long",
        });

        const isRecent = isWithin48Hours(news.createdAt);

        return (
          <div
            key={news.id}
            className={`relative my-6 flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white ${
              !isRecent  // Apply opacity if not recent
            } h-[30%]`}
          >
            <div className="w-full md:w-1/3 bg-white grid place-items-center object-cover w-full h-full overflow-hidden">
              <img
                crossOrigin="anonymous"
                src={`https://ucchi-urran-backend.vercel.app/img/news/${news.photo}`}
                alt="News Image"
                className="rounded-xl "
              />
            </div>
            <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
              <div className="flex justify-between items-center">
                <div className="bg-gray-200 px-3 py-1 rounded-full text-xs flex font-medium text-gray-800 space-x-3">
                  {formattedDate}
                  {isRecent && <div className="bg-green-400 text-white text-xs px-2 rounded-full ml-[20px]">New</div>}
                </div>
              </div>
              <h3 className="font-black text-gray-800 md:text-3xl text-xl">
                {news.heading}
              </h3>
              <p className="md:text-lg text-gray-500 text-base">
                {news.article}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default NewsComp;
