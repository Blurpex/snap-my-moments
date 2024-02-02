import Card from "../components/Card.jsx";
import image1 from "../assets/sample1.jpg"
import image2 from "../assets/sample2.jpg"
import image3 from "../assets/sample3.jpg"

const Service = () => {

    return(
        <div className="container">
            <h1>Services</h1>
            <div className="row justify-content-md-start">
                <div className="col">
                    <Card
                        title="Good Photo"
                        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ridiculus mus mauris vitae ultricies leo. Fames ac turpis egestas maecenas pharetra convallis posuere. Aliquet bibendum enim facilisis gravida neque. Semper risus in hendrerit gravida."
                        image={image1}
                    />
                </div>
                <div className="col">
                    <Card
                        title="Bad Photo"
                        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ridiculus mus mauris vitae ultricies leo. Fames ac turpis egestas maecenas pharetra convallis posuere. Aliquet bibendum enim facilisis gravida neque. Semper risus in hendrerit gravida."
                        image={image2}
                    />
                </div>
                <div className="col">
                    <Card
                        title="Alright Photo"
                        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ridiculus mus mauris vitae ultricies leo. Fames ac turpis egestas maecenas pharetra convallis posuere. Aliquet bibendum enim facilisis gravida neque. Semper risus in hendrerit gravida."
                        image={image3}
                    />
                </div>
            </div>
        </div>
    )
}

export default Service
