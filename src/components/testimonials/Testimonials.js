import React from "react";
import "./Testimonials.css";
import Client from "../../assests/client.jpg";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const clients = [
    {
      id: 1,
      name: "Dimple Shetty",
      image: Client,
      review:
        "Nisha is very proactive resource. Her work is commendable. In Large Business and Myeir Redesign projects she has got appreciation from the client for her work and the POCs she has completed. She has the skills to pick up new technology and learn it and develop with quality. Keep up the good work Nisha.",
    },
    {
      id: 2,
      name: "Yashwanth H S",
      image: Client,
      review:
        "Nisha is great team mate who takes on challenging tasks when they are available and doesn't try to avoid them, actively participates in sprint activities and also quick to respond when reached out for any doubts or clarifications",
    },
    {
      id: 3,
      name: "Amrit Kumar Sahu",
      image: Client,
      review:
        "You are a quick learner, and got a good skill on finding solutions. Have seen you working hard and adding your extra time and effort whenever its required.",
    },
    {
      id: 4,
      name: "Princy R",
      image: Client,
      review:
        "Technically good resource. Completes the work on time and exhibits interest in learning new technologies and spent extra efforts to achieve it. She is good and much confident in presenting and communicating. She's proactive in her work.",
    },
  ];
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials_container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((data, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={data.image} alt="client" />
              </div>
              <h5 className="client_name">{data.name}</h5>
              <small className="client_review">{data.review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
