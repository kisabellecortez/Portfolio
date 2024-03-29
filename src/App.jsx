{/*importing style sheets*/}
import './App.css'; 
import './home.css';
import './about.css';
import './skills.css';
import './projects.css';
import './contact.css';

{/*importing brand logos for contact card*/}
import GitHub from "./assets/logos/github.png"
import LinkedIn from "./assets/logos/linkedin.png"
import Outlook from "./assets/logos/microsoft.png"
import Gmail from "./assets/logos/google.png"

{/*import logo and resume for CV download*/}
import Headshot from './assets/headshot.png'
import Resume from "./assets/Resume.pdf"
import Download from "./assets/icons/download.png"
import Link from "./assets/icons/project-link.png"

{/*imports brand logos for skills card*/}
import Vaadin from "./assets/logos/vaadin-logo.png"
import PyGame from "./assets/logos/pygame-logo.png"
import AutoCAD from "./assets/logos/autocad-logo.png/"
import COMSOL from "./assets/logos/comsol-logo.png"
import Quartus from "./assets/logos/intelquartusprime-logo.png"

function App() {
  return(

    <div className = "App">
      
      {/*fixed elements*/}
      <body>
        {/*navbar section*/}
        <nav>
          <a className = "nav" href = "#home">Home</a>
          <a className = "nav" href = "#about">About</a>
          <a className = "nav" href = "#skills">Skills</a>
          <a className = "nav" href = "#projects">Projects</a>
          <a className = "nav" href = "#contact">Contact</a>
        </nav>
      
      </body> 

      {/*home section*/}
      <div className = "home">
        <img src={Headshot} alt="headshot"></img>

        <div className="header">
          <h1>Kristina Isbabelle M. Cortez</h1>  
          <p>Toronto-based, full-stack web developer.</p>
        </div>
      </div> 


      {/*about section*/}
      <div className = "about" id = "about">

        <h1 className = "about_h1">Hello, World!</h1>
        <h1 className = "about_text">I am a computer engineering student at the University of Waterloo; currently on my 1B term. I am a Toronto-based full-stack software developer with an interest in game development and circuitry. Having 3+ years of programming experience from high-school and university courses to individual exploration. With my learning journey and 2 work terms, I was able to create meaningful applications: a website for a small business and a company finance organizer.</h1>
        
        {/*avatar*/}
        <div className = "avatar">
          <iframe src='https://my.spline.design/untitled-21afa2f4213b9b038760bf17b407ab7f/' frameborder = '0' width='100%' height='700px'></iframe> 
        </div>

        {/*download button*/}
        <div className = "wrapper_btn">
          <a href = {Resume} download = "Kristina Isabelle M. Cortez - Resume.pdf">
            <div className = "download_btn">
              <div className = "btn"><img src = {Download}></img></div>
              <a>Resume</a>
            </div>
          </a>
        </div>

      </div>

      {/*skills section*/}
      <div id = "skills">

        {/*title for language section*/}
        <h2 className = "skills-title">Languages</h2>

        {/*logo cards*/}
        <div className = "skills-card">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
          <div className = "card-container">
            <h4><b>C++</b></h4>
            <p>Took ECE 150 in my first year at the University of Waterloo. </p>
          </div>
        </div>

        {/* <div className = "skills-card">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />
          <div className = "card-container">
            <h4><b>C#</b></h4>
            <p>Began my self learning journey on September 2022.</p>
          </div>
  </div> */}

        <div className = "skills-card">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
          <div className = "card-container">
            <h4><b>CSS</b></h4>
            <p>Began my self learning journey on September 2022, creating web projects like this.</p>
          </div>
        </div>

        <div className = "skills-card">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
          <div className = "card-container">
            <h4><b>HTML</b></h4>
            <p>Began my self learning journey on September 2022, creating web projects like this.</p>
          </div>
        </div>

        <div className = "skills-card">
          <div className = "card-container">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
            <h4><b>Java</b></h4>
            <p>Took a grade 11 and 12 computer science course where I learned the fundamentals, and have been practicing for 3+ years now.</p>
          </div>
        </div>

        <div className = "skills-card">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
          <div className = "card-container">
            <h4><b>JavaScript</b></h4>
            <p>Began my self learning journey on September 2022, creating web projects like this.</p>
          </div>
        </div>

        <div className = "skills-card">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
          <div className = "card-container">
            <h4><b>Python</b></h4>
            <p>Began my self learning journey on September 2022.</p>
          </div>
        </div>

        <div className = "skills-card">
        <img src="https://devicon-website.vercel.app/api/embeddedc/original.svg"></img>
          <div className = "card-container">
            <h4><b>VHDL</b></h4>
            <p>Took ECE 124 in my first year at the University of Waterloo, where we created projects i.e. traffic light system with crossing.</p>
          </div>
        </div>

        {/*title for frameworks section*/}
        <h2 className = "skills-title">Frameworks</h2>

        {/*logo cards*/}
        <div className = "skills-card">
          <img src = {PyGame}></img>
          <div className = "card-container">
            <h4><b>PyGame</b></h4>
            <p>Began my self learning journey on September 2022.</p>
          </div>
        </div>

        <div className = "skills-card">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          <div className = "card-container">
            <h4><b>React</b></h4>
            <p>Began my self learning journey on September 2022, creating web projects like this.</p>
          </div>
        </div>

        <div className = "skills-card">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" />
          <div className = "card-container">
            <h4><b>Spring</b></h4>
            <p>Began my self learning journey on September 2022, creating web projects like this.</p>
          </div>
        </div>

        {/* <div className = "skills-card">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" />
          <div className = "card-container">
            <h4><b>Unity</b></h4>
            <p>Began my self learning journey on September 2022, creating web projects like this.</p>
          </div>
        </div>

        <div className = "skills-card">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg" />
          <div className = "card-container">
            <h4><b>Unreal Engine</b></h4>
            <p>Began my self learning journey on September 2022, creating web projects like this.</p>
          </div>
        </div> */}

        <div className = "skills-card">
          <img src = {Vaadin}></img>
          <div className = "card-container">
            <h4><b>Vaadin</b></h4>
            <p>Began my self learning journey on September 2022, creating web projects like this.</p>
          </div>
        </div>

        {/*title for tools section*/}
        <h2 className = "skills-title">Tools</h2>

        {/*logo cards*/}
        <div className = "skills-card">
          <img src = {AutoCAD}></img>
          <div className = "card-container">
            <h4><b>AutoCAD</b></h4>
            <p>Took ECE 192 in my first year at the University of Waterloo, and designed a waterproof container for a water contamination detector. </p>
          </div>
        </div>

        <div className = "skills-card">
         <img src = {COMSOL}></img>
          <div className = "card-container">
            <h4><b>COMSOL</b></h4>
            <p>Took ECE in my first year at the University of Waterloo, conducting experiments of electrical fields.</p>
          </div>
        </div>

        <div className = "skills-card">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
          <div className = "card-container">
            <h4><b>Git</b></h4>
            <p>Began using on September 2022 to manage group projects in ECE 124 and ECE 192.</p>
          </div>
        </div>

        <div className = "skills-card">
          <img src = {Quartus}></img>
          <div className = "card-container">
            <h4><b>Intel Quartus Prime</b></h4>
            <p>Took ECE 124 in my first year at the University of Waterloo, creating programs using embedded systems.</p>
          </div>
        </div>

        <div className = "skills-card">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />
          <div className = "card-container">
            <h4><b>Linux</b></h4>
            <p>Began using this system during my first co-op term at NRT Technologies, using it to naviagte throught their financial systems. </p>
          </div>
        </div>

        <div className = "skills-card">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" />
          <div className = "card-container">
            <h4><b>OpenCV</b></h4>
            <p>In the 2023 Toyota Innovation Challenge, I used OpenCV to program a webcam into detecting proper sticker placement on 3D objects.</p>
          </div>
        </div>

      </div>

      {/*projects section*/}
      <div className = "projects" id = "projects">
        <h2>some of my recent</h2>
        <h1>PROJECTS</h1>

        {/*projects card*/}

        <div className = "project-container">
          <div className = "project-card">
            <div className = "front">
              <h1>Financial Statement Merger</h1>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
            </div>
            <div className = "back">
              <h2>2023</h2>
              <p>A Python application accessed through the computers terminals which updates debits and credits with their bank customers. This was done as a project during my co-op at NRT Technologies and is now implemented in their software.</p>
            </div>
          </div>
        </div>

        <div className = "project-container">
          <div className = "project-card">
            <div className = "front">
              <h1>Sky Diary </h1>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            </div>
            <div className = "back">
              <a href = "https://sky-diary.netlify.app/"><img src = {Link}></img></a>
              <a href = "https://github.com/kisabellecortez/Nirvana-Collections"><img src = {GitHub}></img></a>
              <h2>2023</h2>
              <p>An online diary application that uses CRUD methods to store entries, and post/edit daily entries. Users are able to store and create entries using Firebase.</p>
            </div>
          </div>
        </div>

        <div className = "project-container">
          <div className = "project-card">
            <div className = "front">
              <h1>Snake</h1>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
            </div>
            <div className = "back">
              <a href = "https://github.com/kisabellecortez/snake"><img src = {GitHub}></img></a>
              <h2>2023</h2>
              <p>A recreation of the classic game 'Snake' using Java.</p>
            </div>
          </div>
        </div>

      </div>
      

      {/*contact section*/}
      <div className = "wrapper" id = "contact">

        {/*contact card*/}
        <div className = "button">
          <a href = "https://github.com/kisabellecortez">
          <div className = "icon"><img src = {GitHub}></img></div>
          <span>GitHub</span>
          </a>
        </div>

        <div className = "button">
          <a href = "https://www.linkedin.com/in/kristina-isabelle-cortez-540765215/">
          <div className = "icon"><img src = {LinkedIn}></img></div>
          <span>LinkedIn</span>
          </a>
        </div>

        <div className = "button">
          <a href = "mailto: kimcorte@uwaterloo.ca">
          <div className = "icon"><img src = {Outlook}></img></div>
          <span>Outlook</span>
          </a>
        </div>

        <div className = "button">
          <a href = "mailto: kisabellecortez@gmail.com">
          <div className = "icon"><img src = {Gmail}></img></div>
          <span>Gmail</span>
          </a>
        </div>

      </div>


    </div>

  )

  }

export default App
