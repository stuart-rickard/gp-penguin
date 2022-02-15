async function newVoteFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  // TODO days is hard coded - Chance to update - note this could cause an issue if the day is not a valid choice
  const days = ["Wednesday"];

  const response = await fetch("/api/votes", {
    method: "post",
    body: JSON.stringify({
      event_id: id,
      days: days,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace(`/vote/${id}`);
  } else {
    alert(response.statusText);
  }
}

document
  .getElementById("vote-form")
  .addEventListener("submit", newVoteFormHandler);
