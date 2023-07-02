import {
  initializeApp,
  getApps,
  cert,
  ServiceAccount,
} from 'firebase-admin/app';

import serviceAccount from './admin-config.json';

const firebaseAdminConfig = {
  credential: cert(serviceAccount as ServiceAccount),
};

export function customInitApp() {
  if (getApps().length <= 0) {
    initializeApp(firebaseAdminConfig);
  }
}
