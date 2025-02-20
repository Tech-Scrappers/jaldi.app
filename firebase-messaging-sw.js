
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');
 

firebase.initializeApp({
  apiKey: "AIzaSyAQhAqsiBU3Dw2zYgfbhcjIYyrVX5KUUrQ",
  authDomain: "jaldi-pos.firebaseapp.com",
  projectId: "jaldi-pos",
  storageBucket: "jaldi-pos.firebasestorage.app",
  messagingSenderId: "445055784996",
  appId: "1:445055784996:web:015e18dbb501dad7a820b1",
  measurementId: "G-RDVRGBE1HE"
  });


const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
    console.log(
      '[firebase-messaging-sw.js] Received background message ',
      payload
    );

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: '/favicon.png'
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });