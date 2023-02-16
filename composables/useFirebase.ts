import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const useFirebase = () => {
  const firebaseConfig = {
    apiKey: import.meta.env.API_KEY as string,
    authDomain: import.meta.env.AUTH_DOMAIN as string,
    projectId: import.meta.env.PROJECT_ID as string,
    storageBucket: import.meta.env.STORAGE_BUCKET as string,
    messagingSenderId: import.meta.env.MESSAGING_SENDER_ID as string,
    appId: import.meta.env.APP_ID as string,
    measurementId: import.meta.env.MEASUREMENT_ID as string,
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const firestore = getFirestore(firebaseApp);

  return {
    firebaseApp,
    firestore,
  };
};
