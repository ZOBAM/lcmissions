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
                WORDS ARE POWERFUL, CHOOSE TO SPEAK RIGHTLY
              </h3>
              <h4 className="w-full md:w-2/3 m-auto p-4 mt-4 mb-4 bg-gray-100 font-bold">
                For in many things we offended all. If any man offend not in
                word, the same is a perfect man, and able also to bridle the
                whole body ( James 3:2)
              </h4>
              <p className="p">
                The word you Speak are a true measure of your Spirituality. It
                makes no difference what others might think or say about you.
                What matters are the words that come out of your mouth every
                day, irrespective of who you may be talking to; God, men,
                yourself, circumstances, or nature. Be sure to only and always
                Speak faith-filled and spirit - filled words.
              </p>
              <p className="p">
                The Apostle James likened the tongue to the rudder of a great
                ship that the captain uses to navigate the ship aright,
                irrespective of the fierce winds driving against it( James
                3:4-5). This means that with your words, you can keep yourself
                in health, in faith, in success, and in excellence. Don't talk
                fear, lack or your inabilities. Consciously Speak faith-filled
                word.{" "}
                <button className={buttonClass} onClick={handleClick}>
                  {buttonText}
                </button>
              </p>
              <div className={toggleShow}>
                <p className="p">
                  There is no need praying and asking God to make His promises
                  real in your life; they are already real. Simply acknowledge
                  and affirm who you are in Christ and your inheritance in Him
                  and walk accordingly. Don't say, "Lord you promised to bless
                  me; you promised to make me fruitful; rather, say, *Lord, I
                  thank you for you have blessed me with all things; you have
                  made me fruitful and productive." Hallelujah!!
                </p>
                <p className="p">
                  It's wonderful that with your faith-filled words, you can
                  disallow sickness, diseases, infirmities and weakness from
                  your body. Always Speak health, strength and abundance. Use
                  your tongue to come out of depressions, trouble, poverty and
                  frustrations. Today,where you are, and what you are in life,
                  are the result of Yesterday's words. Jesus said you shall have
                  what you say ( Mark 11:23). Therefore, beautify your life with
                  faith-filled words.
                </p>
                {/* <span className="font-semibold">
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
                </p> */}
                <h4 className="font-bold">Prayer Points</h4>
                <ol className="ml-4 list-decimal">
                  <li>
                    Appreciate God for the gift of His words that transform your
                    life every day.
                  </li>
                  <li>
                    Begin to confess and prophecy good, faith-filled and
                    edifying words concerning your marriage, education, finances
                    etc.
                  </li>
                  <li>
                    begin now to confess and exercise Dominion over Satan and
                    circumstances of life in your life that are very negative.
                  </li>
                  <li>
                    Begin to confess it, I am a Victor in Christ Jesus, I am
                    reigning with Christ.
                  </li>
                </ol>
              </div>
            </div>
            <div className="w-28 rounded-full h-28 m-auto bg-gradient-to-b from-black to-red-900 border-4 border-gray-200 flex justify-center items-center py-6 -mt-8 shadow-2xl">
              <span className="border-b-2 border-yellow-400 p-1 text-center text-white font-bold">
                30th Apr. <br /> 2021{" "}
              </span>{" "}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
