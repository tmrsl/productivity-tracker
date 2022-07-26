import { initializeApp, getApps, cert } from "firebase-admin/app";

import serviceAccount from "./config.admin.json";

const apps = getApps();

let app = null;
if (!apps.length) {
  app = initializeApp({
    credential: cert({
      privateKey: serviceAccount.private_key,
      clientEmail: serviceAccount.client_email,
      projectId: serviceAccount.project_id,
    }),
    databaseURL: "https://userauthenticatio-dev.firebaseio.com",
  }, "admin-app");
} else {
  app = apps[0];
}

export default app;
