async function newVoteFormHandler(event) {
  event.preventDefault();

  const event_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  // TODO days is hard coded - Chance to update - note this could cause an issue if the day is not a valid choice
  let days = [];
  let allCheckboxes = document.querySelectorAll('#vote-form input[type="checkbox"]');

  console.log(allCheckboxes);

  for(let i = 0; i < allCheckboxes.length; i++){
    if(allCheckboxes[i].checked){
      days.push(allCheckboxes[i].value)
    }
  }

  console.log(days);
  console.log(event_id);

  if(event_id && days.length > 0){
    const response = await fetch("/api/votes", {
      method: "post",
      body: JSON.stringify({
        event_id: event_id,
        days: days,
      }),
      headers: { "Content-Type": "application/json" },
    });
  
    if (response.ok) {
      document.location.replace(`/vote/${event_id}`);
    } else {
      alert(response.statusText);
    }
  }
  else{
    alert('Not enough information. Please fill out the entire vote form before submitting.');
    return;
  }
  
}

document
  .getElementById("vote-form")
  .addEventListener("submit", newVoteFormHandler);
