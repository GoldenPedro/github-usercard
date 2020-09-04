import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ["	SleepyLazarus", "Alegar917", "TrevorBeadle", "kubes2020", "gvicas17"];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/


axios.get('https://api.github.com/users/GoldenPedro')
  .then( response => {
    console.log(response.data)
    cardsDiv.appendChild(cardMaker(response.data))
  })
  .catch( err => {
    debugger
  })

followersArray.forEach((item) => {
  let i = followersArray.length;
  axios
    .get(`https://api.github.com/users/${item}`)
    .then((response) => {
      let newUserCard = cardMaker(response.data)
      cardsDiv.appendChild(newUserCard)
    })
    .catch((err) => {
      debugger
    })
})


const cardsDiv = document.querySelector('.cards') 

function cardMaker(object) {
  const card = document.createElement('div')
  card.classList.add('card')
  cardsDiv.appendChild(card)

  const profilePic = document.createElement('img') 
  profilePic.setAttribute('src', object.avatar_url)
  card.appendChild(profilePic)

  const cardInfoDiv = document.createElement('div')
  cardInfoDiv.classList.add('card-info')
  card.appendChild(cardInfoDiv)

  const name = document.createElement('h3')
  name.classList.add('name') 
  name.textContent = object.name
  cardInfoDiv.appendChild(name)

  const username = document.createElement('p')
  username.classList.add('username') 
  username.textContent = object.Login
  cardInfoDiv.appendChild(username)

  const location = document.createElement('p')
  location.textContent = object.Login
  cardInfoDiv.appendChild(location)

  const profileUrl = document.createElement('p')
  profileUrl.innerHTML = `Profile: <a href='${object.html_url}'>${object.html_url}</a>`
  cardInfoDiv.appendChild(profileUrl)

  const followerCount = document.createElement('p')
  followerCount.textContent = `Followers: ${object.followers}`
  cardInfoDiv.appendChild(followerCount)

  const followingCount = document.createElement('p')
  followingCount.textContent = `Following: ${object.following}`
  cardInfoDiv.appendChild(followingCount)

  const bio = document.createElement('p')
  bio.textContent = object.bio
  cardInfoDiv.appendChild(bio)

  return card
}




/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
