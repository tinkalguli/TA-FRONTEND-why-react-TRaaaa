import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import data from "../data/data.json";

export default function Blog() {
    return (
        <section className="blog padding">
            <div className="container">
                <header className="sec-header text-center">
                    <h2 className="heading">Our Blog</h2>
                    <div className="dot-wrapper">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    </div>
                </header>
                <div className="flex wrap">
                    {
                        data.map((article, i) => {
                            return <Article key={i} {...article} />;
                        })
                    }
                </div>
            </div>
        </section>
    )
}

function Article(props) {
    return (
        <article className="flex article flex-48">
            <div className="flex-40 font-0">
                <img
                className="flexible-img"
                src={props.imageUrl}
                alt={props.imageAlt}
                />
            </div>

            <div className="flex-60 article-content">
                <time dateTime="">
                    <FontAwesomeIcon icon={faClock} /> December 10, 2017
                </time>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <a className="btn btn-tertiary" href={props.url}>View Detail</a>
            </div>
        </article>
    )
}