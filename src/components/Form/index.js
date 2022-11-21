import React, { useState } from 'react';
import './style.css';

// Here we import a helper functions that will check if the email is valid
import { validateEmail } from '../../utils/helpers';

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input ele which triggered the change
    // e is the event of clicking an ele
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type being changed, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'Name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };
// this handler validates input values of 'email' , username and 'password'
  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !name) {
      setErrorMessage(`Your email is invalid, Please check, ${name}`);
      
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!message) {
      setErrorMessage(
        `Message is required, ${name}`
      );
      return;
    }
    alert(`Hello ${name}, Please Come Back`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setMessage('');
    setEmail('');
  };
  // onChange, set 'email' to the value of 'inputValue'
  // onSubmit, validate the input 'email'
  return (
    <div>
      <h2>Contact</h2>
      <p style={{marginLeft: '20px'}}>Hello please leave your contact detail 🙂 {name} 🙂</p>
      <form className="form">
        <label>Name:</label>
        <input
          value={name}
          name="Name"
          onChange={handleInputChange}
          type="text"
          placeholder="guest name"
        />
      
        <label>Email Address:</label>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />       

        <label>Message:</label>
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="message"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
