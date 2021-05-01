import decision_bg from "./../assets/images/decision_bg.png";
import video_thumbnail from "./../assets/images/video_thumbnail.jpg";
import video_thumbnail1 from "./../assets/images/video_thumbnail1.jpg";
import video_thumbnail2 from "./../assets/images/video_thumbnail2.jpg";
import video_thumbnail3 from "./../assets/images/video_thumbnail3.jpg";
import video_thumbnail4 from "./../assets/images/video_thumbnail4.jpg";
import Photos from "../components/Photos";
import Wots from "../components/Wots";

function Home() {
  const videoThumbnails = [
    video_thumbnail,
    video_thumbnail1,
    video_thumbnail2,
    video_thumbnail3,
    video_thumbnail4,
  ];
  let missions = [
    "Ikpakpara 2019",
    "Enugu Ezike - Inyi 2017",
    "Awkuzu - 2020",
    "Odenigbo - 2018",
    "Enugu Ezike - Inyi 2020",
  ];
  const missionsList = missions.map((mission, index) => {
    return (
      <li className="shadow-sm mt-3 bg-white flex" key={index}>
        <div className="w-24 h-16 bg-gray-900 overflow-hidden">
          <img src={videoThumbnails[index]} alt="missionary video thumbnail" />
        </div>
        <div className="p-3">{mission} Missions</div>
      </li>
    );
  });
  return (
    <article className="mt-8 bg-white">
      <div
        className="text-center my-10 p-4 bg-cover"
        style={{ backgroundImage: `url(${decision_bg})` }}
      >
        <div className="w-full md:w-2/3 m-auto p-4 mt-4 mb-4 bg-white opacity-90">
          <span
            className="text-red-900 border-b-2 border-blue-500 text-4xl pt-2 px-4 font-bold"
            style={{ fontFamily: "Raleway" }}
          >
            Choose Life
          </span>
          <p className="border-l-4 border-red-900 px-4 mt-4 mb-4 text-xl">
            The most important decision of your life is choosing where your
            eternity will be spent and the most important advise we can ever
            give to you is to secure an eternity with your maker. This is only
            possible through faith in Jesus Christ and therefore we invite you
            to make the decision to make Jesus the Savior and Lord of your Life
            today and now.
          </p>
        </div>
      </div>
      <Photos />
      <Wots />
      <section className="flex flex-col md:flex-row">
        <section className="p-2 w-full md:w-2/3">
          <div className="m-2 aspect-w-16 aspect-h-9 ">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/XxkNj5hcy5E"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
        <aside className="px-2 md:px-12 w-full md:w-1/2 bg-gray-100">
          <ul>{missionsList}</ul>
        </aside>
      </section>
      <section className="mt-20">
        <h2 className="text-3xl font-medium text-center text-blue-900">
          Events
        </h2>
        <div className="p-4">
          <div className="w-3/4 m-auto">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
              amet? Totam voluptatem tempora doloremque id? Maxime quis dolorum
              nostrum accusantium error cumque aut! Ex tempore adipisci
              laboriosam perspiciatis saepe hic.
            </p>
          </div>
          <div className="flex flex-wrap text-center">
            <div className="cursor-pointer p-4 border-2 w-1/2 md:w-1/4 bg-indigo-800 text-white font-semibold">
              Vigil
              <span className="block hover:bg-indigo-800">
                30th April, 2021
              </span>
            </div>
            <div className="cursor-pointer transition-colors duration-500 p-4 border-2 w-1/2 md:w-1/4 hover:bg-indigo-800 hover:text-white hover:text-xl">
              Vigil
              <span className="block">14th May, 2021</span>
            </div>
            <div className="cursor-pointer transition-colors duration-500 p-4 border-2 w-1/2 md:w-1/4 hover:bg-indigo-800 hover:text-white">
              Vigil
              <span className="block">28th May, 2021</span>
            </div>
            <div className="cursor-pointer transition-colors duration-500 p-4 border-2 w-1/2 md:w-1/4 hover:bg-indigo-800 hover:text-white">
              Vigil
              <span className="block">11th June, 2021</span>
            </div>
          </div>
          {/* <div className="flex justify-center items-center mt-4 mb-10">
            <button className="bg-red-600 text-white p-2 shadow-xl rounded-md hover:bg-blue-900 hover:text-white">
              View All Events
            </button>
          </div> */}
        </div>
      </section>
    </article>
  );
}
export { Home };
