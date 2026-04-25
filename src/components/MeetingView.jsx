import { useMeeting } from "@videosdk.live/react-sdk";
import { useState } from "react";
import Controls from "./Controls";
import ParticipantView from "./ParticipantView";

const MeetingView = ({ meetingId, onMeetingLeave }) => {
  const [joined, setJoined] = useState(null);

  const { join, participants } = useMeeting({
    onMeetingJoined: () => setJoined("JOINED"),

    onMeetingLeft: () => onMeetingLeave(),
  });

  const joinMeeting = () => {
    setJoined("JOINING");
    join();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">

      <h3 className="text-white text-xl mb-4">Meeting Id: {meetingId}</h3>

      {joined === "JOINED" ? (
        <div className="w-full">
          <Controls />
          {[...participants.keys()].map((participantId) => (
            <ParticipantView
              participantId={participantId}
              key={participantId}
            />
          ))}
        </div>
      ) : joined === "JOINING" ? (
        <p className="text-white text-xl">Joining the meeting...</p>
      ) : (
        <button
          onClick={joinMeeting}
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 cursor-pointer"
        >
          Join Meeting
        </button>
      )}
    </div>
  );
};

export default MeetingView;
