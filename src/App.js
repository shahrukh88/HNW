import { useState, useEffect } from 'react';
import './App.css';
import { Col, Row, Navbar, Nav, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import logo from "./images1/logo.svg";
import presaleBtn from "./images1/presaleBtn.png";
import presaleMobileBtn from "./images1/presaleMobileBtn.png";
import whitepaperMobileBtn from "./images1/whitepaperMobile.png";
import ourVisionBtn from "./images1/ourVisionBtn.png";
import howItWorksBtn from "./images1/howItWorksBtn.png";
import ourVisionPic from "./images1/ourVisionPic.png";
import howItWorksPic from "./images1/howItWorksPic.png";
import howItWorksPic2 from "./images1/howItWorksPic2.png";
import roadmapBtn from "./images1/roadmapBtn.png";
import roadmapPic from "./images1/roadmapPic.png";
import roadmapMobile from "./images1/roadmapMobile.png";
import communityBtn from "./images1/communityBtn.png";
import facebook from "./images1/facebook.svg";
import twitter from "./images1/twitter.svg";
import instagram from "./images1/instagram.svg";
import discord from "./images1/discord.svg";
import telegram from "./images1/telegram.svg";
import date from "./images1/date.png";
import notes from "./images1/notes.png";
import logo1 from './images1/191.svg' ;
import logo2 from './images1/192.svg' ;
import logo3 from './images1/193.svg' ;



import hnwGif from "./images1/Couple.png";
import eps from "./images1/EPS.png";
import qr from "./images1/QR.png";
import daysRing from "./images1/daysRing.png";
import hoursRing from "./images1/hoursRing.png";
import minutesRing from "./images1/minutesRing.png";
import footerLogo from "./images1/footerLogo.png";
import reddit from "./images1/Reddit.png";
import tiktok from "./images1/Tiktok.png";
import  kickster2 from "./images1/kickster2.png";
import { useMediaQuery } from 'react-responsive'

import  invest from "./images1/invest.png";
import  user2 from "./images1/users2.png";
import  totalpeople from "./images1/totalpeople.png";
import  k1 from "./images1/100k1.png";
import  k2 from "./images1/1000.png";
import  k3 from "./images1/100k.png";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Icon } from '@iconify/react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faYoutube} from "@fortawesome/free-brands-svg-icons";




function App(props) {


  const [show, setShow] = useState(false);
  const [copy, setCopy] = useState("Copy Address");
  const [copyContract, setCopyContract] = useState("Copy Address");
  const handleCopy = () => setCopy("Copied!");
  const handleCopyContract = () => setCopyContract("Copied!");
  const handleWalletAddressCopy = () => {
    navigator.clipboard.writeText("0x8516F15DD0cf88e029B7b7180E962A067a0C629d");
    handleCopy();
  }
  const handleContractAddressCopy = () => {
    navigator.clipboard.writeText("0x402122D90d1351DcE17bB3D1aFfa763BaD456Ee6");
    handleCopyContract();
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })



  const convertTZ = (date, tzString) => {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", { timeZone: tzString }));
  }

  var countDownDate = new Date("April 16, 2022 00:00:00").getTime();


  // Get today's date and time
  var now = convertTZ(new Date(), "EST").getTime();

  // Find the distance between now and the count down date
  var distance = 0;

  // Time calculations for days, hours, minutes and seconds
  var dd = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hh = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var mm = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var ss = Math.floor((distance % (1000 * 60)) / 1000);

  const [seconds, setSeconds] = useState(ss);
  const [minutes, setMinutes] = useState(mm);
  const [hours, setHours] = useState(hh);
  const [days, setDays] = useState(dd);
  const [isActive, setIsActive] = useState(true);



  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
        if (seconds - 1 === 0) {
          setSeconds(59);
          if (minutes - 1 === 0) {
            setMinutes(59);
            setHours(hours => hours - 1);
            if (hours - 1 === 0) {
              setHours(23);
              setDays(days => days - 1);
            }
          }
          else setMinutes(minutes => minutes - 1);
        }
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);






  return (
    <div>

      <Navbar collapseOnSelect fixed="top" expand="lg" >

        <Navbar.Brand><img alt="Health & Wealth Logo" src={logo} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav" >

          {/*this.state.isAuthenticated ? (*/}
          <Nav className="me-auto">
            <Nav.Item><Nav.Link href="#home" style={{ width: 80 }}>Home</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="#vision" style={{ width: 140 }}>Our Vision</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="#howItWorks" style={{ width: 140 }}>How It Works</Nav.Link></Nav.Item>
            {/*<Nav.Item><Nav.Link href="#roadmap" style={{ width: 120 }}>Roadmap</Nav.Link></Nav.Item>*/}
            <Nav.Item><Nav.Link href="#community" style={{ width: 140 }}>Community</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link target="_blank" href="mailto:team@hnwcoin.com" style={{ width: 140 }}>Contact Us</Nav.Link></Nav.Item>
          </Nav>
          <Nav >
            <div className="pw">
              <img alt="Presale" style={{ cursor: "pointer" }} src={presaleBtn} onClick={handleShow} width="200px" /><br />
              <a href="HNW_Whitepaper.pdf" target="_blank"><img alt="Whitepaper" src={whitepaperMobileBtn} style={{ marginLeft: 48, cursor: "pointer", marginTop: -25 }} width="150px" /></a>
            </div>
          </Nav>

        </Navbar.Collapse>
      </Navbar>


      <Modal id="presale" show={show} fullscreen={true} onHide={handleClose}>
        <Modal.Header closeButton><Modal.Title align="center"><img alt="Exclusive Presale" className="eps" src={eps} /></Modal.Title></Modal.Header>
        <Modal.Body>
          <div>

            <p className="availableQuant" style={{ fontSize: "38pt" }}><b>Available Quantity:</b></p>
            <p className="oneHunBill" style={{ marginTop: -70, }}><b className="oneHundredBillion" style={{ fontSize: "76pt" }} >50,000,000,000</b></p>
            <p style={{ fontSize: "17pt", fontFamily: "'Zen Maru Gothic Medium',sans-serif" }}>Token Price:</p>
            <p style={{ fontSize: "15pt", fontWeight: "bold", marginTop: -20 }}>1 HW = 0.000003 USDT</p>
            {/*<p style={{ fontSize: "17pt", fontFamily: "'Zen Maru Gothic Medium',sans-serif" }}>Investment range and conversion rates:</p> */}
            <p style={{ fontSize: "15pt", fontWeight: "bold", marginTop: -20 }}>Minimum investment = 100 USDT</p>
            {/*<p style={{ fontSize: "15pt", fontWeight: "bold", marginTop: -20 }}>Maximum investment = 1000 USDT</p>*/}
            <span style={{ fontSize: "13pt", fontWeight: "bold" }}>HW Presale Address</span><br />
            <img alt="Wallet Address QR code" src={qr} /><br />
            <p style={{ fontSize: "14pt", fontFamily: "'Zen Maru Gothic Medium',sans-serif" }}>(BEP-20)</p>
            <OverlayTrigger overlay={<Tooltip>{copy}</Tooltip>}>
              <span className="walletAddress" onClick={handleWalletAddressCopy} style={{ cursor: "pointer", fontSize: "15pt", fontFamily: "'Zen Maru Gothic Medium',sans-serif" }}>0x8516F15DD0cf88e029B7b7180E962A067a0C629d<i style={{ color: "#f26513", marginLeft: 5 }} className="far fa-copy"></i></span>
            </OverlayTrigger>
            <p><img alt="Presale date" className="date" src={date} style={{ marginTop: -20, marginLeft: "-2%" }} /></p>
          </div>
          <div  >

            <p className="clockSentence" style={{ marginLeft: -30, marginBottom: 10, fontWeight: "bold", fontSize: "21pt" }} >First Exclusive Presale ends in:</p>

            <div className="time">
              <span style={{ position: "relative", margin: 10 }}><img alt="Days left" className="clock" src={daysRing} height="150px" /><span className="days" style={{ position: "absolute", left: "50%", top: "10%", transform: "translate(-50%, -50%)", fontWeight: "bold", fontSize: "32pt" }}>{days}</span></span>
              <span style={{ position: "relative", margin: 10 }}><img alt="Hours left" className="clock" src={hoursRing} height="150px" /><span className="hours" style={{ position: "absolute", left: "50%", top: "10%", transform: "translate(-50%, -50%)", fontWeight: "bold", fontSize: "32pt" }}>{hours}</span></span>
              <span style={{ position: "relative", margin: 10 }}><img alt="Minutes left" className="clock clock2" style={{ marginLeft: 0 }} src={minutesRing} height="150px" /><span className="minutes" style={{ position: "absolute", left: "50%", top: "10%", transform: "translate(-50%, -50%)", fontWeight: "bold", fontSize: "32pt" }}>{minutes}</span></span>
            </div>
          </div>


          <div>
            <p className="notes" style={{ textAlign: "left" }}>
              <img alt="Important Notes" className="notesTitle" src={notes} height="150px" /><br />
              <ol className="notesList" style={{ fontSize: "17pt", fontFamily: "'Zen Maru Gothic Medium',sans-serif", marginTop: -20, marginLeft: 70, marginRight: 70 }}>
                <li>Please don't send the USDT from exchange platforms wallet, the wallet must support the addition of customized tokens.</li>
                <li>Please make sure you send the USDT from your private BEP-20 wallet address to the above mentioned BEP-20 wallet address (using MetaMask or Trust Wallet for example).</li>
                <li>If you send the USDT directly from the cryptocurrency exchange wallet, the token cannot be sent to this address.</li>
                <li>When you deposit USDT to the above deposit address, you will receive an amount of HW tokens equivalent to the quantity of USDT you sent to the personal BEP-20 wallet.</li>
                <li>In order for you to see your HW Coins inside your personal wallet, you need to add HW as a customized token using this contract address:<br />
                  <OverlayTrigger overlay={<Tooltip>{copyContract}</Tooltip>}>
                    <span onClick={handleContractAddressCopy} style={{ cursor: "pointer" }}>0x402122D90d1351DcE17bB3D1aFfa763BaD456Ee6<i style={{ color: "#f26513", marginLeft: 5 }} className="far fa-copy"></i></span>
                  </OverlayTrigger>
                </li>
              </ol>
              <p className="notesStars" style={{ fontSize: "15pt", fontFamily: "'Zen Maru Gothic Medium',sans-serif", marginLeft: 80 }}>*Post pre-sale investment evaluation will put coin at an anticipated 0.00001 USDT Listing price.<br />
                *Investing in Cryptocurrency is volatile and highly risky. Invest at your own risk.</p></p>
          </div>

        </Modal.Body>

      </Modal>

      <div id="home" align="center">
      

<div id="vision">
          <div align="center">
          <Carousel variant="dark">
  <Carousel.Item >
    <img
      className="d-block w-100"
      src="2.png?800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption className="orange">
      </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="1.png?800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="3.png?800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption >
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="4.png?800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="3.png?800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />
   
    <Carousel.Caption className="">
 
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            <div className=''><h1 className='col2'>TOTAL PEOPLE <b>SUPPORTING US</b></h1></div>
            <div align="center" className='tex'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod aliquet <br/> aliquam eu eget lacus. Malesuada lectus urna et</div>
            <Row className="communityRow" style={{}} >
              <Col className='col1'><a rel="noreferrer" target="_blank" href="#">         <img className='img' src={logo2} /></a></Col>
              <Col className='col1'><a rel="noreferrer" target="_blank" href="#">    <img className='img2' src={logo3} /></a></Col>
              <Col className='col1' ><a  href="#" >    <img className='img' src={logo1} /></a></Col>
              
            </Row>
            <Row className="communityRow" style={{}} >
              <Col ><a href='#'><h1 className='col3'>1000+</h1></a></Col>
              <Col ><a href='#'><h1 className='col3'>100K+</h1></a></Col>
              <Col ><a href='#'><h1 className='col3'>$1000K</h1></a></Col>
           
            </Row>
 
          </div>
        </div>

   
        <br/><br/>
        <br/><br/>
        
        <br/><br/>
        <br/><br/>
        <br/><br/>
          <div className="pwMobile">
          <img alt="Presale" style={{ cursor: "pointer" }} src={presaleMobileBtn} width="250px" onClick={handleShow} /><br />
          <a href="HNW_Whitepaper.pdf" target="_blank"><img alt="Whitepaper" src={whitepaperMobileBtn} width="250px" style={{ marginTop: -10, marginLeft: 11, cursor: "pointer" }} /></a>
        </div>
      </div>
      <div >
        <div id="vision"  >
          <Row>
            <Col className=" ourVisionText sectionText" style={{ paddingTop: "10%" }} >
              <img alt="Our Vision" className="ourVisionTitle" src={ourVisionBtn} style={{ marginLeft: -40, marginBottom: -20 }} />
              <p>
                People owe it to themselves to be the best they can possibly be.<br /><br />However, they always need motivation and constant reminders to take care of their well being. Thus, as Health and Wealth team, “We pay you as you move” is our slogan. We are paying our community members in return for your movements.<br /><br />
                Each of the steps they make count. The more somebody pushes himself, the more money he will make.
              </p>
            </Col>
            <Col className="pic visionPic">
              <div align="center"><img alt="Vision" className="pic visionPic" src={ourVisionPic} width="100%" /></div>
            </Col>
          </Row>
        </div>
        <div id="howItWorks" style={{ paddingTop: "4%" }} >
          <div align="center"><img alt="How It Works" className="howItWorksTitle title" src={howItWorksBtn} width="25%" /></div>
          <div align="center"><img alt="How It Works" className="pic howItWorksPic" src={howItWorksPic} /></div>
          <p className="howItWorksText"> HW project<br /> consists of rewarding all<br /> active users with actual developed<br /> HW token for every activity that they make<br /> throughout their day.</p>
        </div>

        <div id="howItWorkss" >
          <Row>
            <Col className="sectionText" style={{ paddingTop: "13%" }}>
              <div><img alt="How It Works" className="title howItWorkssTitle" src={howItWorksBtn} width="50%" style={{ marginBottom: -20, marginLeft: -30 }} /></div>
              <p className="howItWorkssText">
                <div align="center"><img alt="How It Works" className="pic howItWorkssPic2" src={howItWorksPic2} /></div>
                HW token is a cryptocurrency that will have an actual value on the blockchain. This means that the users will be rewarded with actual money just for being active.<br /><br />
                Our community members will be using the HW app, which can be synchronized with our two newly developed smart devices (ring and watch).
                This app will keep track of their activity, and convert their efforts into real money.
              </p>
            </Col>
            <Col >
              <div align="center"><img alt="How It Works" className="pic howItWorkssPic" src={howItWorksPic2} width="100%" /></div>
            </Col>
          </Row>
        </div>
         <div id="community"   >
          <div align="center">
            <img alt="Community" className="communityTitle" src={communityBtn} />
            <Row className="communityRow" style={{}} >
              <Col ><a rel="noreferrer" target="_blank" href="https://www.facebook.com/healthnwealth001"><img alt="Facebook Logo" style={{ cursor: "pointer" }} className="communityLogo" src={facebook} height="80" /></a></Col>
              <Col ><a rel="noreferrer" target="_blank" href="https://www.reddit.com/user/HealthNWealthCoin/"><img alt="Reddit Logo" style={{ cursor: "pointer" }} className="communityLogo" src={reddit} height="80" /></a></Col>
              <Col ><a rel="noreferrer" target="_blank" href="https://vm.tiktok.com/ZSeN6BCp1/"><img alt="Tiktok Logo" style={{ cursor: "pointer" }} className="communityLogo" src={tiktok} height="80" /></a></Col>
              <Col ><a rel="noreferrer" target="_blank" href="https://discord.gg/jNy77kJKqP"><img alt="Discord Logo" style={{ cursor: "pointer" }} className="communityLogo" src={discord} height="80" /></a></Col>
              <Col ><a rel="noreferrer" target="_blank" href="https://t.me/joinchat/Qt9jhg2FEPM0Yjc0"><img alt="Telegram Logo" style={{ cursor: "pointer" }} className="communityLogo" src={telegram} height="80" /></a></Col>
            </Row>
          </div>
        </div>
        <div id="footer">
          <Row>
            <Col md={5}><img alt="Footer Logo" className="footerLogo" src={footerLogo} /></Col>
            <Col className="layout" >
              <span className="footerTitle">WEB LAYOUT</span>

              <a href="#home"><p className="link">Home</p></a>
              <a href="#vision"><p className="link">Our Vision</p></a>
              <a href="#howItWorks"><p className="link">How it works</p></a>
              {/*<a href="#roadmap"><p className="link">Roadmap</p></a>*/}
              <a href="#community"><p className="link">Community</p></a>

            </Col>
            <Col className="socialMedia">
              <p className="footerTitle">SOCIAL MEDIA</p>
              
              

              <a rel="noreferrer" target="_blank" href="https://www.facebook.com/healthnwealth001"><i class="fab fa-facebook-square" aria-hidden="true"></i></a>
              <a rel="noreferrer" target="_blank" href="https://www.reddit.com/user/HealthNWealthCoin/"><p className="link"><i class="fab fa-reddit" aria-hidden="true"></i>
</p></a>
              <a rel="noreferrer" target="_blank" href="https://vm.tiktok.com/ZSeN6BCp1/"><p className="link"><i class="fab fa-tiktok" ></i>
</p></a>
              <a rel="noreferrer" target="_blank" href="https://discord.gg/jNy77kJKqP"><p className="link"><i class="fab fa-discord" ></i>
</p></a>
              <a rel="noreferrer" target="_blank" href="https://t.me/joinchat/Qt9jhg2FEPM0Yjc0"><p className="link"><i class="fab fa-telegram"></i></p></a>

            </Col>
            <Col >
              <span className="footerTitle">CORPORATE</span>

              <a rel="noreferrer" target="_blank" href="/HNW_Whitepaper.pdf"><p className="link">About Us</p></a>
              <a rel="noreferrer" target="_blank" href="/HNW_Whitepaper.pdf"><p className="link">FAQs</p></a>
              <a rel="noreferrer" target="_blank" href="/HNW_Whitepaper.pdf"><p className="link">Whitepaper</p></a>
              {/*<p onClick={handleShow} className="link">Wallet Address</p>*/}
              <a rel="noreferrer" target="_blank" href="mailto:team@hnwcoin.com"><p className="link">Contact Us</p></a>
              <span className="copyrightSentence">HealthNWealth Project 2022</span>

            </Col>
          </Row>
        </div>


      </div>
      </div>
      
  
  );
}

export default App;
