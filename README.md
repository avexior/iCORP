# iCorp TZ



##  Talablar

- Node.js  v18+
- npm
- ngrok token (ngok token qo'yilgan test qilish uchun)

---

## Kod ni ishga tushurish

### 1. Loyihani clone qilish kerak 
```bash
git clone https://github.com/avexior/iCORP.git
cd iCORP
```

### 2. Dependencies o'rnatish kerak 
```bash
npm install
```

### 3. Dasturni ishga tushurish uchun 
```bash
node index.js
```

---

## Kod qanday ishlaydi


1. **Express server** 2858 portda ishga tushadi
2. **Ngrok tunnel** yaratiladi va public URL olinadi
3. **POST so'rov** API ga yuboriladi (msg: `"just test"`, url: ngrok URL + test-api)
4. **Birinchi kod** (`part1`) olinadi
5. **30 sekund** ikkinchi kod ni kutadi (`part2`) 
6. Ikkata kod **birlashtiriladi**: `part1 + part2`
7. **GET so'rov** to'liq kod bilan API ga yuboradi
8. **Yakuniy natija** konsolda chiqadi

### API Endpoint lar

**POST/GET `/test-api`** - Ikkinchi kod qismini (`part2`) qabul qiladi

Request misollari:
```json
POST: {"part2": "ikkinchi-kod"}
GET: /test-api?part2=ikkinchi-kod
```

---

## Config

### Port
```javascript
const APP_PORT = 2858;
```

### API URL
```javascript
const API_URL = "https://test.icorp.uz/interview.php";
```


---

##  Dependencies
```json
{
  "@ngrok/ngrok": "^1.5.2",
  "axios": "^1.13.1",
  "express": "^5.1.0"
}
```

---