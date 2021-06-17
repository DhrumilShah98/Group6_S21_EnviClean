import '../../stylesheets/index.css';
import AboutUsImg from '../../assets/about us.svg'

function AboutUs() {

    return (
        <section id="aboutUs" className="mission container is-white is-max-widescreen py-6 px-2">
            <div className="columns level is-white">
                <div className="column level-item is-half is-full-mobile">
                    <p className="title has-text-centered-mobile has-text-justified">
                        ABOUT US
                    </p>
                    <div className="block has-text-centered-mobile">
                        <p className="is-size-6 py-2">
                            We area group of five Master graduates who are keen to keep our society clean.
                        </p>
                        <p className="is-size-6 py-2">
                            We continuously seek help from various NGO and governmental organizations who
                            can pick the Trash from residential areas.
                        </p>
                        <p className="is-size-6 py-2">
                            We aim to make this platform stronger by inviting various volunteers from the National
                            Social Service community and thrive to acheive the United Nation Sustainability Development.
                            Goal number 6.
                        </p>
                    </div>
                </div>
                <div className="column level-item is-half is-full-mobile">
                    <div className="card">
                        <figure className="image is-3by2">
                            <img src={AboutUsImg} alt="The Mission of EnviClean"/>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default AboutUs;