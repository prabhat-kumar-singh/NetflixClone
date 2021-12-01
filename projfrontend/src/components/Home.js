import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../css/App.css";
import Footer from "./base/Footer";
import Header from "./base/Header";


const Language = () => {
    const [lang, setLang] = useState("english");

    return(
        <div className = "lang">
            <select
            onChange = {(e) => {
                setLang(e.target.value);
            }}
            value = {lang}
            >
                <option value = "english">English</option>
                <option value = "hindi">Hindi</option>
            </select>
        </div>
    )
}

const Home = () => {

    return(
        <div className = "container">
            
            <div className = "frontpage">
                <Header>
                    <Language />
                </Header>
                
                <div className = "container-val">
                    <p>Unlimited movies, TV shows and more.</p>
                    <p>Watch anywhere, cancel anytime</p>
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                    <form>
                        <input type = "email"  placeholder = "Email address" required />
                        <button type = "submit">Get Started &gt;</button>
                    </form>
                </div>
            </div>
            
            <section>
                <div className = "content">
                    <h1>Enjoy on your TV.</h1>
                    <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                </div>
                <div className = "content-img">
                    <div>
                        <img src = {require("../source/tv.png")} alt = "tv"/>
                    </div>
                </div>
            </section>

            <section>
                <div className = "content-img">
                    <div>
                        <img src = "" alt = "tv"/>
                    </div>
                </div>
                <div className = "content">
                    <h1>Download your shows to watch offline.</h1>
                    <p>Save your favourites easily and always have something to watch.</p>
                </div>
            </section>

            <section>
                <div className = "content">
                    <h1>Watch everywhere.</h1>
                    <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                </div>
                <div className = "content-img">
                    <div>
                        <img src = "" alt = "tv"/>
                    </div>
                </div>
            </section>

            <section>
                <div className = "content-img">
                    <div>
                        <img src = "" alt = "tv"/>
                    </div>
                </div>
                <div className = "content">
                    <h1>Create profiles for children.</h1>
                    <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
                </div>
            </section>

           <div className = "faq">
                <h1>Frequently Asked Questions</h1>

                <div className = "list">
                    <details>
                        <summary>What is Netflix ?</summary>
                        <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

                        You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
                    </details>

                    <details>
                        <summary>How much does Netflix cost ?</summary>
                        <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 199 to ₹ 799 a month. No extra costs, no contracts.</p>
                    </details>

                    <details>
                        <summary>Where can I watch ?</summary>
                        <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

                        You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                    </details>

                    <details>
                        <summary>How do I cancel ?</summary>
                        <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                    </details>

                </div>

                <section className = "form-details">
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                    <form>
                        <input type = "email"  placeholder = "Email address" required />
                        <button type = "submit">Get Started &gt;</button>
                    </form>
                </section>

                <Footer>
                    <Language/>
                </Footer>
           </div>
        </div>
    )
}

export default Home;