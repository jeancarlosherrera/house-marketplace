import { useNavigate, useLocation } from 'react-router-dom'
import { ReactComponent as OfferIcon } from '../../assets/svg/localOfferIcon.svg'
import { ReactComponent as ExploreIcon } from '../../assets/svg/exploreIcon.svg'
import { ReactComponent as PersonOutlineIcon } from '../../assets/svg/personOutlineIcon.svg'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const isPathSelected = (route) => {
    if (route === location.pathname) return true
    else return false
  }

  return (
    <footer className='navbar'>
      <nav className='navbarNav'>
        <ul className='navbarListItems'>
          <li className='navbarListItem' onClick={() => navigate('/')}>
            <ExploreIcon
              fill={isPathSelected('/') ? '#2c2c2c' : '#8f8f8f'}
              width='36px'
              height='36px'
            />
            <p
              className={
                isPathSelected('/')
                  ? 'navbarListItemNameActive'
                  : 'navbarListItemName'
              }
            >
              Explore
            </p>
          </li>
          <li className='navbarListItem' onClick={() => navigate('/offers')}>
            <OfferIcon
              fill={isPathSelected('/offers') ? '#2c2c2c' : '#8f8f8f'}
              width='36px'
              height='36px'
            />
            <p
              className={
                isPathSelected('/offers')
                  ? 'navbarListItemNameActive'
                  : 'navbarListItemName'
              }
            >
              Offers
            </p>
          </li>
          <li className='navbarListItem' onClick={() => navigate('/profile')}>
            <PersonOutlineIcon
              fill={isPathSelected('/profile') ? '#2c2c2c' : '#8f8f8f'}
              width='36px'
              height='36px'
            />
            <p
              className={
                isPathSelected('/profile')
                  ? 'navbarListItemNameActive'
                  : 'navbarListItemName'
              }
            >
              Profile
            </p>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Navbar
