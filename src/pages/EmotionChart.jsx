// src/pages/EmotionChart.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function EmotionChart() {
  const { emotion } = useParams();
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  const moodMap = {
    화남: 1,
    슬픔: 2,
    로맨틱: 3,
    펑키: 4,
    드라마틱: 5,
    어두움: 6,
    차분함: 7,
    밝음: 8,
    행복함: 9,
    영감: 10,
  };

  useEffect(() => {
    const mood_id = moodMap[emotion];
    if (!mood_id) return;

    fetch(`http://localhost:5000/videos?mood_id=${mood_id}`)
      .then((res) => res.json())
      .then((data) => {
        setSongs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("에러 발생:", err);
        setLoading(false);
      });
  }, [emotion]);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-slate-900 mb-4">
        🎵 <span className="text-black">{emotion}</span> 에 해당하는 BGM 목록
      </h1>

      {loading ? (
        <p className="text-gray-500">데이터를 불러오는 중입니다...</p>
      ) : songs.length === 0 ? (
        <p className="text-gray-500">데이터를 불러오는 중이거나 노래가 없습니다.</p>
      ) : (
        <div className="space-y-4">
          {songs.map((song, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-90 p-4 rounded-lg shadow-md flex items-center space-x-4"
            >
              <img
                src={`https://img.youtube.com/vi/${song.video_id}/0.jpg`}
                alt={song.title}
                className="w-40 h-24 object-cover rounded"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-800">{song.title}</h2>
                <a
                  href={song.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  바로 듣기
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
