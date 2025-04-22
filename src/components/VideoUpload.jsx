import React, { useState } from "react";

function VideoUpload() {
  const [videoUrl, setVideoUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("업로드된 영상 URL:", videoUrl);

    // TODO: Flask 서버로 전송 예정
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-10 max-w-xl mx-auto">
      <h2 className="text-lg font-bold mb-4 text-center">🎥 영상 업로드</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="YouTube 영상 URL을 입력하세요"
          className="w-full border border-gray-300 rounded px-4 py-2"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded"
        >
          업로드
        </button>
      </form>
    </div>
  );
}

export default VideoUpload;
