export default function Contact() {
    return (
        <section className="contact padding">
            <div className="container">
            <header className="sec-header text-center">
                <h2 className="heading">Contact Us</h2>
                <div className="dot-wrapper">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                </div>
            </header>
            <div className="flex">
                <form className="flex-60" action="index.html" method="post">
                <fieldset>
                    <div className="flex">
                    <input
                        className="form-control flex-48"
                        type="text"
                        name="name"
                        placeholder="Full Name"
                    />
                    <input
                        className="form-control flex-48"
                        type="email"
                        name="email"
                        placeholder="Your Email"
                    />
                    </div>
                    <div className="flex">
                    <input
                        className="form-control flex-48"
                        name="number"
                        type="tel"
                        placeholder="Your Phone"
                    />
                    <select className="form-control flex-48" name="budget">
                        <option value="Budget Level">Budget Level</option>
                        <option value="Budget Level1">Budget Level1</option>
                        <option value="Budget Level2">Budget Level2</option>
                        <option value="Budget Level3">Budget Level3</option>
                    </select>
                    </div>
                    <textarea
                    className="form-control"
                    name="requirements"
                    placeholder="Your Requirements"
                    id=""
                    rows="6"
                    ></textarea>
                </fieldset>
                <input
                    type="submit"
                    value="Send Message"
                    className="btn btn-primary"
                />
                </form>
                <div className="flex-40 map">
                <iframe
                    title="Google map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3375.9195155713787!2d76.35140991561741!3d32.206399320166405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b530e24726e0d%3A0x71ff0cae0784712d!2sAltCampus%20Services%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1600510560646!5m2!1sen!2sin"
                    frameBorder="0"
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                ></iframe>
                </div>
            </div>
            </div>
        </section>
    )
}