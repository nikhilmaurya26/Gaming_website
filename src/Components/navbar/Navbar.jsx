import "./navbar.scss";

export default function navbar() {
  return (
    <div className="container">
        <div className='navbar'>
        <div className='left'>
            <img src="assests/Logo.png" alt="" />
        </div>
        <div className='center'>
            <ul>
                <li>
                    BROWSE GAMES
                    <img src="assests/Arrow4.png" alt="" />
                </li>
                <li>
                    HOW TO SELL
                </li>
                <li>
                    CONTACT US
                </li>
                <li>
                    ABOUT US
                </li>
            </ul>
        </div>
        <div className='right'>
            <div className='arrow'>
                GBP <div>
                <img src="assests/Dropdown.png" alt="" />
                </div>
            </div>
            <div>
                <img src="assests/person.png" alt="" />
            </div>
            <div>
                <img src="assests/shopping-cart.png" alt="" />
            </div>
        </div>
    </div>
    <div className="background">
        <div className="bg-container">
            <div className="leftbg"></div>
            <div className="rightbg">
                <h1>MMOGLIFE</h1>
                <p>hi there this is Lorem ipsum, dolor sit amet consectetur <br />
                adipisicing elit. the new era for Modi perferendis nulla <br />
                the new era for harum omnis quae, at, iste odio saepe</p>
            <div className="buttons">
            <button><span>BROWSE GAMES</span></button>
            <button><span>ABOUYT US</span></button>
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}
