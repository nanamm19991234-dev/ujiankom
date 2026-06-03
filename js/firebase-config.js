/**
 * firebase-config.js
 * File konfigurasi utama untuk inisialisasi Firebase App.
 * Mengandung API Key, domain otentikasi, dan konfigurasi database.
 * Di-import oleh file lain seperti dashboard.js dan auth.js untuk akses ke auth & db.
 */

// Import fungsi inisialisasi dari Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyAUtD1pjK69K5sNznjuxPzISWQzpbY182I",
  authDomain: "ujikom-iot-2026-89010.firebaseapp.com",
  databaseURL: "https://ujikom-iot-2026-89010-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ujikom-iot-2026-89010",
  storageBucket: "ujikom-iot-2026-89010.firebasestorage.app",
  messagingSenderId: "733070489597",
  appId: "1:733070489597:web:8f8544337cdfcbf94c8b94",
  measurementId: "G-2X1SP175YC"
};

// Inisialisasi Firebase App menggunakan konfigurasi di atas
const app = initializeApp(firebaseConfig);

/**
 * Instansiasi Firebase Authentication
 * Digunakan untuk login/logout admin
 */
export const auth = getAuth(app);

/**
 * Instansiasi Firebase Realtime Database
 * Digunakan untuk membaca/menulis data sensor & relay
 */
export const db = getDatabase(app);
export const analytics = getAnalytics(app);
export default app;
