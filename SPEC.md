# This file is for psuedocoding notes

## There are three pages in the MVP: Root, Event_entry, and Tally

```
'/'                           [root page where signup happens]
'/event_entry/:organizer_id'  [event details are entered here by the organizer]
'/tally/:user_event_id'       [shows current vote tally and accepts votes]
```

## Html Routes

```
// root
-----------------------------------------------------------------------------
router.get ('/',
  check for session
  if no session
    render root page
  else
    render tally page that relates to the session

// event_entry
-----------------------------------------------------------------------------
router.get ('/event_entry',
  check for session
  if no session
    render root page
  else
    render event_entry page that relates to the session

// tally
-----------------------------------------------------------------------------
router.get ('/tally',
  check for session
  if no session
    render root page
  else
    render tally page that relates to the session
```

## API Routes

```
// model for signup
-----------------------------------------------------------------------------
router.post('/', (req, res) => {
  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
    .then(dbUserData => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
        // organizer boolean update

        res.json(dbUserData);

    // .then render event_entry?

      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// model for signout
-----------------------------------------------------------------------------
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});


// organizer submits an event
-----------------------------------------------------------------------------
router.post('/event_entry', (req, res) => {
  // expects {
      //event details
  // }
  Event.create({
      //event details
  })

    // .then render tally

      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



// tally post
-----------------------------------------------------------------------------
router.post('/tally', (req, res) => {
  update database with new tally
  render updated tally page


// invitee link
-----------------------------------------------------------------------------
// this is what the server deals with when an invitee clicks a link in an email
// the link will be something like https://[heroku stuff]/invitee/[UUID]

router.get('/invitee,
  check req.params against list of user_event_id links
  if there's a match
    redirect to the appropriate tally page
  else
    send 404 page not found error

```

## public/js code

```
// model for signup
-----------------------------------------------------------------------------
async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);


// model for signout
-----------------------------------------------------------------------------
async function logout() {
  const response = await fetch('/api/users/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#logout').addEventListener('click', logout);


// submit event
-----------------------------------------------------------------------------
async function submitEvent(event) {
  event.preventDefault();

  // const for event submittal

  const response = await fetch('/api/event_entry', {
      method: 'post',
      body: JSON.stringify({

          // event data

      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/tally/');
      // this needs to render the tally for the right event
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);


// submit tally
-----------------------------------------------------------------------------
async function submitTally(event) {
  event.preventDefault();

  // const for tally submittal

  const response = await fetch('/api/tally', {
      method: 'post',
      body: JSON.stringify({

          // tally data

      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/tally/');
      // needs to render the right tally
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);


```
