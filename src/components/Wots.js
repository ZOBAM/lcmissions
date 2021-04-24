import wots from "./../assets/images/wots_bg.png";
import { useState } from "react";

export default function Wots() {
  const [showMore, setShowMore] = useState(true);
  const [buttonText, setButtonText] = useState("... read more");
  var classNames = require("classnames");
  //let showMore = true;
  let toggleShow = classNames({ hidden: showMore });
  let buttonClass = classNames("p-1 font-bold", "text-blue-500");
  function handleClick() {
    setShowMore(!showMore);
    if (showMore) {
      setButtonText("show less");
    } else setButtonText("... read more");
  }
  return (
    <div>
      <section
        className="my-16 md:px-6 bg-gray-900 bg-cover bg-fixed"
        style={{ backgroundImage: `url(${wots})` }}
      >
        <div className="flex">
          <h2 className="text-3xl font-medium bg-white px-4 pb-2 rounded-b-xl">
            <span className="text-yellow-600">W</span>ords of The Spirit
          </h2>
          <div className="w-8 -ml-2 bg-gray-500"></div>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap my-10 pb-10">
          <div className="w-full p-4 bg-gradient-to-b from-gray-500 to-black rounded-b-3xl">
            <div className="shadow-md p-4 bg-white pb-10 text-lg">
              <h3 className="font-bold text-2xl text-center">
                <span className="inline-block w-4 bg-yellow-400 h-8"></span>{" "}
                KEEP YOUR PROMISES
              </h3>
              <h4 className="w-full md:w-2/3 m-auto p-4 mt-4 mb-4 bg-gray-100 font-bold">
                Those who despise persistent sinners and honour the faithful
                followers of the Lord and keep their promises even when it
                hurts....( Psalm 15:4-5
              </h4>
              <p className="p">
                Promise keeping is a mark of a faithful spirit, a strong
                Character. A man is only as good as his word. To be considered a
                man or woman of intergrity you must ensure that your word is
                good, your promise is kept.
              </p>
              <p className="p">
                There are people who make promises,enter into agreements, cut
                covenants but never keep them. It's a key mark of evil and
                wicked men in these last days. They are covenant breakers ( II
                Timo.3:3){" "}
                <button className={buttonClass} onClick={handleClick}>
                  {buttonText}
                </button>
              </p>
              <div className={toggleShow}>
                <p className="p">
                  One of the key attributes of our God is, He keeps His promises
                  and cannot lie. The Bible says that all the promises of God in
                  Christ are yeah and Amen.( 2Cor.1:20)
                </p>
                <p className="p">
                  He keeps covenant forever. Heaven and earth can pass away but
                  the word shall stand forever. He is a faithful God. As the
                  children of God, He wants us to be faithful too, true to our
                  words and keep promises, keep our agreements and commitments.
                </p>
                <span className="font-semibold">
                  To be able to keep your promises, ensure you do the following:
                </span>
                <ol className="list-decimal ml-4">
                  <li>
                    Don't give promises lightly. Weigh your words before you
                    speak. Unless you are sure to keep those words, don't speak
                    them out. It's better to be silent than make a promise you
                    will not keep
                  </li>
                  <li>
                    Never be hasty in giving your promises.( Seest thou a man
                    that is hasty in his words, there is more hope of a fool
                    than him( Prov. 29:20)
                  </li>
                  <li>
                    In the event of not being able to keep a given promise, when
                    it's due, call the person involved before the due and
                    explain your inability to meet up with the promise. This is
                    a responsible behavior and it shows you are a man or woman
                    of integrity.
                  </li>
                </ol>
                <p className="p">
                  Today make up your mind to keep promises and you will enjoy
                  favor all around.
                </p>
                <h4 className="font-bold">Prayer Points</h4>
                <ol className="ml-4 list-decimal">
                  <li>Give thanks to God because He keeps His promises.</li>
                  <li>
                    Ask the Lord to bless you with a faithful spirit that keeps
                    covenant and promises
                  </li>
                  <li>
                    Ask the good Lord to bring to pass all the good words He has
                    spoken concerning you.
                  </li>
                  <li>Give thanks to God for answered prayers.</li>
                </ol>
              </div>
            </div>
            <div className="w-28 rounded-full h-28 m-auto bg-gradient-to-b from-black to-red-900 border-4 border-gray-200 flex justify-center items-center py-6 -mt-8 shadow-2xl">
              <span className="border-b-2 border-yellow-400 p-1 text-center text-white font-bold">
                15th Apr. <br /> 2021{" "}
              </span>{" "}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
