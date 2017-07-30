/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
let thing = document.getElementById('term')

let audio = document.getElementById('audio');

let songs = document.getElementsByClassName('song');

function selectSong(){
  audio.setAttribute('src', `songUrl`)
};

// 2. Create your `submit` event for getting the user's search term

let submit = document.getElementById('submit');

let result = document.getElementById('results');


// let doTheSearch(searchit)=>{searchURL + searchbar.value};

// 3. Create your `fetch` request that is called after a submission
submit.addEventListener("click", function(){
  fetch(`https://itunes.apple.com/search?term=${thing.value}`)
  .then(
    function(response) {
 // We process the response accordingly.

 if (response.status !== 200) {
 console.log(response.status)
  return;
 } response.json().then(function(data) {
        console.log("Here is the data:", data);
        console.log(data.results)

        for (let i = 0; i < 50; i++) {
          results.innerHTML +=`
          <button class="song" type="button"><h2>${data.results[i].artistName}</h2><div id="albumArt">
<img src="${data.results[i].artworkUrl100}" alt=""/><h3>${data.results[i].trackName}</h3>
          </button>`;
          audio.setAttribute('src', `${data.results[i].previewUrl}`)



                }
             });


            }
           )
           .catch(function(err) {
            console.log("Fetch Error :-S", err);
           });});



// 4. Create a way to append the fetch results to your page


// 5. Create a way to listen for a click that will play the song in the audio play
