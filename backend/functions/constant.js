const functions = require('firebase-functions');
const firebase = require('firebase')
const serviceAccount=require('./taskforce-28c9c-firebase-adminsdk-n560k-81f892314b.json')
const admin=require('firebase-admin')
var firebaseConfig = {
    <FIREBASE CONFIG KEYS>
}
admin.initializeApp(firebaseConfig)

 class FirebaseClass{
    constructor(){
        if(firebase.apps.length===0)
        firebase.initializeApp(firebaseConfig)
        this.auth=firebase.auth()
        this.db=firebase.firestore()
        this.trigger=functions.firestore;
        this.time_stamp=firebase.firestore.Timestamp
        this.admin_auth=admin.auth()
    }
    user_signup(username){
        return(
        username ?
        this.db.doc(`/user/${username}`)
        :
        this.db.collection('user')
        )
    }
    bug_reports(key){
        return(
        key ? 
        this.db.doc(`/bug_reports/${id}`)
        : 
        this.db.collection(`bug_reports`)
        )
    }
    comments(key){
        return(
        key ?
        this.db.doc(`/comments/${key}`)
        :
        this.db.doc(`/comments`) 
        )
    }
    likes(key){
        return(
        key ?
        this.db.doc(`/likes/${key}`)
        :
        this.db.doc(`/likes`)
        ) 
    }
    like_notification(){
        return this.trigger.document('likes/{id}')
    }
    comment_notification(){
        return this.trigger.document('comments/{id}')
    }
}
module.exports = FirebaseClass;
