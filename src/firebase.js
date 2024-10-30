// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyBKoRSp8uFlZTnVxfnSQ1eKBHKePCzQWf8",
    authDomain: "empresas1-8cc94.firebaseapp.com",
    projectId: "empresas1-8cc94",
    storageBucket: "empresas1-8cc94.appspot.com",
    messagingSenderId: "974160591753",
    appId: "1:974160591753:web:4d45e1fe152ccd8f5a3f58",
    
  };
// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar la autenticación para usarla en otros archivos
export const auth = getAuth(app);
export default app;