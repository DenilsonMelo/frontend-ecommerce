import { Container, TopFooter, DownFooter } from './styles';

export function Footer(){
    return(
        <Container>
            <TopFooter>
                <div>
                    <span>Brands</span>
                    <hr/>
                    <p>Adidas</p>
                    <p>Puma</p>
                    <p>Reebook</p>
                    <p>Nike</p>
                </div>

                <div>
                    <span>Company</span>
                    <hr/>
                    <p>About Us</p>
                    <p>Find a Store</p>
                    <p>Rules and Terms</p>
                    <p>Sitemap</p>
                    <p>Career</p>
                </div>

                <div>
                    <span>Help</span>
                    <hr/>
                    <p>Contact Us</p>
                    <p>Money Refound</p>
                    <p>Order Status</p>
                    <p>Shipping Info</p>
                    <p>Open Dispute</p>
                </div>

                <div>
                    <span>Account</span>
                    <hr/>
                    <p>Login</p>
                    <p>Register</p>
                    <p>Account Setting</p>
                    <p>My Orders</p>
                </div>

                <div>
                    <span>Social</span>
                    <hr/>
                    <div>
                        <img src="/icons/facebook-small.svg" alt="Facebook"/>
                        <p>Facebook</p>
                    </div>
                    <div>
                        <img src="/icons/twitter-small.svg" alt="Twitter"/>
                        <p>Twitter</p>
                    </div>
                    <div>
                        <img src="/icons/instagram-small.svg" alt="Instagram"/>
                        <p>Instagram</p>
                    </div>
                    <div>
                        <img className="youtube" src="/icons/youtube-small.svg" alt="Youtube"/>
                        <p>Youtube</p>
                    </div>
                </div>
            </TopFooter>

            <DownFooter>
                <p>© 2021 Pixsellz. All rights reserved. By Denilson ❤ </p>
                <p>info@pixsellz.io    999-999-9999    456 Hagenes Gardens Suite 808</p>
                <div>
                    <img src="/icons/american-express.svg" alt="American Express"/>
                    <img src="/icons/mastercard.svg" alt="MasterCard"/>
                    <img src="/icons/paypal.svg" alt="PayPal"/>
                    <img src="/icons/visa.svg" alt="Visa"/>
                </div>
            </DownFooter>
        </Container>
    )
}