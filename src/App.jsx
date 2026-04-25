import "./App.css";
import { useState } from "react";

import {
  MeetingProvider,
} from "@videosdk.live/react-sdk";

import { authToken, createMeeting } from "./api";
import MeetingView from "./components/MeetingView";
import JoinScreen from "./components/JoinScreen";

function App() {
  const [meetingId, setMeetingId] = useState(null);

  
  const getMeetingAndToken = async(id)=>{
    const meetingId = id === null ? await createMeeting({token: authToken}) : id;
    
    setMeetingId(meetingId);
  }

  
  // meeting leave
  const onMeetingLeave = ()=>{
    setMeetingId(null);
  }

  return (
    authToken && meetingId ? (
      <MeetingProvider
    config={{
        meetingId,
        micEnabled: true,
        webcamEnabled: true,
        name: "Vikas singh",
      }}
      token={authToken}
    >
      <MeetingView meetingId = {meetingId} onMeetingLeave = {onMeetingLeave} />
    </MeetingProvider>
    ) : (
      <JoinScreen getMeetingAndToken = {getMeetingAndToken} />
    )
  );
}

export default App;
