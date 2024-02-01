// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

// import required modules
import { Autoplay, Pagination } from "swiper/modules"

const Reviews = () => {
  return (
    <section className="font-futuraBk font-normal text-center bg-feedbackBg bg-top pt-48 px-4 -mx-10 xl:-mx-20">
      <h1 className="mb-6 text-blue-500 font-roboto font-bold text-5xl xs:text-6xl lg:text-7xl">
        Feedback
      </h1>
      <p className="text-blue-500 font-roboto font-bold text-3xl xs:text-4xl lg:text-5xl">
        See what Our users have to say
      </p>
      {/* carousel */}
      <Swiper
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination]}
        className=" text-lg xs:text-xl lg:text-2xl text-white w-full h-fit mt-20 mb-40"
      >
        <SwiperSlide className="pt-20">
          <p className="max-w-[710px] mx-auto">
            “I found PodFi to provide me the services I need to make my podcast
            successful at a reasonable price. The ability to monetize my podcast
            was a major factor in deciding to host with PodFi.”
          </p>
          <span className="block mt-5 mb-3">ADRIAN DRINGE</span>
          <span className="block">Co founder Wefd</span>
        </SwiperSlide>
        <SwiperSlide className="pt-20">
          <p className="max-w-[710px] mx-auto">
            “I found PodFi to provide me the services I need to make my podcast
            successful at a reasonable price. The ability to monetize my podcast
            was a major factor in deciding to host with PodFi.”
          </p>
          <span className="block mt-5 mb-3">ADRIAN DRINGE</span>
          <span className="block">Co founder Wefd</span>
        </SwiperSlide>
        <SwiperSlide className="pt-20">
          <p className="max-w-[710px] mx-auto">
            “I found PodFi to provide me the services I need to make my podcast
            successful at a reasonable price. The ability to monetize my podcast
            was a major factor in deciding to host with PodFi.”
          </p>
          <span className="block mt-5 mb-3">ADRIAN DRINGE</span>
          <span className="block">Co founder Wefd</span>
        </SwiperSlide>
      </Swiper>
      <hr className="h-1 bg-blue-500 w-8/12 mx-auto border-0 mb-4" />
      <hr className="h-0.5 bg-indigo-800 w-full border-0" />
    </section>
  )
}
export default Reviews
