
import './index.css'
import UserDetailsField from '../../components/UserDetailsField'
import { IoIosArrowRoundBack } from "react-icons/io";

const Profile = (props) => {
    const {userDetails} = props

    return(
        <>
            <div className='profile-page'>
                <button><IoIosArrowRoundBack /></button>
                <p>welcome</p>
                <div className='profile-details-card'>
                    <div className='main-details-container'>
                        <h1>EH</h1>
                        <div>
                            <p>Example Name</p>
                            <p>example@email.com</p>
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