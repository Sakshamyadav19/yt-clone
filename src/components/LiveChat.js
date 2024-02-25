import React, { useEffect, useState } from "react";
import ChatMsg from "./ChatMsg";
import { generateRandomName, makeRandomMessage } from "../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { addMsg } from "../utils/msgSlice";

const LiveChat = () => {
  const [liveChat, setLiveChat] = useState("");
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const chats = setInterval(() => {
      dispatch(
        addMsg({
          name: generateRandomName(),
          msg: makeRandomMessage(20),
        })
      );
    }, 1200);

    return () => {
      clearInterval(chats);
    };
  }, []);

  return (
    <div className="ml-4 w-1/4">
      <div className="border border-gray-100 w-full ml-4 h-1/3 overflow-scroll flex flex-col-reverse">
        {messages.map((msg) => (
          <ChatMsg name={msg.name} msg={msg.msg} />
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMsg({
              name: "Saksham",
              msg: liveChat,
            })
          );
          setLiveChat("");
        }}
      >
        <input
          className="ml-4 w-full border border-black px-2 py-1"
          placeholder="chat"
          value={liveChat}
          onChange={(e) => {
            setLiveChat(e.target.value);
          }}
        ></input>
      </form>
    </div>
  );
};

export default LiveChat;
