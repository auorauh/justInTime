import logo from './logo.svg';
import './App.css';
import heroImg from './Assets/heroImg.jpg'
import { FaTrashArrowUp } from "react-icons/fa6";
import { TbReportAnalytics } from "react-icons/tb";
import { FaRecycle } from "react-icons/fa";
import { FaDog } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { TbCertificate } from "react-icons/tb";

function App() {
  return (
    <div className="App">
      <header className="header"> <div className="logo"></div> <div>Services</div> <div>About</div> <div>Contact Us</div> <div className="learnButton grnBg">Free Quote</div></header>
      <div className="landing">
        <div className="landingText">Premium Valet Trash & Bulk<br/>Removal for Multifamily</div>
        <div className="landingSubtext">Comprehensive waste support services. Including doorstep trash pickup<br/> and recycling, bulk trash pickup, trashouts, and more.</div>
        <div className="landingButtons"> <div className="landingButton">Request a Quote</div> <div className="landingButton">About Us</div></div>
        <div class="curve-mask">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,0 C480,50 960,50 1440,0 L1440,100 L0,100 Z" fill="#FFDEAD" />
        </svg>
      </div>
      </div>

      <div className="services">
        <div className="serviceText">The best valet trash services company for multifamily<br/> communities</div>
        
        <div className="serviceCards">
          <div className="serviceCard"><FaTrashArrowUp className="icons"/> Valet Trash:<br/> Doorstep Pickup</div>
          <div className="serviceCard"><TbReportAnalytics className="icons"/>Nightly Service<br/> Reports</div>
          <div className="serviceCard"><FaRecycle className="icons"/>Recycling Programs<br/> Included</div>
          <div className="serviceCard"><FaDog className="icons"/>Pet Waste Stations</div>
          <div className="serviceCard"><HiOutlineDocumentText className="icons"/> Fully Licensed and <br/>Insured</div>
          <div className="serviceCard serviceCard6"><TbCertificate className="icons"/> All Employees are Background Checked and W2</div>
        </div>
        <div className="serviceText">Comprehensive waste support services</div>
      </div>
      <div className="learnMore">
        <div className="learnCard"><div className="learnOverlay"></div><div className="learnText">Valet Trash </div><div className="learnButton">Learn More</div></div>
        <div className="learnCard"><div className="learnOverlay2"></div><div className="learnText">Waste Leveling and Bulk Hauling</div><div className="learnButton grnBg">Learn More</div></div>
        <div className="learnCard"><div className="learnOverlay"></div><div className="learnText">Trash Out</div><div className="learnButton">Learn More</div></div>
        <div className="learnCard"><div className="learnOverlay2"></div><div className="learnText">Pressure Washing</div><div className="learnButton grnBg">Learn More</div></div>
      </div>
      <div className="quoteSection">
        Valet trash services for multifamily<br/> residential communities.
        <div className="quoteCards">
          <div className="quoteCard">
            <img className="quoteImg" src={heroImg}/>
            <div className="quoteCardText1">Apartments</div>
            <div className="quoteCardText2">Multi-family Apartment<br/> Complexes</div>
            <div className="quoteCardText3">Get a Quote</div>
          </div>
          <div className="quoteCard">
            <img className="quoteImg" src={heroImg}/> 
            <div className="quoteCardText1">Senior Living</div>
            <div className="quoteCardText2">Assisted Living Communities, Hospice Centers, and Senior Living</div>
            <div className="quoteCardText3">Get a Quote</div>
          </div>
          <div className="quoteCard">
            <img className="quoteImg" src={heroImg}/>
            <div className="quoteCardText1">Campus</div>
            <div className="quoteCardText2">Student Housing and <br/>Campus Dorm Communities</div>
            <div className="quoteCardText3">Get a Quote</div>
          </div>
        </div>
      </div>
      <div class="footer-curve">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,100 C480,0 960,0 1440,100 L1440,0 L0,0 Z" fill="#FFF" />
        </svg>
      </div>
      <footer>
        Just In Time
        <div className="footerLinks">
          <div>About</div>
          <div>Contact</div>
          <div>Technology</div>
          <div>Careers</div>
          <div>Locations</div>
          <div>Press</div>
        </div>
        Copyright 2025 Just In Time
      </footer>
    </div>
  );
}

export default App;
