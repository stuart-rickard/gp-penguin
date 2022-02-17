async function newEventFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector("#event-input").value.trim();
    
    let days = [];
    let allCheckboxes = document.querySelectorAll('.checkbox-container input[type="checkbox"]');
    console.log(allCheckboxes);

    const inviteEmailsAsString = document
      .querySelector("#invitee-email")
      .value.trim();

    let inviteEmailsAsArray = [];

    // the split function would put an empty string at index 0
    // if nothing was entered into the box by the user. This ensures
    // we only split the string whenever the string has a value.
    if(inviteEmailsAsString){
      inviteEmailsAsArray = inviteEmailsAsString.split(" ");
    }

    for(let i = 0; i < allCheckboxes.length; i++){
      if(allCheckboxes[i].checked){
        days.push(allCheckboxes[i].value)
      }
    }

    console.log(days);

    if (title && days.length > 0 && inviteEmailsAsArray.length > 0) {
      const response = await fetch("/api/events", {
        method: "post",
        body: JSON.stringify({
          title: title,
          days: days,
          invite_emails: inviteEmailsAsArray
        }),
        headers: { "Content-Type": "application/json" },
      });
      // TODO we need the response to give us the id of the event so that we can go to the right vote page
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
    else{
      alert('Not enough information. Please fill out the entire form before submitting.');
      return;
    }
}

document
  .getElementById("event-form")
  .addEventListener("submit", newEventFormHandler);
