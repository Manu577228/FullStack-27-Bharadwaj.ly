import dayjs from "dayjs";
import { useState } from "react";
import { FaExternalLinkAlt, FaRegCalendarAlt } from "react-icons/fa";
import { IoCopy } from "react-icons/io5";
import { LiaCheckSolid } from "react-icons/lia";
import { MdAnalytics, MdOutlineAdsClick } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useStoreContext } from "../../contextApi/contextApi";
import CircularProgress from "@mui/material/CircularProgress";
import Graph from "./Graph";
import { useFetchUrlAnalytics } from "../../hooks/useQuery";

const ShortenItem = ({ originalUrl, shortUrl, clickCount, createdDate }) => {
  const { token } = useStoreContext();
  const navigate = useNavigate();

  const [isCopied, setIsCopied] = useState(false);
  const [analyticToggle, setAnalyticToggle] = useState(false);

  const brandDomain =
    import.meta.env.VITE_BRAND_DOMAIN || window.location.host;

  const fullShortUrl = `${window.location.origin}/s/${shortUrl}`;

  const {
    data: analyticsData = [],
    isLoading: loader,
    refetch,
  } = useFetchUrlAnalytics(
    token,
    shortUrl,
    analyticToggle,
    () => navigate("/error")
  );

  const analyticsHandler = () => {
    setAnalyticToggle((prev) => !prev);
    if (!analyticToggle) refetch();
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullShortUrl);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-white border border-gray-200 shadow-lg rounded-xl p-6 transition">

      <div className="flex flex-col lg:flex-row justify-between gap-6">

        <div className="flex-1 space-y-4">

          <div className="flex items-center gap-2">
            <Link
              to={fullShortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 font-semibold hover:underline break-all"
            >
              {brandDomain}/s/{shortUrl}
            </Link>
            <FaExternalLinkAlt className="text-gray-400 text-sm" />
          </div>

          <p className="text-gray-600 text-sm break-all">
            {originalUrl}
          </p>

          <div className="flex gap-6 text-sm">

            <div className="flex items-center gap-2">
              <MdOutlineAdsClick className="text-indigo-600" />
              <span>
                {clickCount} {clickCount === 1 ? "Click" : "Clicks"}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <FaRegCalendarAlt className="text-gray-500" />
              <span>
                {dayjs(createdDate).format("MMM DD, YYYY")}
              </span>
            </div>

          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">

          {/* COPY - Indigo */}
          <button
            onClick={handleCopy}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 
            text-white rounded-lg font-medium 
            transition-all duration-300 
            shadow-sm hover:shadow-md flex items-center gap-2"
          >
            {isCopied ? "Copied" : "Copy"}
            {isCopied ? <LiaCheckSolid /> : <IoCopy />}
          </button>

          {/* ANALYTICS - Premium Amber */}
          <button
            onClick={analyticsHandler}
            className="px-4 py-2 bg-amber-600 hover:bg-amber-700 
            text-white rounded-lg font-medium 
            transition-all duration-300 
            shadow-sm hover:shadow-md flex items-center gap-2"
          >
            Analytics
            <MdAnalytics />
          </button>

        </div>
      </div>

      {analyticToggle && (
        <div className="mt-6 bg-gray-50 border rounded-lg p-6">
          {loader ? (
            <div className="flex justify-center py-6">
              <CircularProgress />
            </div>
          ) : (
            <>
              {analyticsData.length === 0 && (
                <div className="text-center py-6 text-gray-500">
                  No Data For This Time Period
                </div>
              )}
              <Graph graphData={analyticsData} />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ShortenItem;