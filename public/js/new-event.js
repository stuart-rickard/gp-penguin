async function newEventFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector("#event-input").value.trim();
  console.log("title is: " + title);
  // days is hard coded - Chance to update - note this could cause an issue if the day is not a valid choice
  const days = ["Wednesday"];
  console.log("days is: " + days);
  const inviteEmailsAsString = document
    .querySelector("#invitee-email")
    .value.trim();
  console.log("inviteEmailsAsString is: " + inviteEmailsAsString);
  const inviteEmailsAsArray = inviteEmailsAsString.split(" ");
  console.log("inviteEmailsAsArray is: " + inviteEmailsAsArray);

  if (title && days && inviteEmailsAsArray) {
    const response = await fetch("/api/events", {
      method: "post",
      body: JSON.stringify({
        // TODO we need to capture the user id so that the event is associated with the correct id
        user_id: 1,
        title: title,
        days: days,
        invite_emails: inviteEmailsAsArray,
      }),
      headers: { "Content-Type": "application/json" },
    });
    // TODO we need the response to give us the id of the event so that we can go to the right vote page
    if (response.ok) {
      document.location.replace(`/vote/1`);
    } else {
      alert(response.statusText);
    }
  }
}

document
  .getElementById("event-form")
  .addEventListener("submit", newEventFormHandler);
