import React, { useState } from "react";
import "./chat.css";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [activeUser, setActiveUser] = useState(null);
  const [activeRoom, setActiveRoom] = useState(null);
  const [newChatroom, setNewChatroom] = useState(""); // To store new chatroom input

  // Simulated data for active users and chatrooms
  const [chatrooms, setChatrooms] = useState([]);
  const users = ["Nive"];

  // Handle sending message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, type: "sent" }]);
      setNewMessage("");
    }
  };

  // Handle user selection
  const handleUserClick = (user) => {
    setActiveUser(user);
    setActiveRoom(null); // Clear active room when selecting a user
    setMessages([]);
  };

  // Handle room selection
  const handleRoomClick = (room) => {
    setActiveRoom(room);
    setActiveUser(null); // Clear active user when selecting a room
    setMessages([]);
  };

  // Add new chatroom
  const handleAddChatroom = () => {
    if (newChatroom.trim() && !chatrooms.includes(newChatroom.trim())) {
      setChatrooms([...chatrooms, newChatroom.trim()]);
      setNewChatroom(""); // Clear input after adding
    }
  };

  // Delete chatroom
  const handleDeleteChatroom = () => {
    if (activeRoom && chatrooms.includes(activeRoom)) {
      setChatrooms(chatrooms.filter((room) => room !== activeRoom));
      setActiveRoom(null); // Clear active room after deletion
    }
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar Container */}
      <div className="sidebar-container">
        {/* Sidebar for Active Users */}
        <div className="sidebar">
          <h3 className="sidebar-title">Active Users</h3>
          <ul className="user-list">
            {users.map((user, index) => (
              <li
                key={index}
                className={`user-item ${user === activeUser ? "active" : ""}`}
                onClick={() => handleUserClick(user)}
              >
                {user}
              </li>
            ))}
          </ul>
        </div>

        {/* Sidebar for Active Chatrooms */}
        <div className="sidebar">
          <h3 className="sidebar-title">Active Chatrooms</h3>
          <ul className="room-list">
            {chatrooms.map((room, index) => (
              <li
                key={index}
                className={`room-item ${room === activeRoom ? "active" : ""}`}
                onClick={() => handleRoomClick(room)}
              >
                {room}
              </li>
            ))}
          </ul>

          {/* Input and buttons for adding/removing chatrooms */}
          <div className="chatroom-actions">
            <input
              type="text"
              value={newChatroom}
              onChange={(e) => setNewChatroom(e.target.value)}
              placeholder="New chatroom"
            />
            <button onClick={handleAddChatroom}>Add Chatroom</button>
            <button onClick={handleDeleteChatroom}>Delete Chatroom</button>
          </div>
        </div>
      </div>

      {/* Chatbox Section */}
      <div className="main-content">
        {activeUser || activeRoom ? (
          <>
            <div className="chat-header">
              <h2>Chat with {activeUser || activeRoom}</h2>
            </div>

            <div className="messages-container">
              {messages.map((message, index) => (
                <div key={index} className={`message ${message.type}`}>
                  <p>{message.text}</p>
                </div>
              ))}
            </div>

            <form onSubmit={handleSendMessage} className="chat-input">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                required
              />
              <button type="submit">Send</button>
            </form>
          </>
        ) : (
          <div className="no-user">
            <h3>Select a user or a chatroom to start chatting</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
