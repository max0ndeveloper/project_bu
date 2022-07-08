import { Link, Outlet } from 'react-router-dom';
import { Fragment } from 'react'
import '../navigation/navigation.styles.css'

const Navigation = () => {
  return (
      <Fragment>
        <div className='navigation'>
          <Link className='heading-container' to='/'>
            <p className="heading">Bu Page</p>
          </Link>
          <div className='nav-links-container'>
            <Link className="nav-link" to='/interesting-info'>
              Some interesting
            </Link>
          </div>
        </div>
        <Outlet/>
      </Fragment>
  )
}
export default Navigation
