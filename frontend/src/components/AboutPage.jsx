import { FaLink, FaShareAlt, FaEdit, FaChartLine } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="lg:px-14 sm:px-8 px-5 min-h-[calc(100vh-64px)] pt-6">
      <div className="bg-white w-full sm:py-12 py-10">

        {/* Heading */}
        <h1 className="sm:text-4xl text-3xl font-bold italic mb-4 tracking-wide text-slate-800">
          About Bharadwaj.<span className="text-yellow-500">ly</span>
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-base leading-relaxed mb-10 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full">
          Bharadwaj.<span className="text-yellow-500 font-semibold">ly</span> simplifies URL shortening for seamless digital sharing.
          Create clean, memorable links in seconds, organize them efficiently,
          and monitor performance with powerful analytics — all from one
          streamlined platform designed for speed, clarity, and reliability.
        </p>

        {/* Features */}
        <div className="space-y-8 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full">

          <div className="flex items-start">
            <FaLink className="text-blue-500 text-3xl mr-5 mt-1" />
            <div>
              <h2 className="sm:text-2xl text-xl font-semibold text-slate-800 mb-2">
                Simple URL Shortening
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Generate short, memorable links in just a few clicks.
                Our intuitive interface ensures a smooth experience
                from creation to sharing.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <FaShareAlt className="text-green-500 text-3xl mr-5 mt-1" />
            <div>
              <h2 className="sm:text-2xl text-xl font-semibold text-slate-800 mb-2">
                Powerful Analytics
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Track clicks, geographic data, and referral sources through
                a clean analytics dashboard that helps refine your strategy.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <FaEdit className="text-purple-500 text-3xl mr-5 mt-1" />
            <div>
              <h2 className="sm:text-2xl text-xl font-semibold text-slate-800 mb-2">
                Enhanced Security
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Every shortened URL is protected with advanced encryption,
                ensuring your data remains secure and reliable.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <FaChartLine className="text-red-500 text-3xl mr-5 mt-1" />
            <div>
              <h2 className="sm:text-2xl text-xl font-semibold text-slate-800 mb-2">
                Fast and Reliable
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Experience ultra-fast redirects and stable infrastructure,
                delivering consistent performance for every link you share.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutPage;