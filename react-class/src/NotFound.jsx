import { Link } from "react-router-dom"
const NotFound = () => {
  return (
    <div>
      <h1>404 Not Found Page</h1>
      <Link to="/">Go Home</Link>
      {/* <a href="/">home from A</a> */}
    </div>
  )
}

export default NotFound
