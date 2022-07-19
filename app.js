"use strict";
// don't forget to host to http first!

console.log("Let's get this party started!");

function showGifs(gif) {
  let $gifV = $(`<img src=${gif}>`);
  $(".gifs").append($gifV)
}

async function getGifs() {
  let gifName = $(".search").val()
  let apiKey = "qfVX854X9vKMQ46q6oMfhzmGBXL9lNJn"

  let gif = await axios.get("https://api.giphy.com/v1/gifs/search", // need the whole https:// part as well  (whole url)
  {params: {q: gifName, api_key: apiKey}})
  
  return gif.data.data[0].images.original.url
  // we needed to do data.data and do a specific type of URL that was
  // not cross origin  (media file)

}

$('.form').on('submit', async function(evt) {  // ALWAYS need async function with await   // don't forget event listener!
  evt.preventDefault();
  let gifUrl = await getGifs();

  showGifs(gifUrl);
});

$('.delete').on('click', function() {
  $('.gifs').html('');
})