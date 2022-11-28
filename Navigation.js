import React from "react";

export default function Navigation() {
  return (
    <nav>
      <h1>Digital Business Card</h1>
      <div id="outer">
        <div id="middle">
          <div id="inter">
            <img src="https://scontent.fbts9-1.fna.fbcdn.net/v/t1.15752-9/316047296_845745136617349_3881035378648198757_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=ljxqZKN4JN8AX8MYzxZ&_nc_ht=scontent.fbts9-1.fna&oh=03_AdRXxPDPOlhMc3o4U1jDiMXV2VIYn_lkVBWQu5RkxozvFA&oe=63A374CE" alt="ja" height={400}>
            </img>
            <h2>Daniel Sládeček</h2>
            <h4>Frontend Developer</h4>
            <h5>React Developer</h5>
            <div className="buttons">
              <button type="button" name="button">
                <i class="fas fa-envelope"></i><a href="mailto:danielslad@gmail.com">Email</a>
              </button>
              <button type="button" name="button" >
              <a href="https://www.linkedin.com/in/daniel-sladecek-481a1420b/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Read more about Seminole tax hike"><i className="fab fa-linkedin">LinkedIn</i></a>
              </button>
            </div>
            <br></br>
            <div className="sections">
              <section>
                <h3>About</h3>
                <p>Ahojte som mladý junior developer s vášňou    kódiť a neustále na sebe pracovať!</p>
              </section>
              <br></br>
              <section  className="section">
                <h3>Interests</h3>
                <p>
                  Zaujímam sa o React, Javascript, Html, Css a celkovo o webový development. 
                </p>
              </section>
            </div>
            <div>
              <ul className="links">
                <li><a href="https://github.com/Daniel1987Daniel" target="_blank" className="social-icon" aria-label="Read more about Seminole tax hike" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
                    
                <li><a href="https://www.linkedin.com/in/daniel-sladecek-481a1420b" target="_blank" className="social-icon" rel="noopener noreferrer" aria-label="Read more about Seminole tax hike">
                  <i id="linkedIn" className="fab fa-linkedin"></i></a>
                </li>
                  
                <li><a href="http://facebook.com" target="_blank" className="social-icon" rel="noopener noreferrer" aria-label="Read more about Seminole tax hike">
                  <i className="fab fa-facebook-square"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
};