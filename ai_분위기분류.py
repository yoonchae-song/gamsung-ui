import pandas as pd
from transformers import pipeline

# CSV 파일 불러오기
df = pd.read_csv("videos.csv")

# 감정 레이블 정의
mood_labels = {
    "화남": 1,
    "슬픔": 2,
    "로맨틱": 3,
    "펑키": 4,
    "드라마틱": 5,
    "어두움": 6,
    "차분함": 7,
    "밝음": 8,
    "행복함": 9,
    "영감": 10
}
labels = list(mood_labels.keys())

# AI 분류기 모델 불러오기
classifier = pipeline("zero-shot-classification", model="facebook/bart-large-mnli")

# 노래 제목과 설명 결합해서 감정 분석
df["text"] = df["title"].fillna("") + " " + df["description"].fillna("")

predicted_moods = []
for i, text in enumerate(df["text"]):
    result = classifier(text, candidate_labels=labels)
    top_emotion = result["labels"][0]
    mood_id = mood_labels[top_emotion]
    predicted_moods.append(mood_id)

    print(f"[{i+1}/{len(df)}] '{df['title'].iloc[i]}' → {top_emotion} ({mood_id})")

df["mood_id"] = predicted_moods
df.drop(columns=["text"], inplace=True)
df.to_csv("videos_with_moods.csv", index=False, encoding='utf-8-sig')

print("\n✅ 분위기 분류 완료! 결과는 videos_with_moods.csv에 저장됨.")
