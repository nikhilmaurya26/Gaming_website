import "./footer.scss"

export default function Footer() {
  return (
    <div  className="footer">
      <div className="container">
        <div className="box1">
          <h2>CONTACTS</h2>
          <ul>
            <li>Company name</li>
            <li>123 place, longdale </li>
            <li>close, cITY, post code, </li>
            <li>country </li>
          </ul>
        </div>
        <div className="box2">
          <h2>OUR GAMES</h2>
          <div className="box-mini">
          <ul>
            <li>Aion</li>
            <li>DC Universe</li>
            <li>Elder scroll</li>
            <li>Fallout 76</li>
            <li>Fortnite</li>
          </ul>
          <ul>
            <li>Guild wars 2</li>
            <li>Lord of the rings </li>
            <li>Rocket Leauge</li>
            <li>Warframe</li>
            <li>World Of warcraft</li>
          </ul>
          </div>
        </div>
        <div className="box3">
        <h2>SUPPORT</h2>
          <ul>
            <li>Terms and Conditions</li>
            <li>Privacy Policy </li>
            <li>Cokie Policy</li>
          </ul>
        </div>
        <div className="box4">
          <img src="assests/Logo.png" alt="" />
          <p>© 2021 yoursecretloot.com. All Rights Reserved. This site is not affiliated or owned by the listed gaming platform owners.</p>
        </div>
      </div>
    </div>
  )
}
