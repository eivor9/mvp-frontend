import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import '../Styles/ChatBox.css';

const ChatBox = ({ user, connection_id, token, connectionDetails, setShowChat }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [socket, setSocket] = useState(null);
    const API = import.meta.env.VITE_BASE_URL;

    useEffect(() => {
        const socketConnection = io(API, {
            query: { connection_id, sender_id: user.id },
            auth: { token },
        });
        
        setSocket(socketConnection);

        // Join room (using connection_id as room ids)
        socketConnection.emit("joinRoom", connection_id);

        // Fetch all messages associated with connection
        fetchMessages();

        // Listen for new messages
        socketConnection.on('receiveMessage', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        
        return () => {
            socketConnection.disconnect();
            socketConnection.off('receiveMessage'); 
        };
    }, [API, connection_id, user.id, token]);

    // Helper function to fetch all connection messages
    const fetchMessages = () => {
        fetch(`${API}/users/${user.id}/connections/${connection_id}/messages`, {
            headers: {
                'Authorization': token,
            },
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then((res) => setMessages(res))
        .catch((err) => console.error('Error fetching messages:', err));
    };

    // Function to send new message and in database
    const handleSendMessage = (e) => {
        e.preventDefault();
    
        if (newMessage.trim() === '' || !socket) return; 
    
        const messageData = {
            body: newMessage,
            sender_id: user.id,
            recipient_id: connectionDetails.id,
            connection_id: Number(connection_id),
        };
    
        //console.log("Emitting sendMessage with data:", messageData);
        socket.emit('sendMessage', messageData, (response) => { 
            
            if (response && response.status === 'success') {
                const message = response.message; 
                setMessages((prevMessages) => [...prevMessages, message]);
                setNewMessage(''); 
    
                fetch(`${API}/users/${user.id}/connections/${connection_id}/messages`, {
                    method: 'POST',
                    headers: {
                        'Authorization': token,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(messageData),
                })
                .then((res) => {
                    if (!res.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return res.json();
                })
                .then((savedMessage) => {
                    //console.log('Message saved successfully:', savedMessage);
                })
                .catch((err) => {
                    console.error('Error saving message:', err);
                });
            } else {
                console.error('Error sending message:', response ? response.error : 'No response received');
            }
        });
    };
    

    return (
            <div className="chat-box">
                <h2>Messages <i onClick={() => setShowChat(false)} className="fa-solid fa-circle-xmark close-chat"></i></h2>
                <div className="messages-list">
                    {messages.map((message, index) => (
                        <div key={index} className={message.sender_id === user.id ? "message outgoing" : "message incoming"}>
                            <p className='message-body'>{message.body}</p>
                            <span className='message-time'>{new Date(message.time_sent).toLocaleString()}</span>
                        </div>
                    ))}
                </div>
                <form onSubmit={handleSendMessage} className='message-input'>
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type your message..."
                        required
                    />
                    <button className='send-message-button' type="submit"><i className="fa-regular fa-paper-plane"></i></button>
                </form>
            </div>
    );
};

export default ChatBox;
