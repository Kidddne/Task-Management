import React from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookie from "universal-cookie";

import { ChannelContainer, ChannelListContainer } from "./components";

import "./App.css";

const apiKey = "cj7nfgag4r3c";
const client = StreamChat.getInstance(apiKey);

const App = () => {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
};
export default App;
