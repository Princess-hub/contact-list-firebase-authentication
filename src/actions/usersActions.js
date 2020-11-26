export const addContact = (newContact) => {
    newContact.id=Math.random().toString()
    return {
        type: "ADD_USER",
        payload: newContact
    }
}