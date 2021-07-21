import './stylesheets/index.css'
import WhyEnviCleanImage from "../../assets/why.svg";

function WhyComponent() {
    return (
        <section id="why" className="mission container is-white is-max-widescreen py-6 px-2">
            <div className="columns level is-white">
                <div className="column level-item is-half is-full-mobile">
                    <div className="card">
                        <figure className="image is-3by2">
                            <img src={WhyEnviCleanImage} alt="The Mission of EnviClean"/>
                        </figure>
                    </div>
                </div>
                <div className="column level-item is-half is-full-mobile">
                    <p className="title has-text-centered-mobile has-text-weight-bold">
                        WHY ENVICLEAN?
                    </p>
                    <div className="block has-text-centered-mobile">
                        <p className="is-size-6 py-2">
                            The EnviClean aims to keep the city clean from scattered garbage bags. The main mission
                            of EnviClean is to support the <b>Swach Bharath Abhiyan</b> scheme.
                        </p>
                        <p className="is-size-6 py-2">
                            Apart from picking up the regular household garbage, EnviClean provides you an opportunity
                            to let the Garbage pickers in your locality about the trash in the streets through the
                            <b> Patron</b> program.
                        </p>
                        <p className="is-size-6 py-2">
                            Motivating the systematic Trash deposition by rewarding the customers with EnviCoins,
                            which holds the power to purchase your favorite brand coupons.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );

}
export default WhyComponent;