/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
let term = document.getElementById('term').value

// 2. Create your `submit` event for getting the user's search term

let submit = document.querySelector('#submit')

let result = document.getElementById('results')
// let searchURL = ''
// let doTheSearch(searchit)=>{searchURL + searchbar.value};

// 3. Create your `fetch` request that is called after a submission
submit.addEventListener("click", function(){
  fetch("https://itunes.apple.com/search?term=term")
  .then(
    function(response) {
 // We process the response accordingly.

 if (response.status !== 200) {
 console.log(response.status)
  return;
 } response.json().then(function(data) {
        console.log("Here is the data:", data);
        console.log(data.results)

        for (let i = 0; i < 20; i++) {
          results.innerHTML +=`
          <section class="instance"><h1>${data.results[i].artistName}</h1></section>`


                }
             });


            }
           )
           .catch(function(err) {
            console.log("Fetch Error :-S", err);
           });});






// let entity="allArtist&attribute=allArtistTerm"
//
// audio.setAttribute('src', "https://.../search?term=serachbar&wsSearchCB)
//
// fetch https://itunes.apple.com/search?=term&country&callback
//
// fetch(`https://itunes.apple.com/search?term=${searchbar.value}`)
//   .then(function(response) {
//         console.log(data)
//   })
// audio.setAttribute('src', "https://.../search?parameterkeyvalue&callback="{selectSong}"")
//
// });
//https://itunes.apple.com/search?term=jack+johnson

// 4. Create a way to append the fetch results to your page


// 5. Create a way to listen for a click that will play the song in the audio play
