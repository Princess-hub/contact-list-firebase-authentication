export const ssignup = (email, password) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth
        .createUserWithEmailAndPassword(email, password)
        .then((UserCreds) => {
            console.log("User created successfully", UserCreds);
        })
        .catch((err) => console.log("something went wrong", err));
        };
};