# GLOBAL GATE API DOCUMENTATION
## HOW TO DO CRUD OPERATIONS FROM YOUR CLIENT

### connect api to client

to connect your api to the client, you will need the api URL.
Since it's still in local mode, Make Sure that all the db server and the 
api server, all are running perferctly,

to run the api, use
''' npm start

to run the db server
once MongoDB is installed in your pc, 
got to 'Search' button and search for 'services' 
inside services, search for MongoDB and turn it to running
after both of them are on running state,
now go to your client files
and insert the URLs the way i have done below
make sure you follow the routing so that you will not get errors while doing CRUD operations

### How to create a new customer


'
import React, { useState } from "react";
import './App.css';
import axios from 'axios';


function App() {

  const apiUrl = 'http://localhost:8080/endpoint/create-customer';
  const [data, setData] = useState({});
  
  const onSubmit = (event: any) => {
    event.preventDefault();

    const target = event.target;

    const data = {
        name: target.name.value,
        email: target.email.value,
        phone:target.phone.value,
        address:target.address.value,
        // password: target.password.value,
        // confirmPassword:target.confirmPassword.value,
        // conditionsAccepted: target.conditionsAccepted.checked,
    };

    
    setData(data);
};
console.log(data);


axios.post(apiUrl,data)
  .then((response) => {
    console.log('POST request successful!');
    console.log(response.data);
  })
  .catch((error) => {
    console.error('Error making POST request:', error);
  });
  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

<form className="form" onSubmit={onSubmit}>
            <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" />
            </div>
            <div className="field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
            </div>
            <div className="field">
                <label htmlFor="phone">Phone number</label>
                <input id="phone" />
            </div>
            <div className="field">
                <label htmlFor="address">address</label>
                <input id="address" />
            </div>
            <button type="submit">Sign up</button>
        </form>
    </>
  )
}
export default App

'

### How to get all customers

Use Axios to make a GET request to the desired API endpoint. For example, if the API endpoint is
'http://localhost:8080/endpoint/customer'

'
const apiUrl = 'http://localhost:8080/endpoint/customer';

axios.get(apiUrl)
  .then(response => {
    // Handle the response data here
    console.log(response.data);
  })
  .catch(error => {
    // Handle errors
    console.error('Error fetching data:', error);
  });

'

Using Async/Await (Optional):

'
const fetchData = async () => {
  try {
    const response = await axios.get(apiUrl);
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();


'


employeeID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Employee',
      required: true
    },


npm install firebase




  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1vMG5PVjf8BTD2FJKc0AJC6lFqoDUxK8",
  authDomain: "global-store-76ee0.firebaseapp.com",
  projectId: "global-store-76ee0",
  storageBucket: "global-store-76ee0.appspot.com",
  messagingSenderId: "1045408419033",
  appId: "1:1045408419033:web:8e56f663e3b03e72d5c2c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);