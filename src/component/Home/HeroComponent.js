import CircleClick from '../../assets/circle_tick.svg';
import './stylesheets/index.css';

function HeroComponent() {
    return (
        <div className="bg-image">
            <section className="hero is-fullwidth is-large">
                <div className="columns container is-fluid px-6">
                    <div className="column left-image is-hidden-touch">
                    </div>
                    <div className="column is-centered is-full-touch py-6">
                        <div className="block has-text-centered-touch py-6">
                            <h1 className="subtitle is-size-5 has-text-weight-semibold">
                                Get rewarded for your daily trash pickup on
                            </h1>
                            <h1 className="title is-size-1 is-size-2-touch has-text-weight-bold is-primary">
                                EnviClean
                            </h1>
                        </div>
                        <div className="has-text-centered block">
                            <div className="level">
                                <div className="level-item">
                                    <img src={CircleClick} alt="Doorstep pickup"/>
                                    <span className="subtitle is-size-6 px-3 has-text-weight-semibold">
                                        Doorstep pickup
                                    </span>
                                </div>
                            </div>
                            <div className="level">
                                <div className="level-item">
                                    <img src={CircleClick} alt="On-time pickup"/>
                                    <span className="subtitle is-size-6 px-3 has-text-weight-semibold">
                                        On-time pickup
                                    </span>
                                </div>
                            </div>
                            <div className="level">
                                <div className="level-item">
                                    <img src={CircleClick} alt="Email reminders"/>
                                    <span className="subtitle is-size-6 px-3 has-text-weight-semibold">
                                        Email reminders
                                    </span>
                                </div>
                            </div>
                            <div className="level">
                                <div className="level-item">
                                    <img src={CircleClick} alt="Free CleanCoins"/>
                                    <span className="subtitle is-size-6 px-3 has-text-weight-semibold">
                                        Free CleanCoins
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="block has-text-centered py-3">
                            <a id="depositnow" className="button is-primary is-large"
                               aria-label="Deposit now" href="/depositor">
                                Deposit now
                            </a>
                        </div>
                    </div>
                    <div className="column right-image is-hidden-touch">
                    </div>
                </div>
            </section>
            <progress className="progress is-primary" value="100" max="100"/>
        </div>
    )
}

export default HeroComponent;