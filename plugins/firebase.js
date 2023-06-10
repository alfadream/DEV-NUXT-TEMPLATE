import { initializeApp } from "firebase/app";


export default defineNuxtPlugin(nuxtApp => {
  // Doing something with nuxtApp

  const config = useRuntimeConfig()

  const firebaseConfig = {
    apiKey: config.public.apiKey ,
    authDomain: config.public.authDomain,
    databaseURL: config.public.databaseURL,
    projectId: config.public.projectId,
    storageBucket: config.public.storageBucket,
    messagingSenderId: config.public.messagingSenderId,
    appId: config.public.appId
    
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

})
 