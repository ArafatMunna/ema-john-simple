/* 
1. Create a new firebase project in console.firebase.google.com
2. npm install firebase
3. Create firebase.init.js and import getAuth to export auth
4. Firebase settings > Authentication > enable Email and password auth
5. Create Login, SignUp component, setup route
6. Attch form field handler and form submit handler
7. npm install --save react-firebase-hooks
8. useCreateUserWithEmailAndPassword(auth) from react-firebase-hooks
9. if user is created redirect to the expected page
10. useSignInWithEmailAndPassword(auth) for Login
11. Create Require Auth component ==> check ser exists also tract user location
12. In route wrap Protected Component by using Require Auth Component
*/


/* 
Firebase Hosting Steps:
1. npm install -g firebase-tools (one time for your computer)
2. firebase login (one time for your computer)
3. firebase init (one time for each project)
4. npm run build (every time you want to deploy)
5. firebase deploy (every time you want to deploy)
*/