import image1 from "../assets/sample1.jpg";
import image2 from "../assets/sample2.jpg";
import image3 from "../assets/sample3.jpg";

const GalleryCarousel = () => {

    const images = [image1, image2, image3]

    return (
        <div id="galleryCarousel" className="carousel slide">

            {/* wrapper for slides */}
            <div className="carousel-inner">
                {
                    images.map((image, index) => (
                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                            <img
                                src={image}
                                className="dblock w-100 h-100"
                                style={{ objectFit: 'cover', maxHeight: '800px' }}
                                alt={`Sample ${index + 1}`}/>
                        </div>
                    ))
                }
            </div>

            {/* left and right controls */}
            <button className="carousel-control-prev" type="button" data-bs-target="#galleryCarousel"
                    data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#galleryCarousel"
                    data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )

}

export default GalleryCarousel