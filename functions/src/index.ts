import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin'

admin.initializeApp()

export const getFeed = functions.https.onRequest(async (req, res) => {
    const docs = await admin.firestore().collection('users').limit(10).get()
    res.send(docs.docs.map(doc => doc.data))
})

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
