(function main() {
    let movieList = JSON.parse(localStorage.getItem("movies")) || [];
    let inputForm = document.querySelector("#input-form");

    class Movie {
        constructor(name) {
            this.name =  name;
            this.isWatched = false;
        }
    }

    function handleInputEvents(event) {
        event.preventDefault();
        let name = event.target.children[0].value;
        event.target.children[0].value = '';
        movieList.push(new Movie(name));
        localStorage.setItem("movies", JSON.stringify(movieList));
        createUi(movieList);
    };

    function handleButtonEvents(event) {
        let id = +event.target.dataset.id;
        movieList[id].isWatched = !movieList[id].isWatched;
        localStorage.setItem("movies", JSON.stringify(movieList));
        createUi(movieList);
    }

    function createUi(movieList) {
        let moviesContainer = document.querySelector("#movies-container");
        moviesContainer.innerHTML = "";

        movieList.forEach((movie, i) => {
            let li = document.createElement("li");
            let span = document.createElement("span");
            let button = document.createElement("button");
            button.innerText = movie.isWatched ? "Watched" : "To Watch";
            button.setAttribute("data-id", i);
            button.classList.add("button");
            span.innerText = movie.name;
            span.classList.add("movie.name");
            li.classList.add("movie");
            li.append(span, button);
            moviesContainer.append(li);
        });

        let allButton = document.querySelectorAll(".button");
        [...allButton].forEach(button => {
            button.addEventListener("click", handleButtonEvents);
        });
    }

    createUi(movieList);
    inputForm.addEventListener("submit", handleInputEvents);
})();