from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

@app.route("/videos", methods=["GET"])
def get_videos_by_mood():
    mood_id = request.args.get("mood_id")
    if not mood_id:
        return jsonify({"error": "mood_id is required"}), 400

    try:
        conn = mysql.connector.connect(
            host="localhost",
            user="root",
            password="Asdf304053@",  # ← 네 비밀번호 확인
            database="bgm_project"
        )
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM videos WHERE mood_id = %s", (mood_id,))
        result = cursor.fetchall()
        cursor.close()
        conn.close()
        return jsonify(result)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, port=5000)
