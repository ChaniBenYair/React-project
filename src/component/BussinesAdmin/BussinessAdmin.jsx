import { Outlet, Link } from "react-router-dom"

function BusinessAdmin() {

  return (
    <>
      <Link to="./services">services</Link>
      <Link to="./meeting">meeting</Link><br />
      outlet:
      <br /><Outlet />
    </>
  )
}
export default BusinessAdmin