import meter1 from "../assets/img/logo.png";
import meter2 from "../assets/img/logo.png";
import meter3 from "../assets/img/logo.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import quiz1 from "../assets/img/webify_pic.JPG";
import quiz2 from "../assets/img/quiz1_pic.JPG";
import codathon1 from "../assets/img/codathon_pic.JPG";
import codathon from "../assets/img/codathon1_pic.JPG";
import spellbee from "../assets/img/spellbee_pic.JPG";
import colorSharp from "../assets/img/color-sharp.png"

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


export const Gallery = () => {
    // const responsive = {
    //     superLargeDesktop: { 

    //         breakpoint: { max: 4000, min: 3000 },
    //         items: 5
    //     },
    //     desktop: {
    //         breakpoint: { max: 3000, min: 1024 },
    //         items: 3
    //     },
    //     tablet: {
    //         breakpoint: { max: 1024, min: 464 },
    //         items: 2
    //     },
    //     mobile: {
    //         breakpoint: { max: 464, min: 0 },
    //         items: 1
    //     }
    // };

    const ImgList = [quiz1, codathon, codathon1, spellbee]

    return (
        <section className="gallery" id="gallery">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="gallery-bx wow zoomIn">
                            <h2>Gallery</h2>

                            {/* <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme gallery-slider">
                                <div className="item">
                                    <img src={quiz1} alt="Image" />

                                </div>
                                <div className="item">
                                    <img src={codathon1} alt="Image" />

                                </div>
                                <div className="item">
                                    <img src={codathon} alt="Image" />

                                </div>
                                <div className="item">
                                    <img src={spellbee} alt="Image" />

                                </div>
                            </Carousel> */}
                            <div className='mt-4'>
                                <AliceCarousel
                                    autoPlay
                                    autoPlayInterval={1000}
                                    infinite
                                    items={ImgList.length}
                                    disableButtonsControls
                                    disableDotsControls
                                    mouseTracking
                                    itemsInSlide={4}
                                    responsive={{
                                        0: { items: 1 },
                                        576: { items: 2 },
                                        768: { items: 3 },
                                        992: { items: 4 },
                                    }} >
                                    {
                                        ImgList.map((event, index) => {
                                            return (
                                                <div key={index} style={{
                                                    marginLeft: '1.15rem',
                                                    marginRight: '1.15rem',
                                                    borderRadius: '0.5rem',
                                                    marginTop: '0.5rem',
                                                    marginBottom: '1.25rem',
                                                }} >
                                                    <div className="item">
                                                        <img src={event} alt="Image" />
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </AliceCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}