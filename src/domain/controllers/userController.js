import firebase from 'firebase'
import '@firebase/firestore';

export class GetUserController {
  async handle() {
    const db = firebase.firestore().collection('clients')

    const response = await db.get()

    console.log(response)
  }
}