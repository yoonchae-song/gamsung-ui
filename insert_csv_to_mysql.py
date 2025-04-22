import pandas as pd
import mysql.connector
from dotenv import load_dotenv
import os

# .env 로드
load_dotenv()

# DB 연결 설정
conn = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Asdf304053@",  # ← 본인 비밀번호 입력
    database="bgm_project"
)
cursor = conn.cursor()

# CSV 불러오기
df = pd.read_csv("videos_with_moods.csv")

# 결측값 제거 및 id 정수화
df = df.dropna(subset=["id", "title", "url", "mood_id"])
df["id"] = pd.to_numeric(df["id"], errors="coerce")
df = df.dropna(subset=["id"])
df["id"] = df["id"].astype(int)

# 삽입 쿼리
insert_query = """
    INSERT INTO videos (id, playlist_id, video_id, title, description, url, published_at, mood_id)
    VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
"""

# 데이터 삽입
for _, row in df.iterrows():
    try:
        cursor.execute(insert_query, tuple(row))
    except Exception as e:
        print("❌ 삽입 실패:", row.get("title", "Unknown"), ">>", e)

# 커밋 및 종료
conn.commit()
cursor.close()
conn.close()

print("✅ CSV -> MySQL 삽입 완료!")
