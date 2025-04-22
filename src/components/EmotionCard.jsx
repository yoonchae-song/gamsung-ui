import { useNavigate } from "react-router-dom";

function EmotionCard({ id, label }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/emotion/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="p-4 rounded-2xl shadow-md hover:scale-105 transition cursor-pointer text-center bg-white"
    >
      <h3 className="text-xl font-bold">{label}</h3>
    </div>
  );
}

export default EmotionCard;
