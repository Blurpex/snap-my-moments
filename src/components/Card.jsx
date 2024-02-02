const Card = ({title, body, image}) => {

    return(
        <div className="card">
            <img src={image} className="card-img-top" alt={image.name}/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{body}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>

        </div>
    )
}

export default Card