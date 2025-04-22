# 감성 BGM 추천 웹사이트 (gamsung-ui)

이 프로젝트는 사용자의 감정에 따라 어울리는 유튜브 BGM을 추천해주는 웹사이트입니다.  
React (프론트엔드), Flask (백엔드), MySQL (데이터베이스)를 사용하여 구현했습니다.  
감정 분석은 AI 모델 기반으로 수행되며, 분석 결과를 기반으로 실시간 음악 리스트를 제공합니다.

---

## 📦 실행 방법

### 🖼 프론트엔드 실행 (React + Tailwind)

```bash
npm install
npm run dev

백엔드 실행: (Flask + MySQL)
pip install -r requirements.txt
python server.py


(server.py: Flask API 서버
insert_csv_to_mysql.py: 분석된 BGM 데이터를 DB에 삽입
videos_with_moods.csv: 감정 분석된 유튜브 영상 데이터
.env.example: DB 접속 정보 템플릿 (직접 .env로 복사해서 사용) )

.env 설정 예시:
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=Asdf304053@
MYSQL_DATABASE=bgm_project


파일구성:
📁 src/
📁 public/
📄 server.py
📄 insert_csv_to_mysql.py
📄 videos_with_moods.csv
📄 .env.example
📄 package.json
📄 tailwind.config.js
📄 postcss.config.js
📄 README.md


