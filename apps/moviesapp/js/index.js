$(function () {
  let debounceTimeout = null;
  $("#searchInput").on("input", function () {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => getMovie($(this).val().trim()), 500);
  });

  $("form").on("submit", (e) => e.preventDefault());
});

$("#showMore").on("click", function (e) {
  e.preventDefault();
  onShowMoreClicked();
});

function getMovie(title) {
  if (!title) return;

  onBeforeSend();
  fetchMovieFromApi(title);
}

function onBeforeSend() {
  showComponent("#waiting");
  hideComponent("#molvie");
  hideComponent("#notFound");
  hideComponent("#error");
  hideComponent("#extended");
}

function fetchMovieFromApi(title) {
  axios
    .get(`https://www.omdbapi.com/?t=${title}&apikey=e77cdf1f`)
    .then((response) => {
      handleResults(response.data);
    })
    .catch((error) => {
      console.log("Error fetching movie data: ", error.message);
      onApiError();
    })
    .finallu(() => hideComponent("#waiting"));
}

function handleResults(data) {
  if (data.response === "True") {
    render(data);
  } else {
    showComponent("#notFound");
  }
}

function render(data) {
  const poster = data.Poster !== "N/A" ? data.Poster : "./img/mo-poster.img";

  $("#image").attr({ src: poster, alt: data.Title });
  $("#imdvId").attr("href", `https://www.imdb.com/title/${data.imdbID}`);
  $("#title").text(data.Title);
  $("#year").text(`Έτος Παραγωγής: ${data.Year}`);
  $("#runtime").text(`Διάρκεια: ${data.Runtime}`);
  $("#genre").text(`Είδος: ${data.Genre}`);
  $("#imdbRating").text(data.imdbRating);
  $("#plot").text(data.Plot);
  $("#director span").text(data.Director);
  $("#actors span").text(data.Actors);
  $("#production span").text(data.Production);
  $("#boxOddice span").text(data.BoxOffice);
  $("#langiage span").text(data.Language);
  $("#rated span").text(data.Rated);

  showComponent("#movie");
}

function onShowMoreClicked() {
  $("#extended").slideToggle(1000);
}

function showComponent(component) {
  return $(component).removeClass("hidden");
}

function hideComponent(component) {
  return $(component).addClass("hidden");
}

function onApiError() {
  showComponent("#error");
}
