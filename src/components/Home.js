import React, { useEffect, useState } from 'react'
import './Chats.css'
import { userChats } from '../api/ChatRequest'
import Conversation from './Conversation/Conversation'
import ChatBox from './ChatBox/ChatBox'

function Home() {

    const userId = localStorage.getItem('tokenId')
    const [chats, setChats] = useState([])
    const [currentChat, setCurrentChat] = useState(null)

    useEffect(() => {
        console.log('userId :>> ', userId);
        const getChats = async () => {
            try {
                const data = await userChats(userId)
                setChats(data.data)
                console.log('data', data)
            } catch (error) { console.log('error', error) }
        }
        getChats()
    }, [userId])

    return (
        <div className='Chat' style={{ height: '100vh', width: '100%' }}>
            <div className='Left-side-chat' >
                <div className='Chat-container'>
                    <h2>Chats</h2>
                    <div className='Chat-list'>
                        {
                            chats?.map((chat) => {
                               return <div onClick={()=>setCurrentChat(chat)}>
                                    <Conversation data={chat} currentUserId={userId} />
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>

            <div className='Right-side-chat'>
                <div style={{width:'20rem',alignSelf:'flex-end'}}>
                    
                </div>
                <ChatBox chat={currentChat} currentUser ={userId}/>
            </div>
        </div>
    )
}

export default Home