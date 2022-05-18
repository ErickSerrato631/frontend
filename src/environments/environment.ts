// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name: 'dev',
  firebase: {
    config : {
      apiKey: "AIzaSyDAskZ2hduaeIgTFJK61y9IPU6FB2xGwRM",
      authDomain: "empleados-registro-app.firebaseapp.com",
      projectId: "empleados-registro-app",
      storageBucket: "empleados-registro-app.appspot.com",
      messagingSenderId: "610258986366",
      appId: "1:610258986366:web:395ef2b9c3ceeaa4ab7f2f"
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
