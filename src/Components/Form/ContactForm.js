import React, { Component } from 'react';

class ContactForm extends Component {
  constructor(props){
    super(props);
      this.state = { 
            name: "",
            email: "",
            message: "",
            invalidEmailAdress: ""
    }


    this.handleFormInputValue = this.handleFormInputValue.bind(this);
    this.sendMessageToEmail = this.sendMessageToEmail.bind(this);
  }



/* Same function for all inputs to get their values and storage them in a state, 
where they later are being send to a php file on function 'sendMessageToEmail' */
handleFormInputValue(e){
  e.preventDefault();  

  this.setState({ 
    [e.target.name]: e.target.value  /* 'e.target.name' represents the name attribute of every input that stores: 'name', 'email', 'message' 
                                      this are therefore the same property names in 'this.state' under constructor 
                                      and must be exactly the same as the attribute values */
  });

}

  /* Uses an advanced RegEx that controls if email is correct.
  Returns true or false. */

  validateEmail(){
    let email = this.state.email;
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEx.test(String(email).toLowerCase());
  }

//Sends message to email adress through PHP 
  sendMessageToEmail(e) {
    
   e.preventDefault(); // Prevents page to reload when click on send button

   if( this.validateEmail() ){

    this.setState({
        invalidEmailAdress: ""
    })
    
    let contactFormInfo = {
        userEmail: this.state.email,
        userName: this.state.name,
        userMessage: this.state.message
    }

//Sending the contact information to php, that is stored in the object 'contactFormInfo', with a post method
  return fetch('http://localhost/SendEmail.php', {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify(contactFormInfo)
    })
    .then((response) => {
      this.confirmationMessage();
    })
    .catch((error) => {
      this.messageNotSend();
    })

     } else if ( this.validateEmail() ) {
      this.setState({
        invalidEmailAdress: "Du har inte angivit rätt email adress. Var snäll och försök igen."
      })
    } else {
      this.setState({
        confirmationMessage: "Något gick fel, prova igen!"
      })
    }
    
}

/* When contact form has been send, function called in response */
confirmationMessage(){
  this.setState({
    confirmationMessage: "Tack för ditt meddelande! Vi hör av oss så fort vi kan."
  })
}

/* error message when something went wrong in POST method */
messageNotSend(){
   this.setState({
    confirmationMessage: "Något gick fel, prova igen!"
  })
}


  render() {
    return (

      <div className="contact-form">
          <h2 className="second-section-title">Kontakta oss</h2>
          <p>{this.state.confirmationMessage}</p>
          <p className="invalid-email">{this.state.invalidEmailAdress}</p>
          <form>
              <div className="row">
                <div className="col-11 input-contact">
                  <label>
                  <input type="text" name="name" placeholder="Namn" onChange={this.handleFormInputValue} required />
                  </label>
                </div>
              </div>

              <div className="row"> 
              <div className="col-11 input-contact">
                <label>
                <input id="userEmail" type="text" name="email" placeholder="Email" onChange={this.handleFormInputValue} required />
                </label>
              </div>
              </div>

              <div className="row">
                <textarea className="col-11 input-contact" name="message"
                 placeholder="Skriv ditt meddelande" onChange={this.handleFormInputValue} required>
                </textarea>
              </div>

              <div className="row">
                <div className="col-2 checkbox-gdpr">
                  <input className="checkbox" type="checkbox" required/>
                </div>

                <div className="col-6 terms-text">
                  <p>Jag godkänner användarvillkor och bekräftar att jag läst <a href="/Gdpr" className="terms-link">dataskyddspolicyn</a>.</p>
                </div>

                <button className="col-4 col-lg-2 contact-form-button" onClick={this.sendMessageToEmail}>SKICKA</button>
              </div>
           </form>
        </div>
      )
  }
}

export default ContactForm;