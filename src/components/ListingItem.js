import { Link } from 'react-router-dom'
import { ReactComponent as DeleteIcon } from '../assets/svg/deleteIcon.svg'
import bedIcon from '../assets/svg/bedIcon.svg'
import bathubIcon from '../assets/svg/bathtubIcon.svg'

const ListingItem = ({ listingItem, id, onDelete }) => {
  const {
    name,
    type,
    imageUrls,
    location,
    regularPrice,
    discountedPrice,
    offer,
    bedrooms,
    bathrooms,
  } = listingItem

  const formatPrice = (price) =>
    price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  return (
    <li className='categoryListing'>
      <Link to={`category/${type}/${id}`} className='categoryListingLink'>
        <img src={imageUrls[0]} alt={name} className='categoryListingImg' />
        <div className='categoryListingDetails'>
          <p className='categoryListingLocation'>{location}</p>
          <p className='categoryListingName'>{name}</p>
          <p className='categoryListingPrice'>
            ${offer ? formatPrice(discountedPrice) : formatPrice(regularPrice)}{' '}
            {type === 'rent' && ' / Month'}
          </p>
          <div className='categoryListingInfoDiv'>
            <img src={bedIcon} alt='bed' />
            <p className='categoryListingInfoText'>
              {bedrooms} Bedroom{bedrooms > 1 && 's'}
            </p>
            <img src={bathubIcon} alt='bath' />
            <p className='categoryListingInfoText'>
              {bathrooms} Bathroom{bathrooms > 1 && 's'}
            </p>
          </div>
        </div>
      </Link>

      {onDelete && (
        <DeleteIcon
          className='removeIcon'
          fill='rgb(231,76,60)'
          onClick={() => onDelete(id, name)}
        />
      )}
    </li>
  )
}

export default ListingItem
