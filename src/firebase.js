import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyDeNFzx0aCSlyLB7-9qTOw4LMrPLmtoffo",
    authDomain: "web-app-8c036.firebaseapp.com",
    projectId: "web-app-8c036",
    storageBucket: "web-app-8c036.appspot.com",
    messagingSenderId: "576142358539",
    appId: "1:576142358539:web:6f4dc6a98182ad33afef0e",
    measurementId: "G-N493Y7YJ0D"
};

function requestPermission() {
    console.log("Requesting permission...");
    Notification?.requestPermission().then((permission) => {
        if (permission === "granted") {
            console.log("Notification permission granted.");
            const app = initializeApp(firebaseConfig);

            const messaging = getMessaging(app);
            getToken(messaging, {
                vapidKey: "BJJpFonvzXWRyVkMO1vUZOwPPU7vzzYzedZt-Ax14cJAByDcA5WYOSPVoMoeksICpPxMnOO0kqXfDF_2cMt2J80",
            }).then((currentToken) => {
                if (currentToken) {
                    console.log("currentToken: ", currentToken);
                } else {
                    console.log("Can not get token");
                }
            });
        } else {
            console.log("Do not have permission!");
        }
    });
}

requestPermission();
