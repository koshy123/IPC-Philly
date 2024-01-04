import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // Your Firebase configuration details
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };