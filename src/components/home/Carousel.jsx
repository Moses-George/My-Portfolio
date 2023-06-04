import { useState, useRef, useEffect } from "react";
import "../../style/Carousel.css";
import { Link } from "react-router-dom";
import img1 from "../../assets/project_images/movie-app/img1.jpg";
import img2 from "../../assets/project_images/movie-app/img2.jpg";
import img3 from "../../assets/project_images/movie-app/img3.jpg";
import img4 from "../../assets/project_images/movie-app/img4.jpg";
import img5 from "../../assets/project_images/movie-app/img5.jpg";
import img6 from "../../assets/project_images/movie-app/img6.jpg";
import img7 from "../../assets/project_images/movie-app/img7.jpg";

import mobile1 from "../../assets/project_images/movie-app/mobile/mobile1.jpg";
import mobile2 from "../../assets/project_images/movie-app/mobile/mobile2.jpg";
import mobile3 from "../../assets/project_images/movie-app/mobile/mobile3.jpg";
import mobile4 from "../../assets/project_images/movie-app/mobile/mobile4.jpg";
import mobile5 from "../../assets/project_images/movie-app/mobile/mobile5.jpg";
import mobile6 from "../../assets/project_images/movie-app/mobile/mobile6.jpg";
import mobile7 from "../../assets/project_images/movie-app/mobile/mobile7.jpg";
import mobile8 from "../../assets/project_images/movie-app/mobile/mobile8.jpg";
import mobile9 from "../../assets/project_images/movie-app/mobile/mobile9.jpg";
import mobile10 from "../../assets/project_images/movie-app/mobile/mobile10.jpg";
import useScreenWidth from "../../hooks/useScreenWidth";
// import 

const arr = [img1, img2, img3, img4, img5, img6, img7];
const mobileImages = [mobile1, mobile2, mobile3, mobile4, mobile5, mobile6, mobile7, mobile8, mobile9, mobile10];

const CarouselItem = ({ width, src }) => {

    return (
        <div className="carousel-item" style={{ width: width }}>
            <img src={src} alt="" />
        </div>
    )
}

const Carousel = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const timeoutRef = useRef(null);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => setActiveIndex(prevIndex => prevIndex === arr.length - 1 ? 0 : prevIndex + 1), 5000)

        return () => {
            resetTimeout();
        };
    }, [activeIndex]);

    const widthSize = useScreenWidth(); 
    const mobileWidth = 500;

    return (
        <div className="carousel">
            <div className="carousel-header">
                <h1>Featured Project</h1>
                <Link to="/projects">See all</Link>
            </div>
            <div className="inner" style={{ transform: `translateX(${-activeIndex * 100}%)` }}>
                {(widthSize > mobileWidth ? arr : mobileImages).map(slide => <CarouselItem key={slide} width="100%" src={slide} />)}
            </div>
            <div className="slideshowDots">
                {arr.map((__, indx) => (
                    <div key={indx} onClick={() => setActiveIndex(indx)} className={`slideshowDot ${activeIndex === indx ? "activeDot" : ""}`}></div>
                ))}
            </div>
        </div>
    )
}

export default Carousel;