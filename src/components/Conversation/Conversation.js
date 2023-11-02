
import React, { useEffect, useState } from 'react'
import { getUser } from '../../api/UserRequest'

const Conversation = ({ data, currentUserId }) => {

    const [userData, setUserData] = useState(null)

    useEffect(() => {
        const userId = data.members.find((id) => id !== currentUserId)
        const getUserData = async () => {
            try {
                const data = await getUser(userId)
                setUserData(data.data)
                console.log('userData', data)
            } catch (e) { console.log('e :>> ', e); }
        }
        getUserData()
    }, [])

    return (
        <>
            <div className='follower conversation'>
                <div>
                    <div className='online-dot'></div>
                    <img src={process.env.REACT_APP_PUBLIC_FOLDER + 'dp.png'} className='followerImage' style={{ width: '50px', height: '50px' }} />
                    <div className='name' style={{ fontSize: '0.8 rem' }}>
                        <span>{userData?.firstName} {userData?.lastName}</span>
                        <span>Online</span>
                    </div>
                </div>
            </div>
            <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
        </>
    )
}

export default Conversation

