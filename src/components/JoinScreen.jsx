import { useState } from "react";

const JoinScreen = ({ getMeetingAndToken }) => {
  const [meetingId, setMeetingId] = useState(null);

  const handleOnClick = async () => {
    await getMeetingAndToken(meetingId);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 gap-4">
      <h1 className="text-4xl font-bold text-white">🎓 LearnLive</h1>
      <p className="text-gray-400 text-lg">Real-time classes, anywhere.</p>
      <input
        type="text"
        placeholder="Enter Meeting Id"
        onChange={(e) => setMeetingId(e.target.value)}
        className="px-4 py-2 w-72 rounded-xl border-2 border-indigo-500 bg-gray-800 text-white placeholder-gray-400"
      />
      <div className="flex gap-4">
        <button
          onClick={handleOnClick}
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 cursor-pointer"
        >
          Join Meeting
        </button>
        <button
          onClick={handleOnClick}
          className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 cursor-pointer"
        >
          Create Meeting
        </button>
      </div>
    </div>
  );
};

export default JoinScreen;
