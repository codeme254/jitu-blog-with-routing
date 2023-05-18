import { Link } from "react-router-dom";
const BlogPreview  = ({image, author, date, title, previewText, linkToFull}) => {
    return(
        <div className="blog-preview">
            <div className="blog__blogger">
                <img src={image} alt="author" className="blog__blogger--image" />
                <div className="blog__meta">
                    <h4>{author}</h4>
                    <p>{date}</p>
                </div>
            </div>
            <div className="blog-body">
                <h3>{title}</h3>
                <p>{previewText}</p>
            </div>
            <Link to={linkToFull} className="blog-link">Read More &gt;&gt;</Link>
        </div>
    )
}

export default BlogPreview;