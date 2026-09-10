import "./App.css";
import me from "./assets/me.jpg";
import icon from "./assets/icon.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useState, useRef, useEffect } from "react";
import CursorInk from "./components/cursor.jsx";
// import resumeFile from './assets/'

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const SocialMedia = [
    {
      name: "Github",
      link: "https://github.com/vayuAgnay25?tab=repositories",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/vayu_swaraj/",
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/vayuagnay/",
    },
    {
      name: "gmail",
      link: "mailto:vayuswaraj2212521@gmail.com",
    },
  ];

  const MainRef = useRef(null);
  const trigRef = useRef(null);
  console.log(window.innerWidth);
  // let [TextFile,setTextFile] = useState()

  const [time, setTime] = useState(() => {
    const clock = new Date().toLocaleTimeString().split(" ");
    return clock[0].split(":").slice(0, 2).join(":") + " " + clock[1];
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const clock = new Date().toLocaleTimeString().split(" ");
      setTime(clock[0].split(":").slice(0, 2).join(":") + " " + clock[1]);
    }, 1000);

    return () => clearInterval(intervalId); // cleanup on unmount
  }, []);

  let Name = "Vayu Agnay";
  let colorPallet = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#F333FF",
    "#33FFF5",
    "#F5FF33",
    "#FF33A1",
    "#A133FF",
    "#33FFA1",
    "#FFA133",
  ];

  const links = ["Home", "About", "Skills", "Projects"];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigRef.current,
        start: "40% 100%",
        end: "60% top", // total scroll distance covering all 3 phases
        scrub: true,
      },
    });

    tl.to(MainRef.current, {
      backgroundColor: "#000000",
      color: "#ffffff",
      duration: 1,
    })
      .to(MainRef.current, {
        // hold — no property change, just consumes scroll distance
        duration: 1,
      })
      .to(MainRef.current, {
        backgroundColor: "#ffffff",
        color: "#000000",
        duration: 1,
      });
  });

  return (
    <div className="App" ref={MainRef}>
      <CursorInk />

      <div className="nav">
        <img src={icon} alt="" srcset="" />

        <p className="time">{time}</p>

        <ul id="links">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </ul>

        <a
          id="contact-link"
          onClick={() => {
            window.location.href = "mailto:vayuswaraj2212521@gmail.com";
          }}
          className="contact-button"
        >
          Get in Touch
        </a>
      </div>

      <div className="page page1" id="home">
        <div className="introduction">
          <h1>I'm</h1>
          <div className="word">
            {Name.split("").map((letter, index) => (
              <span
                key={index}
                className="letter"
                onMouseEnter={(e) => {
                  gsap.to(e.target, {
                    scale: 1.5,
                    color: colorPallet[index % colorPallet.length],
                    duration: 0.3,
                  });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.target, {
                    scale: 1,
                    color: "rgb(100,100,100)",
                    duration: 0.3,
                  });
                }}
              >
                {letter}
              </span>
            ))}
          </div>
          <p>
            Hello! I'm <mark>Vayu Agnay</mark>, a passionate{" "}
            <mark>web developer</mark> with a love for creating dynamic and
            interactive web experiences. I specialize in
            <mark> full-stack development</mark>, utilizing modern technologies
            to build responsive and user-friendly websites. My goal is to craft
            digital solutions that not only meet client needs but also provide
            an engaging experience for users.
          </p>

          <div className="buttons">
            <button
              className="GIT"
              onClick={() => {
                window.location.href = "mailto:vayuswaraj2212521@gmail.com";
              }}
            >
              <p>get in touch</p>
            </button>

            <button
              className="download"
              onClick={() => {
                //Download
              }}
            >
              <p>download</p>
            </button>
          </div>
        </div>

        <div class="image-Holder">
          <img src={me} />
          <p>Me.png</p>
        </div>
      </div>

      <div className="page page2 " id="about">
        <div className="about-container">
          <h1>About</h1>
          <p>
            It all started in 2008 when my dad brought home a our first PC. I
            was just a curious kid, spending hours exploring the MS Office
            suite, playing around with Paint, and downloading games for fun. I
            didn't knew the words for it back then, but I was falling in love
            with <mark>softwares</mark> such as paint, office, internet browser
            , AR and Games.
          </p>
          <p>
            since childhood, I was obsessed with games. For a very long time, I
            actually wanted to be an game designer. I loved how a game world
            design looked, or how an envronment could tell 100 stories. That
            love for aesthetics and mechanics never really left; it just shifted
            from game engines to source codes.
          </p>
          <p>
            Later in engineering college , i got amazed by how 2 binary digits
            can create a whole world of possibilities. I was fascinated by the
            idea that with just a few lines of code, I could create something
            that could be used by people all over the world. This fascination
            led me to pursue a career in <mark>web development</mark>, where I
            could combine my love for aesthetics and mechanics to create
            beautiful and functional websites.
          </p>
        </div>
      </div>
      <div className="page" ref={trigRef} id="A2">
        <h1>#HaveABreak</h1>
        <p>
          Sometimes just taking a break can do wonders for your productivity and
          creativity.
        </p>
      </div>
      <div className="page" id="A3">
        <h1>then i bring it back down</h1>
        <h2>and keep it simple</h2>
        <p>
          good solutions do not come from complexity, but from simplicity and
          clarity.
        </p>
      </div>
      <div className="page page3" id="skills"></div>
      <div className="page page4" id="projects"></div>
      <div className="page page5" id="contact">
        <div className="end-container">
          <div className="footer-text">
            <h1>Ready to Start?</h1>
            <p>
              Let's code something incredible together, drop me a line and let's
              get the conversation started
            </p>
          </div>
          <button className="footer-GIT">Get in Touch</button>
          <ul>
            {SocialMedia.map((key) => (
              <li key={key.name}>
                <a href={key.link}>{key.name}</a>
              </li>
            ))}
          </ul>
          <p id="location" >Chandigarh , India</p>
        </div>
      </div>
    </div>
  );
}
