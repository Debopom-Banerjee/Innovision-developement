import "react-multi-carousel/lib/styles.css";

import quiz1 from "../assets/img/quiz1_pic.webp";
import codathon1 from "../assets/img/codathon1_pic.webp";
import codathon from "../assets/img/codathon_pic.webp";
import spellbee from "../assets/img/spellbee_pic.webp";
import webify from "../assets/img/webify_pic.webp";
import quiz from "../assets/img/quiz_pic.webp";
import participant from "../assets/img/participant1.webp";
import participant1 from "../assets/img/participant2.webp";
import extempore from "../assets/img/extempore_pic.webp";
import board from "../assets/img/board.webp";
import colorSharp from "../assets/img/color-sharp.png";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export const Gallery = () => {
  const ImgList = [
    quiz1,
    codathon,
    codathon1,
    spellbee,
    webify,
    quiz,
    participant,
    participant1,
    extempore,
    board,
  ];

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="gallery-bx wow zoomIn">
              <h2>Gallery</h2>
              <div className="mt-4">
                <AliceCarousel
                  autoPlay
                  autoPlayInterval={1000}
                  infinite
                  items={ImgList.length}
                  disableButtonsControls
                  disableDotsControls
                  mouseTracking
                  itemsInSlide={10}
                  responsive={{
                    0: { items: 1 },
                    576: { items: 2 },
                    768: { items: 3 },
                    992: { items: 4 },
                  }}
                >
                  {ImgList.map((event, index) => {
                    return (
                      <div
                        key={index}
                        style={{
                          marginLeft: "1.15rem",
                          marginRight: "1.15rem",
                          borderRadius: "0.5rem",
                          marginTop: "0.5rem",
                          marginBottom: "1.25rem",
                        }}
                      >
                        <div className="item">
                          <img src={event} alt="Image" />
                        </div>
                      </div>
                    );
                  })}
                </AliceCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
