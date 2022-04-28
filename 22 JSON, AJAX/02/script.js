document.addEventListener("DOMContentLoaded", function () {
  // http://www.omdbapi.com/?apikey=c9643353&s=
  let btn = document.getElementById("send-btn");
  let container = document.getElementById("container");
  let searchInput = document.getElementById("search");

  let xhr = new XMLHttpRequest();

  //с кнопками
  let btnCont = document.querySelector("#buttons");
  btn.onclick = function () {
    xhr.open(
      "GET",
      "http://www.omdbapi.com/?apikey=c9643353&s=" + searchInput.value
    );
    xhr.send();
  };

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let data = JSON.parse(xhr.response);
      console.log(data);
      container.innerHTML = "";
      //с кнопками
      btnCont.innerHTML = "";
      for (let i = 0; i < data.Search.length; i++) {
        let movie = data.Search[i];
        let title = document.createElement("h4");
        let poster = document.createElement("img");
        let year = document.createElement("div");
        let movieContainer = document.createElement("div");

        title.textContent = movie.Title;
        poster.src = movie.Poster == "N/A" ? "NOPOSTER.jpg" : movie.Poster;
        year.textContent = movie.Year;

        movieContainer.append(title, poster, year);
        container.append(movieContainer);
      }
      //с кнопками
      let times = Math.ceil(data.totalResults / 10);
      for (let i = 0; i < times; i++) {
        let button = document.createElement("button");
        button.textContent = i + 1;
        button.onclick = function () {
          xhr.open(
            "GET",
            "http://www.omdbapi.com/?apikey=c9643353&s=" +
              searchInput.value +
              "&page=" +
              (i + 1)
          );
          xhr.send();
        };
        btnCont.append(button);
      }
    }
  };
});
