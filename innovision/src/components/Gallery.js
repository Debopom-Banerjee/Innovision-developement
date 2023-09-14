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

export const Gallery = () => {
    const responsive = {
        superLargeDesktop: {

            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="gallery" id="gallery">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="gallery-bx wow zoomIn">
                            <h2>Gallery</h2>

                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme gallery-slider">
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
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}