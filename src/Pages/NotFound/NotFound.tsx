import { Link } from "react-router-dom"
import Layout from "../../Components/Layout/Layout"


function NotFound() {
  return (
    <Layout>
        <>
            <h3>
                Page no Found
            </h3>
            <Link to='/'>Home </Link>
        </>

    </Layout>
  )
}

export default NotFound