import Graph from './Graph'
import { useStoreContext } from '../../contextApi/contextApi'
import { useFetchMyShortUrls, useFetchTotalClicks } from '../../hooks/useQuery'
import { useState } from 'react'
import ShortenPopUp from './ShortenPopUp'
import ShortenUrlList from './ShortenUrlList'
import { FaLink } from 'react-icons/fa'
import { ThreeDots } from 'react-loader-spinner'

const DashboardLayout = () => {

  const { token } = useStoreContext()
  const [shortenPopUp, setShortenPopUp] = useState(false)

  function onError() {
    console.log("ERROR")
  }

  const { isLoading, data: myShortenUrls = [], refetch } =
    useFetchMyShortUrls(token, onError)

  const { isLoading: loader, data: totalClicks = [] } =
    useFetchTotalClicks(token, onError)

  return (
    <div className="lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)]">

      {loader ? (
        <div className="flex flex-col justify-center items-center min-h-[60vh]">
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4f46e5"
            ariaLabel="three-dots-loading"
            visible={true}
          />
          <p className="mt-4 text-indigo-600 font-medium">
            Loading your dashboard...
          </p>
        </div>
      ) : (
        <div className="lg:w-[90%] w-full mx-auto py-16">

          {/* GRAPH SECTION */}
          <div className="h-96 relative">

            {totalClicks.length === 0 && (
              <div className="absolute flex flex-col justify-center items-center w-full h-full">
                <h1 className="text-slate-800 sm:text-2xl text-[18px] font-bold mb-1">
                  No Data For This Time Period
                </h1>
                <h3 className="sm:w-96 w-[90%] text-center sm:text-lg text-sm text-slate-600">
                  Share your short link to view where your engagements are coming from
                </h3>
              </div>
            )}

            <Graph graphData={totalClicks} />
          </div>

          {/* CENTERED GENERATE BUTTON */}
          <div className="flex justify-center mt-10">
            <button
              className="bg-indigo-600 hover:bg-indigo-700 
              px-6 py-2.5 mt-4 rounded-lg text-white 
              font-medium transition-all duration-300 
              shadow-sm hover:shadow-md"
              onClick={() => setShortenPopUp(true)}
            >
              Generate a New Short Link
            </button>
          </div>

          {/* URL LIST */}
          <div>
            {!isLoading && myShortenUrls.length === 0 ? (
              <div className="flex justify-center pt-16">
                <div className="flex gap-2 items-center justify-center py-6 sm:px-8 px-5 rounded-md shadow-md bg-gray-50">
                  <h1 className="text-slate-800 sm:text-[18px] text-[14px] font-semibold">
                    You haven’t generated any short links so far
                  </h1>
                  <FaLink className="text-indigo-600 sm:text-xl text-sm" />
                </div>
              </div>
            ) : (
              <ShortenUrlList data={myShortenUrls} />
            )}
          </div>

        </div>
      )}

      <ShortenPopUp
        refetch={refetch}
        open={shortenPopUp}
        setOpen={setShortenPopUp}
      />
    </div>
  )
}

export default DashboardLayout