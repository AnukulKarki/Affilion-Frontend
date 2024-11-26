import { useState } from "react";

const ChatInterface = () => {
  // Dummy data for contacts and messages
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Ritesh Kafle",
      avatarColor: "bg-blue-500",
      lastMessage: "No worries. I got that",
      timestamp: "2m",
      unreadCount: 0,
      seenStatus: true,
      messages: [
        {
          id: 1,
          sender: "user",
          text: "Hi, Mr. Kafle! Can you explain Newton's Third Law with an example? I am a bit confused.",
          timestamp: "10:30 AM",
        },
        {
          id: 2,
          sender: "teacher",
          text: "Sure! When a swimmer pushes water backward (action), the water pushes them forward (reaction). Let me know if you need more help!",
          timestamp: "10:32 AM",
        },
        {
          id: 3,
          sender: "user",
          text: "Got it! Thanks, Sir!",
          timestamp: "10:35 AM",
        },
        {
          id: 4,
          sender: "teacher",
          text: "No worries. I got that",
          timestamp: "10:36 AM",
        },
      ],
    },
    {
      id: 2,
      name: "JJ Hirani",
      avatarColor: "bg-yellow-500",
      lastMessage: "You: At 1:30 sir.",
      timestamp: "2m",
      unreadCount: 3,
      seenStatus: false,
      messages: [
        {
          id: 1,
          sender: "user",
          text: "Hello, JJ! When is the meeting?",
          timestamp: "9:00 AM",
        },
        {
          id: 2,
          sender: "teacher",
          text: "It will be at 1:30 PM today.",
          timestamp: "9:05 AM",
        },
      ],
    },
    {
      id: 3,
      name: "RJ Kafle",
      avatarColor: "bg-green-500",
      lastMessage: "I will be there.",
      timestamp: "2m",
      unreadCount: 0,
      seenStatus: true,
      messages: [
        {
          id: 1,
          sender: "user",
          text: "RJ, are you coming to the event?",
          timestamp: "11:00 AM",
        },
        {
          id: 2,
          sender: "teacher",
          text: "I will be there.",
          timestamp: "11:05 AM",
        },
      ],
    },
  ]);

  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [newMessage, setNewMessage] = useState("");

  // Handle sending new messages
  const sendMessage = () => {
    if (newMessage.trim() !== "" && selectedContact) {
      const newMessageObj = {
        id: selectedContact.messages.length + 1,
        sender: "user",
        text: newMessage,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      // Update the messages for the selected contact
      setContacts((prevContacts) =>
        prevContacts.map((contact) =>
          contact.id === selectedContact.id
            ? {
                ...contact,
                messages: [...contact.messages, newMessageObj],
              }
            : contact
        )
      );

      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-col h-[75vh] bg-gray-100">
      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-1/3 bg-white border-r border-gray-300 overflow-y-scroll">
          {/* Search Bar */}
          <div className="p-4">
            <input
              type="text"
              placeholder="Search Teachers..."
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Contact List */}
          <div>
            {contacts.map((contact) => (
              <div
                key={contact.id}
                onClick={() => setSelectedContact(contact)}
                className={`flex items-center p-4 hover:bg-gray-100 cursor-pointer ${
                  selectedContact?.id === contact.id ? "bg-gray-200" : ""
                }`}
              >
                <div
                  className={`w-10 h-10 ${contact.avatarColor} rounded-full`}
                ></div>
                <div className="ml-4">
                  <p className="font-medium text-gray-800">{contact.name}</p>
                  <p className="text-sm text-gray-500">
                    {contact.messages[contact.messages.length - 1].text.slice(
                      0,
                      20
                    )}
                    ...
                  </p>
                </div>
                {contact.unreadCount > 0 && (
                  <div className="w-5 h-5 flex items-center justify-center  bg-red-500 text-white rounded-full ml-4 mb-4">
                    {contact.unreadCount}
                  </div>
                )}
                <div className="ml-auto text-xs text-gray-500 flex flex-col gap-1">
                  {contact.timestamp}
                  {contact.seenStatus ? (
                    <i className="fas fa-check-double text-blue-500"></i>
                  ) : (
                    <i className="fas fa-check text-gray-500"></i>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Section */}
        <div className="flex-1 bg-white flex flex-col">
          {/* Chat Header */}
          {selectedContact && (
            <div className="flex items-center justify-between p-4 border-b border-gray-300">
              <div className="flex items-center">
                <div
                  className={`w-10 h-10 ${selectedContact.avatarColor} rounded-full`}
                ></div>
                <div className="ml-4">
                  <p className="font-medium text-gray-800">
                    {selectedContact.name}
                  </p>
                  <p className="text-sm text-green-500">Active now</p>
                </div>
              </div>
              <i className="fas fa-ellipsis-h text-gray-600 cursor-pointer"></i>
            </div>
          )}

          {/* Chat Messages */}
          <div className="flex-1 p-4 space-y-4 overflow-y-scroll">
            {selectedContact?.messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : ""
                }`}
              >
                {message.sender === "teacher" && (
                  <div className="w-10 h-10 bg-blue-500 rounded-full mr-4"></div>
                )}
                <div
                  className={`${
                    message.sender === "user" ? "bg-gray-100" : "bg-blue-100"
                  } p-3 rounded-lg max-w-xs`}
                >
                  <p className="text-sm text-gray-800">{message.text}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {message.timestamp}
                  </p>
                </div>
                {message.sender === "user" && (
                  <div className="w-10 h-10 bg-purple-500 rounded-full ml-4"></div>
                )}
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-300">
            <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
              <i className="fas fa-paperclip text-blue-500 hover:text-blue-600 cursor-pointer pr-4"></i>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Send a message..."
                className="flex-1 bg-transparent outline-none text-sm text-gray-800"
              />
              <button
                className="text-blue-500 hover:text-blue-600"
                onClick={sendMessage}
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
