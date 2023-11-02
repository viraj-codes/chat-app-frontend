import React, { useEffect, useState } from 'react'
import { getUser } from '../../api/UserRequest'
import "./ChatBox.css";
import { getMessages } from '../../api/MessageRequest';

function ChatBox({ chat, currentUser }) {

    const [userData, setUserData] = useState(null)
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const userId = chat?.members?.find((id) => id !== currentUser)
        const getUserData = async () => {
            try {
                const data = await getUser(userId)
                setUserData(data.data)
            } catch (e) { console.log('e :>> ', e); }
        }
        if (chat !== null) getUserData()
    }, [chat, currentUser])

    useEffect(()=>{
        const fetchMesages = async ()=>{
            try{
                const data = await getMessages(chat._id)
                console.log('data', data) 
                
                setMessages(data)
            }catch(e){console.log('e :>> ', e);}
        }
        if (chat !== null) fetchMesages()
    },[chat])

    return (
        <>
            <div className='ChatBox-container'>
                <>
                    <div className='chat-header'>
                        <div className='follower'>
                            <div>
                                <img src={process.env.REACT_APP_PUBLIC_FOLDER + 'dp.png'} className='followerImage' style={{ width: '50px', height: '50px' }} />
                                <div className='name' style={{ fontSize: '0.9rem' }}>
                                    <span>{userData?.firstName} {userData?.lastName}</span>
                                </div>
                            </div>
                        </div>
                        <hr style={{ width: "95%", border: "0.1px solid #ececec",marginTop:'20px' }} />
                    </div>
                    <div className='chat-body'>

                    </div>
                </>
            </div>
        </>
    )
}

export default ChatBox