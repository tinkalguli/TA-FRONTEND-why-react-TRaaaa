(function main() {
    let movieList = JSON.parse(localStorage.getItem("movies")) || [];
    
    class Movie {
        constructor(name) {
            this.name =  name;
            this.isWatched = false;
        }
    }
    
    (function handleInputEvents() {
        let inputForm = document.querySelector("#input-form");

        inputForm.addEventListener("submit", (event) => {
            event.preventDefault();
            let name = event.target.children[0].value;
            event.target.children[0].value = '';
            movieList.push(new Movie(name));
            localStorage.setItem("movies", JSON.stringify(movieList));
            createUi(movieList);
        });
    })();

    function handleButtonEvents() {
        let allButton = document.querySelectorAll(".button");

        [...allButton].forEach(button => {
            button.addEventListener("click", (event) => {
                let id = +event.target.dataset.id;
                movieList[id].isWatched = !movieList[id].isWatched;
                localStorage.setItem("movies", JSON.stringify(movieList));
                createUi(movieList);
            });
        });
    }

    function createUi(movieList) {
        let moviesContainer = document.querySelector("#movies-container");

        let ui = movieList.map((movie, i) => {
            let li = React.createElement(
                "li",
                { className : "movie" },
                React.createElement("span",
                    { className : "movie-name" },
                    movie.name
                ),
                React.createElement(
                    "button",
                    { className : "button",
                      "data-id" : i },
                    movie.isWatched ? "Watched" : "To Watch"
                )
            );

            return li;
        });

        ReactDOM.render(ui, moviesContainer);
    }
    createUi(movieList);
    handleButtonEvents();
})();