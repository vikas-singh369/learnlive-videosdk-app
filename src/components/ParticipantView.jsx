import { useParticipant, VideoPlayer } from "@videosdk.live/react-sdk";
import { useEffect, useRef } from "react";

const ParticipantView = ({ participantId }) => {
  const micRef = useRef(null);

  const { micStream, webcamOn, micOn, isLocal, displayName } =
    useParticipant(participantId);

  useEffect(() => {
    if (micRef.current) {
      if (micOn && micStream) {
        const mediaStrem = new MediaStream(); // browser build-in  mediaStream

        mediaStrem.addTrack(micStream.track);
        micRef.current.srcObject = mediaStrem;

        micRef.current
          .play()
          .catch((error) => console.error("Audio play failed", error));
      }
    } else {
      micRef.current.srcObject = null;
    }
  }, [micOn, micStream]);

  return (
    <div className="flex flex-col items-center bg-gray-800 rounded-xl p-4 m-2">
      <p className="text-white mb-2">
        {displayName} | Webcam: {webcamOn ? "ON" : "OFF"} | Mic:{" "}
        {micOn ? "ON" : "OFF"}
      </p>
      <audio ref={micRef} autoPlay playsInline muted={isLocal} />
      {webcamOn && (
        <VideoPlayer
          participantId={participantId}
          type="video"
          containerStyle={{ height: "300px", width: "300px" }}
          className="h-full"
          classNameVideo="h-full"
          videoStyle={{}}
        />
      )}
    </div>
  );
};

export default ParticipantView;
