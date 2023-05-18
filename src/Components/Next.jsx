import { Link } from "react-router-dom"
const Next = ({link, image, title}) => {
    return(
        <Link to={link} className="next">
            <div className="next__main">
                <img src={image} alt="author" />
                <h6>{title}</h6>
            </div>
        </Link>
    )
}
export default Next;