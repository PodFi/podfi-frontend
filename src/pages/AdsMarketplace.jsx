import { Link } from "react-router-dom"
import PodcastCard from "../components/PodcastCard"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
// import required modules
import { Pagination } from "swiper/modules"

const AdsMarketplace = ({ dark }) => {
  //fetching data from api
  //assuming this is the return
  const podcasts = {
    ongoingEvents: [
      { id: 1, imageUrl: "/images/photo.jpg", details: "" },
      { id: 2, imageUrl: "/images/photo.jpg", details: "" },
      { id: 3, imageUrl: "/images/photo.jpg", details: "" },
      { id: 4, imageUrl: "/images/photo.jpg", details: "" },
    ],
    popular: [
      {
        id: 1,
        imageUrl: "/images/photo.jpg",
        title: "podcast1",
        listenings: 20,
        likes: 20,
      },
      {
        id: 2,
        imageUrl: "/images/photo.jpg",
        title: "podcast2",
        listenings: 20,
        likes: 20,
      },
      {
        id: 3,
        imageUrl: "/images/photo.jpg",
        title: "podcast3",
        listenings: 20,
        likes: 20,
      },
      {
        id: 4,
        imageUrl: "/images/photo.jpg",
        title: "podcast4",
        listenings: 20,
        likes: 20,
      },
    ],
    featured: [
      {
        id: 1,
        imageUrl: "/images/photo.jpg",
        title: "podcast1",
        listenings: 20,
        likes: 20,
      },
      {
        id: 2,
        imageUrl: "/images/photo.jpg",
        title: "podcast2",
        listenings: 20,
        likes: 20,
      },
      {
        id: 3,
        imageUrl: "/images/photo.jpg",
        title: "podcast3",
        listenings: 20,
        likes: 20,
      },
      {
        id: 4,
        imageUrl: "/images/photo.jpg",
        title: "podcast4",
        listenings: 20,
        likes: 20,
      },
      {
        id: 5,
        imageUrl: "/images/photo.jpg",
        title: "podcast5",
        listenings: 20,
        likes: 20,
      },
      {
        id: 6,
        imageUrl: "/images/photo.jpg",
        title: "podcast6",
        listenings: 20,
        likes: 20,
      },
    ],
  }
  return (
    <div className="px-4 xs:px-10 lg:px-20 xl:px-32 font-futuraMd text-black dark:text-white w-full">
      {/* nav bg */}
      <div className="-mr-4 xs:-mr-10 lg:-mr-20 xl:-mr-32 relative h-[200px] overflow-hidden">
        <img
          src="/images/ads_marketplace_bg.svg"
          width={800}
          className="absolute -top-[530px] -right-96 xs:-right-44 min-w-[800px]"
        />
      </div>
      {/* ongoing events */}
      {podcasts?.ongoingEvents.length ? (
        <section>
          <div className="flex items-center gap-x-4">
            <img
              src="/images/ongoing_events_vector.svg"
              width={40}
              height={40}
            />
            <h1 className="text-2xl xs:text-5xl drop-shadow-[1px_0_5px_rgba(61,294,255,0.8)]">
              Ongoing Events
            </h1>
          </div>
          <Swiper
            style={
              dark
                ? {
                    "--swiper-pagination-color": "#fff",
                    "--swiper-pagination-bullet-inactive-color": "#fff",
                    "--swiper-pagination-bullet-inactive-opacity": "0.3",
                    "--swiper-pagination-bullet-size": "20px",
                    "--swiper-pagination-bullet-border-radius": "5px",
                    "--swiper-pagination-bottom": "0",
                  }
                : {
                    "--swiper-pagination-color": "#0a1640",
                    "--swiper-pagination-bullet-inactive-color": "#0a1640",
                    "--swiper-pagination-bullet-inactive-opacity": "0.4",
                    "--swiper-pagination-bullet-size": "20px",
                    "--swiper-pagination-bullet-border-radius": "5px",
                    "--swiper-pagination-bottom": "0",
                  }
            }
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              540: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1000: {
                slidesPerView: 3,
                spaceBetween: 100,
              },
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="w-full h-fit mt-10 mb-20 xs:my-20"
          >
            {podcasts.ongoingEvents.map((event) => (
              <SwiperSlide
                key={event.id}
                className="mb-16 h-64 w-full rounded-tr-[120px] rounded-bl-[120px] rounded-tl-[50px] rounded-br-[50px] overflow-hidden"
              >
                <Link to={`/events/${event.id}`} className="w-full h-full">
                  <img
                    src={event.imageUrl}
                    className="w-full h-full object-cover object-center"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      ) : (
        ""
      )}
      {/* popular podcasts */}
      <section>
        <h1 className="text-2xl xs:text-5xl drop-shadow-[1px_0_5px_rgba(61,294,255,0.8)]">
          Popular Podcasts
        </h1>
        <Swiper
          style={
            dark
              ? {
                  "--swiper-pagination-color": "#fff",
                  "--swiper-pagination-bullet-inactive-color": "#fff",
                  "--swiper-pagination-bullet-inactive-opacity": "0.3",
                  "--swiper-pagination-bullet-size": "20px",
                  "--swiper-pagination-bullet-border-radius": "5px",
                  "--swiper-pagination-bottom": "0",
                }
              : {
                  "--swiper-pagination-color": "#0a1640",
                  "--swiper-pagination-bullet-inactive-color": "#0a1640",
                  "--swiper-pagination-bullet-inactive-opacity": "0.4",
                  "--swiper-pagination-bullet-size": "20px",
                  "--swiper-pagination-bullet-border-radius": "5px",
                  "--swiper-pagination-bottom": "0",
                }
          }
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            832: {
              slidesPerView: 2,
              spaceBetween: 32,
            },
            1400: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="w-full h-fit mt-10 mb-20"
        >
          {podcasts.popular.map((podcast) => (
            <SwiperSlide key={podcast.id} className="mb-16 h-fit w-fit">
              <PodcastCard podcast={podcast} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {/* featured podcasts */}
      <section>
        <h1 className="text-2xl xs:text-5xl drop-shadow-[1px_0_5px_rgba(61,294,255,0.8)]">
          Featured Podcasts
        </h1>
        <div className="w-full flex flex-wrap justify-start items-start relative z-0 gap-x-8 gap-y-16 mt-10 mb-40">
          {podcasts.featured.map((podcast) => (
            <PodcastCard key={podcast.id} podcast={podcast} />
          ))}
        </div>
      </section>
    </div>
  )
}
export default AdsMarketplace