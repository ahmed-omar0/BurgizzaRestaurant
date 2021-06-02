import Link from 'next/link';
// Import Icons
import { FaAngleDoubleRight, FaGooglePlus, FaYoutube, FaLinkedin, FaPhoneAlt, FaHeart } from 'react-icons/fa';
import { SiFacebook , SiTwitter } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';
import { MdLocationOn } from 'react-icons/md';

const Footer = () => {
    return (
        <footer>
            <div className="header">
                <div className="over-lay"></div>
                <div className='about_us'>
                    <h3>
                        About Us
                    </h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                    <Link href="/about">
                            <span>
                                More --
                                <FaAngleDoubleRight/>
                            </span>
                    </Link>
                </div>
                <div className='reach_us'>
                    <div className='social_media'>
                        <a href="#" target="_blank" title="Facebook">
                            <SiFacebook/>
                        </a>
                        <a href="#" target="_blank" title="Twitter">
                            <SiTwitter/>
                        </a>
                        <a href="#" target="_blank" title="Youtube">
                            <FaYoutube/>
                        </a>
                        <a href="#" target="_blank" title="Google Plus">
                            <FaGooglePlus/>
                        </a>
                        <a href="https://www.linkedin.com/in/ahmed-omar912ba9199/" target="_blank" title="LinkedIn">
                            <FaLinkedin/>
                        </a>
                    </div>
                    <div className='info'>
                        <div>
                            <MdLocationOn/>
                            <h4>Address: Egypt, Al Behra, Damanhour</h4>
                        </div>
                        <div>
                            <FaPhoneAlt/>
                            <h4>phone: (+20) 01018360530</h4>
                        </div>
                        <div>
                            <FiMail/>
                            <h4> Email: mediocre23534@gmail.com</h4>
                        </div>
                    </div>
                </div>
            </div>
            <p className='footer'>
                All right reserved &copy; 2021. <FaHeart style={{color: 'rgb(152 ,8 ,8)'}}/> Designed by Ahmed Omar
            </p>
        </footer>
    );
}
 
export default Footer;