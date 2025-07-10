# 🩺 SelfCare - Booking & Consultation Web App

SelfCare adalah aplikasi web sederhana untuk memesan dan berkonsultasi dengan dokter secara online. Dibuat menggunakan React.js dan menggunakan mock database berbasis `db.json`.

---

## 🚀 Fitur

- Booking janji temu dengan dokter
- Konsultasi online
- Daftar dan login user
- Tampilan responsif dan user-friendly
- Simulasi backend menggunakan JSON Server

---

## 📁 Struktur Proyek (Ringkasan)

```
selfcare/
├── public/
│   ├── index.html
│   └── favicon/
├── src/
│   ├── components/
│   ├── assets/
│   ├── App.js
│   └── ...
├── db.json
├── package.json
└── README.md
```

---

## 🔧 Cara Menjalankan

### 1. Clone repositori dan install dependency

```bash
npm install
```

### 2. Jalankan JSON Server (Mock API)

```bash
npx json-server --watch db.json --port 3001
```

### 3. Jalankan aplikasi React

```bash
npm start
```

Aplikasi akan berjalan di `http://localhost:3000` dan API di `http://localhost:3001`.

---

## 🔐 Akses Login

Data pengguna disimpan di file `db.json`. Berikut adalah user yang tersedia untuk login:

### 👤 Default Admin:

- **Username:** `adminuser`
- **Email:** `nihiratechiees@gmail.com`
- **Password:** `admin`

### 👤 Default User:

- **Username:** `ntuser`
- **Email:** `email@email.com`
- **Password:** `ntuser`

> Pastikan untuk login menggunakan akun di atas.

---

## 🛠 Teknologi yang Digunakan

- React.js
- JSON Server
- Tailwind CSS (jika ada)
- CSS Modules

---

## 📄 Lisensi

MIT License
