"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ImageSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
        <div>
            <h1>Image Slider</h1>
            <Slider {...settings}>
            <div>
                <img src="https://picsum.photos/id/1/1000/100" alt="img"  />
            </div>
            <div>
                <img src="https://picsum.photos/id/2/1000/100" alt="img"  />
            </div>
            <div>
                <img src="https://picsum.photos/id/3/1000/100" alt="img"  />
            </div>
            <div>
                <img src="https://picsum.photos/id/4/1000/100" alt="img"  />
            </div>
            <div>
                <img src="https://picsum.photos/id/5/1000/100" alt="img"  />
            </div>
            <div>
                <img src="https://picsum.photos/id/6/1000/100" alt="img"  />
            </div>
        </Slider>
        </div>
    )
}