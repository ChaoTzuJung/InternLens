import firebase from 'firebase'

export default {
    FBLogin: function (data) {
        var provider = new firebase.auth.FacebookAuthProvider()
        return firebase.auth().signInWithPopup(provider)
    },
    FBLogout: function (data) {
        return firebase.auth().signOut()
    }
}
