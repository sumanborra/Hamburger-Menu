// Write your code here
import './index.css'

const NotFound = () => {
  return (
    <div className="not-found-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
        className="image-not-found"
      />
      <h1 className="text-heading-not-found">Lost your way</h1>
      <p className="text-para-not-found">
        Sorry, we cannot find that page. You will find lots to explore on the home page
      </p>
    </div>
  )
}
export default NotFound
