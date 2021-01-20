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

    function elm(type, attr = {}, ...children) {
        let element = document.createElement(type);

        for (let key in attr) {
            if (key.startsWith("data-")) {
                element.setAttribute(key, attr[key]);
            } else {
                element[key] = attr[key];
            }
        }

        children.forEach(child => {
            if (typeof child === "object") {
                element.append(child);
            }
            if (typeof child === "string") {
                let textNode = document.createTextNode(child);
                element.append(textNode);
            }
        });
        return element;
    }

    function createUi(movieList) {
        let moviesContainer = document.querySelector("#movies-container");
        moviesContainer.innerHTML = "";

        movieList.forEach((movie, i) => {
            let li = elm(
                "li",
                { className : "movie" },
                elm("span",
                    { className : "movie-name" },
                    movie.name
                ),
                elm(
                    "button",
                    { className : "button",
                      "data-id" : i },
                    movie.isWatched ? "Watched" : "To Watch"
                )
            );
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