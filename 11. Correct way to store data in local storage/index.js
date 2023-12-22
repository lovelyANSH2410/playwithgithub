function handleFormSubmit(event){

    event.preventDefault();
  
    var userDetails = {
      username: event.target.username.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
    };
  
    localStorage.setItem(userDetails.email, JSON.stringify(userDetails));
  }
  
  module.exports = handleFormSubmit;