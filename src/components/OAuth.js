import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase.config'
import { useNavigate, useLocation } from 'react-router-dom'
import googleIcon from '../assets/svg/googleIcon.svg'
import { toast } from 'react-toastify'

const OAuth = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const onGoogleClick = async () => {
    try {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const user = result.user

      //Check for user
      const userRef = doc(db, 'users', user.uid)
      const docSnap = await getDoc(userRef)

      //If user doesn't exist, create user
      if (!docSnap.exists()) {
        await setDoc(doc(db, 'users', user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        })
      }
      navigate('/')
    } catch (error) {
      toast.error('Unable to authorize with Google')
    }
  }

  return (
    <div className='socialLogin'>
      <p> Sign {location.pathname === '/sign-up' ? 'Up' : 'In'} with </p>
      <button className='socialIconDiv' onClick={onGoogleClick}>
        <img className='socialIconImg' src={googleIcon} alt='google' />
      </button>
    </div>
  )
}

export default OAuth
