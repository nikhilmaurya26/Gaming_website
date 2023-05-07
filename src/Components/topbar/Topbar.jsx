import "./topbar.scss";
import "../css/button.scss"

export default function topbar() {
  return (
    <div className="mainbody">
      <div className="whatsnew">
        <div className="title">
          <h1>WHATS NEW?</h1>
          <img src="assests/Line.png" alt="" />
        </div>
        <div className="btn">
        <button  className="button">
          <span>EXPLORE MORE GAMES</span>
        </button>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <img src="assests/card1.png" alt="cardimage"/>
          <div className="card-body">
            <h2> FORTNITE</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Eget tincidunt non odio sit. Faucibus aliquam bibendum fermentum at mauris turpis potenti sollicitudin viverra... </p>
            <button className="more-btn"><span>FIND OUT MORE</span></button>
        </div>
          
        </div>
        <div className="card">
          <img src="assests/card3.png" alt="cardimage"/>
          <div className="card-body">
            <h2>FINAL FANTASY XIV ONLINE</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Eget tincidunt non odio sit. Faucibus aliquam bibendum fermentum at mauris turpis potenti sollicitudin viverra... </p>
            <button className="more-btn"><span>FIND OUT MORE</span></button>
          </div>
        </div>
        <div className="card">
          <img src="assests/card4.png" alt="cardimage"/>
          <div className="card-body">
            <h2>WORLD OF WARCRAFT</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Eget tincidunt non odio sit. Faucibus aliquam bibendum fermentum at mauris turpis potenti sollicitudin viverra... </p>
            <button className="more-btn"><span>FIND OUT MORE</span></button>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="left">
            <h1>ABOUT US</h1>
                <p>hi there this is Lorem ipsum, dolor sit amet consectetur 
                adipisicing elit. the new era for Modi perferendis nulla =
                the new era for harum omnis quae, at, iste odio saepe</p>
            <div className="buttons">
            <button className="button"><span>BROWSE GAMES</span></button>
            </div>
        </div>
        <div className="right"></div>
      </div>
      <div className="bestseller">
        <div className="title">
          <h1>BEST SELLERS</h1>
          <img src="assests/Line1.png" alt="" />
        </div>
        <div className="btn">
        <button className="button">
          <span>EXPLORE MORE GAMES</span>
        </button>
        </div>
      </div>
      <div className="card-container1">
        <div className="card">
          <img src="assests/Card2.png" alt="cardimage"/>
          <div className="card-body">
            <h2> FORTNITE</h2>
            <button className="more-btn"><span>FIND OUT MORE</span></button>
          </div>
        </div>
        <div className="card">
          <img src="assests/RocketLeague.png" alt="cardimage"/>
          <div className="card-body">
            <h2>FINAL FANTASY XIV ONLINE</h2>
            <button className="more-btn"><span>FIND OUT MORE</span></button>
          </div>
        </div>
        <div className="card">
          <img src="assests/revelation.png" alt="cardimage"/>
          <div className="card-body">
            <h2>WORLD OF WARCRAFT</h2>
            <button className="more-btn"><span>FIND OUT MORE</span></button>
          </div>
        </div>
        <div className="card">
          <img src="assests/Aion.png" alt="cardimage"/>
          <div className="card-body">
            <h2>FINAL FANTASY XIV ONLINE</h2>
            <button className="more-btn"><span>FIND OUT MORE</span></button>
          </div>
        </div>
      </div>
      <div className="whyus">
        <div className="left">  
        </div>
        <div className="right">
        <h1>WHY US?</h1>
                <p>hi there this is Lorem ipsum, dolor sit amet consectetur 
                adipisicing elit. the new era for Modi perferendis nulla =
                the new era for harum omnis quae, at, iste odio saepe</p>
            <div className="buttons">
            <button className="button"><span>BROWSE GAMES</span></button>
            </div>
        </div>
      </div>
    </div>
  )
}
