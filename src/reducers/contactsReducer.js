const initialState = {
  contacts: [
    {
      first_name: "Prince",
      middle_name: "Yaw-Adom",
      last_name: "Mensah",
      phone_number: "0241159301",
      address: "N.T. 37 Tarkwa",
      email: "prince.mensah@gmail.com",
      type: "brother", 
      id: "102",
    },
    {
      first_name: "Princess",
      middle_name: "Linda",
      last_name: "Mensah",
      phone_number: "02452114050",
      address: "N.T. 37 Tarkwa",
      email: "princess.mensah@gmail.com",
      type: "sister", 
      id: "103",
    },
    {
      first_name: "James",
      middle_name: "Kwesi",
      last_name: "Mensah",
      phone_number: "0547202559",
      address: "N.T. 37 Tarkwa",
      email: "jkm.mensah@gmail.com",
      type: "brother", 
      id: "104",
    },        
  ]
};

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
          console.log(action.payload)
            return {...state, contacts: [...state.contacts, action.payload]};
        case "DELETE_CONTACT":
          let undeletedContacts = state.contacts.filter(contact => contact.id !== action.payload);
            return {...state, contacts: undeletedContacts}
        case "EDIT_CONTACT":
          return{...state,contacts:state.contacts.map
            (contact => contact.id === action.payload.id ? action.payload: contact),}
            
        default:
            return state;
    }
};
export default contactsReducer;