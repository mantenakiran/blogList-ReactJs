// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {eachBlogDetails} = props
  const {title, description, publishedDate} = eachBlogDetails

  return (
    <li className="items-container">
      <div className="bl-inner-container">
        <div>
          <h1 className="blog-title">{title}</h1>
          <p className="blog-description">{description}</p>
        </div>
        <p className="blog-date">{publishedDate}</p>
      </div>
      <div>
        <hr className="lineEl" />
      </div>
    </li>
  )
}
export default BlogItem
