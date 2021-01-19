(function main() {
    let movieList = JSON.parse(localStorage.getItem("movies")) || [];
    let inputForm = document.querySelector("#input-form");

    class Movie {
        constructor(name) {
            this.name =  name;
            this.isWatched = false;
        }
    }

    (function handleEvents() {
        inputForm.addEventListener("submit", (event) => {
            event.preventDefault();
            let name = event.target.children[0].value;
            event.target.children[0].value = '';
            movieList.push(new Movie(name));
            localStorage.setItem("movies", JSON.stringify(movieList));
            createUi(movieList);
        });
    })();

    function createUi(movieList) {
        let moviesContainer = document.querySelector("#movies-container");
        moviesContainer.innerHTML = "";

        movieList.forEach(movie => {
            let li = document.createElement("li");
            let span = document.createElement("span");
            let button = document.createElement("button");
            button.innerText = movie.isWatched ? "Watched" : "To Watch";
            span.innerText = movie.name;
            li.classList.add("movie");
            li.append(span, button);
            moviesContainer.append(li);

            button.addEventListener("click", () => {
                movie.isWatched = !movie.isWatched;
                localStorage.setItem("movies", JSON.stringify(movieList));
                createUi(movieList);
            });
        });
    }

    createUi(movieList);
})();