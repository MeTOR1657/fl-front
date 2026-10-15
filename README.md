# CMU Fix

ระบบจัดการคำร้องแจ้งซ่อมและงานบำรุงรักษาภายในมหาวิทยาลัยเชียงใหม่ พัฒนาด้วย React, TypeScript และ Vite รองรับนักศึกษา เจ้าหน้าที่ และผู้ดูแลระบบ

## ความสามารถหลัก

- เข้าสู่ระบบด้วย Google OAuth หรือ CMU OAuth
- สลับบทบาทระหว่าง Student และ Admin
- สร้างคำร้องแจ้งซ่อม พร้อมรายละเอียด รูปภาพ อาคาร ห้อง และระดับความเร่งด่วน
- ดูรายการคำร้อง กรองตามสถานะ และดูรายละเอียดคำร้อง
- อัปเดตสถานะและเปอร์เซ็นต์ความคืบหน้าของงาน
- จัดสรรช่างประจำอาคาร เพิ่ม แก้ไข แทนที่ และลบข้อมูลช่าง
- แสดง Dashboard สรุปจำนวนคำร้อง อัตราการแก้ไข และสถิติรายเดือน
- ระบบแจ้งเตือนและ Toast notification
- รองรับภาษาไทยและภาษาอังกฤษ
- รองรับการถ่ายภาพจากกล้อง

## เทคโนโลยีที่ใช้

- React 19 และ TypeScript
- Vite และ Tailwind CSS
- React Router
- Google OAuth ผ่าน backend
- CMU OAuth 2.0 ผ่าน backend
- Recharts, Lucide React และ Motion

## ติดตั้งและเริ่มระบบ

ต้องมี Docker Desktop พร้อม Compose, Node.js 24 และ pnpm 11.9 สำหรับโหมดพัฒนา ให้เก็บโฟลเดอร์ `pf-front`, `pf-backend`, `pf-db` และ `pf-deploy` ไว้ระดับเดียวกัน

### วิธีแนะนำ: รันทั้งระบบด้วย Docker

จาก PowerShell:

```powershell
cd ..\pf-deploy
Copy-Item deploy.env.example .env   # ทำครั้งแรกเท่านั้น
```

แก้ `.env` ตามหัวข้อ OAuth ด้านล่าง แล้วเริ่มระบบ:

```powershell
docker compose up -d --build
docker compose ps
```

Compose จะเริ่ม PostgreSQL รอ health check รัน migration ของ backend แล้วเริ่ม frontend เปิด `http://localhost:6055` (มี port 3000 สำหรับ CMU callback) และตรวจสถานะฐานข้อมูลที่ `http://localhost:6055/api/health`

```powershell
docker compose logs -f backend
docker compose down
```

### โหมดพัฒนา: รัน frontend/backend แยกกัน

1. เริ่ม PostgreSQL จาก `pf-db` โดยตั้ง `.env` ให้เรียบร้อย:

   ```powershell
   cd ..\pf-db
   Copy-Item .env.example .env   # ทำครั้งแรกเท่านั้น
   docker compose up -d
   ```

2. ตั้งค่า `pf-backend/.env` ให้ `DATABASE_URL` ใช้ app user/password/database เดียวกับ `pf-db` และตั้ง callback ตามตารางด้านล่าง จากนั้น:

   ```powershell
   cd ..\pf-backend
   pnpm install
   pnpm run db:migrate
   pnpm run dev
   ```

3. ตั้งค่า `pf-front/.env` ให้ `VITE_BACKEND_TARGET=http://localhost:3001` และ callback CMU เป็น `http://localhost:5173/api/auth/callback` จากนั้น:

   ```powershell
   cd ..\pf-front
   npm install
   npm run dev
   ```

เปิด `http://localhost:5173` โหมดนี้ใช้ PostgreSQL จาก Docker แต่รัน frontend และ backend บนเครื่อง

## ตัวแปรสภาพแวดล้อมที่สำคัญ

| ตัวแปร | รายละเอียด |
| --- | --- |
| `VITE_BACKEND_TARGET` | Backend API สำหรับ Vite dev proxy เช่น `http://localhost:3001` |
| `VITE_CMU_OAUTH_CLIENT_ID` | Public CMU OAuth Client ID |
| `VITE_CMU_OAUTH_REDIRECT_URI` | CMU callback ต้องตรงกับ URL ที่ลงทะเบียนไว้ |
| `DATABASE_URL` | ใช้ใน backend เท่านั้น: `localhost` เมื่อรันบนเครื่อง หรือ `db` เมื่ออยู่ใน Compose network |

ตั้ง `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `GOOGLE_REDIRECT_URI`, `CMU_OAUTH_CLIENT_ID`, `CMU_OAUTH_CLIENT_SECRET` และ `CMU_OAUTH_REDIRECT_URI` ใน `.env` ของ backend/deployment เท่านั้น ห้ามเก็บ secret หรือ `DATABASE_URL` ใน `pf-front/.env`

สำหรับ Docker ให้ Google callback ตรงกับ `http://localhost:<FRONTEND_PORT>/auth/google/callback` และลงทะเบียน URI เดียวกันใน Google Cloud Console ส่วน CMU callback ของ deployment คือ `http://localhost:3000/api/auth/callback`; callback ของ development คือ `http://localhost:5173/api/auth/callback` ทั้งสอง URL ต้องลงทะเบียนกับ CMU OAuth โหมดพัฒนาใช้ Google callback `http://localhost:3001/auth/google/callback`

ห้าม commit ไฟล์ `.env` หรือเปิดเผยค่า Client Secret ใน repository สาธารณะ

## การใช้งาน

คำสั่งอื่นที่ใช้บ่อย:

```bash
npm run build    # สร้างไฟล์สำหรับ Production
npm run preview  # เปิดดูไฟล์ Build
npm run lint     # ตรวจสอบ TypeScript
```

## เส้นทางหลักของระบบ

| Path | หน้าที่ |
| --- | --- |
| `/` | หน้าเข้าสู่ระบบ |
| `/dashboard` | Dashboard ภาพรวม |
| `/submit-request` | สร้างคำร้องแจ้งซ่อม |
| `/tickets` | รายการคำร้องทั้งหมด |
| `/ticket/:id` | รายละเอียดคำร้อง |
| `/building-staff` | จัดการช่างและการจัดสรรอาคาร |
| `/settings` | ตั้งค่าบัญชีและระบบ |
| `/cmu-callback` | รับผลลัพธ์จาก CMU OAuth |

## โครงสร้างโครงการ

```text
src/
├── components/       หน้าจอและคอมโพเนนต์ของระบบ
├── components/ui/    คอมโพเนนต์ UI ที่ใช้ซ้ำ เช่น Toast
├── contexts/         Global state และ business logic
├── hooks/            React hooks ที่ใช้ซ้ำ
├── lib/              OAuth และ utility functions
├── App.tsx           Provider และ routing หลัก
├── main.tsx          จุดเริ่มต้นของแอปพลิเคชัน
└── index.css         Global styles และ Tailwind CSS
```

## หมายเหตุด้านการพัฒนา

- Backend เป็นผู้แลก Authorization Code ของ CMU และ Google OAuth และออก app token หลังตรวจสอบตัวตน
- ข้อมูลบางส่วนใช้ Context และ Local Storage เพื่อรองรับการทดสอบบนเครื่องผู้พัฒนา
- Compose deployment เชื่อม Frontend, Backend และ PostgreSQL เข้าด้วยกัน โดย Backend รัน migration ตอนเริ่มระบบ
- OAuth Redirect URI ใน Google Cloud Console และ CMU OAuth ต้องตรงกับ URL สาธารณะที่เปิดใช้งานจริงทุกตัวอักษร
- Redirect URI ที่ตั้งในผู้ให้บริการ OAuth ต้องตรงกับ URL ที่ใช้เปิดระบบ

## Build สำหรับ Production

```bash
npm run build
npm run preview
```

ไฟล์ที่สร้างจะอยู่ในโฟลเดอร์ `dist/`
