import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBGBhCmmKNamCn_QLraxAjfIX13S85uyOA',
  authDomain: 'rivals-4e933.firebaseapp.com',
  projectId: 'rivals-4e933',
  storageBucket: 'rivals-4e933.firebasestorage.app',
  messagingSenderId: '76881705467',
  appId: '1:76881705467:web:6e7f0db5fbb9e29858b35e'
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
