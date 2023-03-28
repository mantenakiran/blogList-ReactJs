// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogDetails} = props

  return (
    <div className="blog-container">
      <ul className="ul-container">
        {blogDetails.map(eachItem => (
          <BlogItem key={eachItem.id} eachBlogDetails={eachItem} />
        ))}
      </ul>
    </div>
  )
}
export default BlogList
