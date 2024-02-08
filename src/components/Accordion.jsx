import { useState } from "react"
import SingleEpisode from "./SingleEpisode"
const Accordion = () => {
  const [activeTab, setActiveTab] = useState("podcasts")
  const episodes = [
    {
      id: 1,
      title: "episode one",
      host: "person1",
      participants: [
        { username: "one", profilePicture: "/images/photo.jpg" },
        { username: "two", profilePicture: "/images/photo.jpg" },
        { username: "three", profilePicture: "/images/photo.jpg" },
      ],
    },
    {
      id: 2,
      title: "episode one",
      host: "person1",
      participants: [
        { username: "one", profilePicture: "/images/photo.jpg" },
        { username: "two", profilePicture: "/images/photo.jpg" },
        { username: "three", profilePicture: "/images/photo.jpg" },
      ],
    },
  ]
  return (
    <div className="w-full h-fit border-2 border-blue-500 rounded-xl px-8 mb-24 flex flex-col text-lg text-sky-900 dark:text-blue-300">
      {/* tabs */}
      <div className="flex flex-col xxs:flex-row gap-x-8 gap-y-2 py-2">
        <span
          onClick={() => setActiveTab("subscriptions")}
          className={
            activeTab === "subscriptions"
              ? "font-bold cursor-pointer"
              : "cursor-pointer"
          }
        >
          Subscriptions
        </span>
        <span
          onClick={() => setActiveTab("podcasts")}
          className={
            activeTab === "podcasts"
              ? "font-bold cursor-pointer"
              : "cursor-pointer"
          }
        >
          Podcasts
        </span>
        <span
          onClick={() => setActiveTab("earnings")}
          className={
            activeTab === "earnings"
              ? "font-bold cursor-pointer"
              : "cursor-pointer"
          }
        >
          Earnings
        </span>
      </div>
      {/* content */}
      {activeTab === "subscriptions" ? (
        <div></div>
      ) : activeTab === "podcasts" ? (
        <div className="w-full">
          {/* new episode */}
          <button className="flex gap-x-4 my-4 items-center text-blue-500 dark:text-sky-500 hover:scale-110">
            <img src="/images/plus_icon.svg" width={25} height={25} />
            Upload New Episode
          </button>
          {/* episodes */}
          <div className="flex flex-col items-center justify-between w-full min-h-[400px] pt-4 pb-12">
            {episodes.length ? (
              <>
                <div className="flex flex-col items-center w-full h-full gap-y-12">
                  {episodes.map((episode) => (
                    <SingleEpisode episode={episode} key={episode.id} />
                  ))}
                </div>
                <div className="flex items-center justify-center gap-x-4 mt-28 w-full">
                  <hr className="h-1 border-0 bg-zinc-500 w-2/12" />
                  <span className="text-xs text-nowrap text-zinc-700 dark:text-zinc-500">
                    No More Episodes
                  </span>
                  <hr className="h-1 border-0 bg-zinc-500 w-2/12" />
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center gap-x-4 w-full m-auto">
                <hr className="h-1 border-0 bg-zinc-500 w-2/12" />
                <span className="text-sm text-nowrap xxs:text-xl text-zinc-700 dark:text-zinc-500">
                  No Episodes Yet
                </span>
                <hr className="h-1 border-0 bg-zinc-500 w-2/12" />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}
export default Accordion
