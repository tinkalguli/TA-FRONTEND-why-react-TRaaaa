import {data} from "../data/data.js";
import PropTypes from 'prop-types';

export default function Articles() {
    return (
        <section className="article-sec container">
        <h2 className="article-heading">Articles</h2>
        <div className="articles">
        {data.map((article, i) => {
            return <Article key={i} {...article}/>
            })}
        </div>
        </section>
    )
}

function Article(props) {
    return (
        <article className="article">
        <div className="article-wrapper">
            <div className="image-wrapper">
                <img src={props.urlToImage} alt="random"/>
                <p className="article-author">{props.author}</p>
            </div>
            <div className="article-text">
                <h2 className="article-title">{props.title}</h2>
                <p className="description">{props.description}</p>
                <p className="content">{props.content}</p>
                <a href={props.url} rel="noreferrer" target="_blank" className="article-button">Read more</a>
            </div>
        </div>
        </article>
    )
}

Article.propTypes = {
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    urlToImage: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};