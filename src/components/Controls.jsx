import { useMeeting } from "@videosdk.live/react-sdk";

const Controls = () => {
  const { leave, toggleMic, toggleWebcam } = useMeeting();

  return (
    <div className="flex gap-4 justify-center p-4">
      <button
        onClick={() => leave()}
        className="px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 cursor-pointer"
      >
        Leave
      </button>
      <button
        onClick={() => toggleMic()}
        className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 cursor-pointer"
      >
        Toggle Mic
      </button>
      <button
        onClick={() => toggleWebcam()}
        className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 cursor-pointer"
      >
        Toggle Webcam
      </button>
    </div>
  );
};

export default Controls;
