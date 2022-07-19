console.log("Let's get this party started!");
function showGifs(gif) {
  let $gifV = $(`<img src=${gif}>`);
  $(".gifs").append($gifV)
}

async function getGifs() {
  let gif = await axios.get("http://api.giphy.com/v1/gifs/search",
  {params: {q: $("input").val() }})
  showGifs(gif.data[0].url);
}
