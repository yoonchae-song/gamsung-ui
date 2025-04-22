// 📄 src/components/Sidebar.jsx
import { Link } from "react-router-dom";

const moods = [
  "화남", "슬픔", "로맨틱", "펑키", "드라마틱",
  "어두움", "차분함", "밝음", "행복함", "영감"
];

function Sidebar() {
  return (
    <div className="w-48 bg-white p-4">
      <h2 className="text-lg font-bold mb-4">분위기에 맞는 BGM</h2>
      <ul>
        {moods.map((mood, index) => (
          <li key={index} className="mb-2">
            <Link
              to={`/chart/${mood}`}
              className="text-blue-600 hover:underline"
            >
              {mood}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
