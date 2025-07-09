
import './index.css'
import UserDetailsField from '../../components/UserDetailsField'
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';

const Profile = (props) => {
    const {userDetails} = props

    return(
        <>
            <div className='profile-page'>
                <div className='flex'>
                    <Link to="/" className='link'><button className='back-btn'><IoIosArrowRoundBack /></button></Link>
                    <p> Welcome, {userDetails.name}</p>
                </div>
                
                <div className='profile-details-card'>
                    <div className='main-details-container'>
                        <h1 className='short-name'>EH</h1>
                        <div>
                            <p className='no-extra-space'>{userDetails.name}</p>
                            <p className='no-extra-space'>{userDetails.email}</p>
                        </div>
                    </div>
                  
                    <ul className='user-details-fields'>
                        <UserDetailsField title='User ID' content={userDetails.id}  />
                        <UserDetailsField title='Name' content={userDetails.name}  />
                        <UserDetailsField title='Email ID' content={userDetails.email}  />
                        <UserDetailsField title='Address' content={userDetails.name}  />
                        <UserDetailsField title='Phone' content={userDetails.phone}  />
                    </ul>
                </div>
            </div>
        </>
        
    )
}

export default Profile