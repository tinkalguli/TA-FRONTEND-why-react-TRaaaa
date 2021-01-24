export default function About() {
    return (
        <section className="about padding">
            <div className="container flex align-start">
            <div className="flex-40">
                <header className="sec-header">
                <h2 className="heading">Let us introduce</h2>
                <div className="dot-wrapper flex justify-start">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
                </header>

                <p className="text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Similique ut sequi voluptatibus beatae corporis repellat
                asperiores fugit debitis corrupti nesciunt nam doloribus animi qui
                illum, recusandae nisi neque iusto culpa!
                </p>
                <p className="text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
            <div className="flex-30 progress">
                <div className="progress-item">
                <div className="flex">
                    <h3>Web Design</h3>
                    <p>85%</p>
                </div>
                <progress value="85" max="100"></progress>
                </div>
                <div className="progress-item">
                <div className="flex">
                    <h3>Photography</h3>
                    <p>90%</p>
                </div>
                <progress value="90" max="100"></progress>
                </div>
                <div className="progress-item">
                <div className="flex">
                    <h3>Content Marketing</h3>
                    <p>75%</p>
                </div>
                <progress value="75" max="100"></progress>
                </div>
                <div className="progress-item">
                <div className="flex">
                    <h3>CMS Admin</h3>
                    <p>70%</p>
                </div>
                <progress value="70" max="100"></progress>
                </div>
            </div>
            <div className="flex-30">
                <img
                className="flexible-img about-img"
                src="./media/about-image.jpg"
                alt=""
                />
            </div>
            </div>
        </section>
    )
}