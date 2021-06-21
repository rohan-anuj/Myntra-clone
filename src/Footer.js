import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import "./Footer.css"


function Footer() {
    return (
        <div className="footer">
        <div className="online_shopping">
        <h2>ONLINE SHOPPING</h2>
        <p>Contact Us</p>
        <p>FAQ</p>
        <p>T&C</p>
        <p>Term of Use</p>
        <p>Track Order</p>
        <p>Shipping</p>
        <p>Cancellation</p>
        <p>Returns</p>
        <p>Whitehat</p>
        <p>Blog</p>
        <p>Carrers</p>
        <p>Privacy policy</p>
        <p>Site Map</p>




        </div>
        <div className="sidelinks">
        <h2>USEFUL LINKS</h2>
        <p>Men</p>
        <p>Women</p>
        <p>Kids</p>
        <p>Home & Living</p>
        <p>Beauty</p>
        <p>Gift Cards</p>
        <p>Myntra Inside</p>
        

        </div>
        <div className="socio">   
        <div className="appsocio">
        <h2>EXPERIENCE MYNTRA APP ON MOBILE</h2>
        <img src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" alt=""/>
        
        <img src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" alt=""/>
        </div>
        <div className="sociosocio">
        <h2 className="h2">KEEP IN TOUCH</h2>
        <FacebookIcon/>
        <InstagramIcon/>
        <TwitterIcon/>
        <YouTubeIcon/>
        </div>
        </div>
        

        </div>
    )
}

export default Footer
