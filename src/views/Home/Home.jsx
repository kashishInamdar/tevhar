import { useSearchParams } from "react-router-dom";
import "./Home.css"
import Stars from "./image/lights.png"
import Lamp from "./image/lamp.png"
import Diya from "./image/diya.png"
import Rangoli from "./image/rangoli.gif"
import { useState } from "react";


const GREETINGS = [
    "छत्रपती शिवरायांच्या पदस्पर्शाने पावन झालेल्या भुमीत, आई जगदंब देवीच्या क्रुपेने, तुम्हाला व तुमच्या सहपरिवाराला दिपावलीच्या हार्दिक शुभेच्छा",

    "सुखं होवोत ओव्हरफ्लो, मस्ती कधी न होवो स्लो, धन आणि समृद्धीचा होवो वर्षाव, असा होवो तुमचा दीपाळीचा सण छान.",

    "दिवे तेवत राहोत, आम्ही तुमच्या आठवणीत सदैव राहो, जोपर्यंत आहे आयुष्य हीच ईच्छा आहे आमची, दिव्यांप्रमाणे उजळत राहो आयुष्य तुमचे. दिवाळीच्या खूप खूप शुभेच्छा.",

    "दिव्यांच्या रोषणाईने उजळून जावं अंगण, फटाक्यांच्या आवाजाने आसमंत जावा भरून, अशीच यावी दिवाळी सर्वांकडे, सगळीकडे असावा आनंदाचा मौसम."
];

function Home() {
    const [searchParams] = useSearchParams();

    const [to, setTo] = useState(searchParams.get(""));

    const [from, setFrom] = useState(searchParams.get("from"));

    const [greetingNumber, setGeetingNumber] = useState(searchParams.get("g") >= GREETINGS.length ? 0 : searchParams.get("g") || 0);

    const [themeNumber, setThemeNumber] = useState(searchParams.get("t"));
    return (
        <div>
            <div className={`card-container ${`them-${themeNumber}`}`}>
                <div>

                </div>
                <img src={Stars} className="stars-l" />
                <img src={Stars} className="stars-r" />

                <span className="dear">Dear {to} 💐</span>

                <p>
                    {GREETINGS[greetingNumber]}
                </p>
                <br />
                <br />
                <img className="rangoli" src={Rangoli} />
                <span className="form-text"> आपकी अपनी {from} <img src={Diya} className="diya" /> </span>
            </div>

            <p className="create-your-own">Do you want to create your own Greeting ? Customize it here👇</p>

            <p className="url">
                {import.meta.env.VITE_BASE_URL}?to={to}&from={from}&g={greetingNumber}&t={themeNumber} 
            </p>


            <div className="input-container">
                <input type="text"
                    className="input"
                    placeholder="to"
                    value={to}
                    onChange={(e) => {
                        setTo(e.target.value)
                    }}
                />
                <input type="text"
                    className="input"
                    placeholder="from"
                    value={from}
                    onChange={(e) => {
                        setFrom(e.target.value)
                    }}
                />
                <select
                    className="input"
                    value={greetingNumber}
                    onChange={(e) => {
                        setGeetingNumber(e.target.value)
                    }}>
                    <option value="0"> Greating 1</option>
                    <option value="1"> Greating 2</option>
                    <option value="2"> Greating 3</option>
                    <option value="3"> Greating 4</option>
                </select>

                <select
                    className="input"
                    value={themeNumber}
                    onChange={(e) => {
                        setThemeNumber(e.target.value)
                    }}>
                    <option value="0"> None</option>
                    <option value="1"> Theme 1</option>
                    <option value="2"> Theme 2</option>
                    <option value="3"> Theme 3</option>
                    <option value="4"> Theme 4</option>
                </select>
            </div>


        </div>
    )
}
export default Home;