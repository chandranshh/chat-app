import React, { useEffect, useState } from "react";

function ChatScreen() {
  const [ws, setWs] = useState(null);
  useEffect(() => {
    const ws = new WebSocket(`ws://localhost:3001`);
    setWs(ws);
    ws.addEventListener(`message`, handleMessage);
  }, []);

  function handleMessage(ev) {
    console.log(ev.data);
    // e.data.text().then((meesageString) => {
    //   console.log(meesageString);
    // });
  }

  return (
    <div className="flex h-screen">
      <div className="bg-white w-1/3 p-2">Contacts</div>
      <div className="flex flex-col bg-blue-50 w-2/3 p-2">
        <div className="flex-grow">Messages</div>
        <div className="flex gap-2 ">
          <input
            type="text"
            placeholder="Type you messages here"
            className="bg-white border rounded-sm p-2 flex-grow "
          />
          <button className="bg-blue-500 p-2 rounded-sm text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatScreen;
