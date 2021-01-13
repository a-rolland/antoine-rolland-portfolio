import { 
  StyledAbout,
  Title,
  SubTitle,
  Picture,
  Description,
  StyledSkills,
  Skill,
  StyledExperiences,
  Experience,
  StructureLogo,
  ExperienceDescription
} from './styles'
const publicPath = process.env.PUBLIC_URL

const About = props => {

  return (
    <StyledAbout>

      <Title>
        { props.lang === "english" ? "ABOUT ME" : "SOBRE MI" }
      </Title>

      <Picture src={publicPath + "/my_pic2.jpg"} alt="about me" />
      <Description>
        <p style={{"textAlign": "center"}}>
          { props.lang === "english" ? "Hi there, I'm Antoine!" : "¡Hola! Soy Antoine." }
        </p>
        {
          props.lang === "english"
            ?
              <p>
                  I'm a French <em>Full Stack Web Developer</em> Junior with a background in Geographic Information System (GIS). 
                  I had my first professional experience as a Web Developer in 2016 and since then I could never forget 
                  the thrill and the satisfaction of programming and sharing code with the community.
              </p>
            :
              <p>
                  Soy Antoine, un <em>Desarrollador Web Full Stack</em> francés, con un background en Sistemas de Información Geográfica (SIG). 
                  He tenido mi primera experiencia como Desarrollador Web en 2016 desde entonces nunca he podido olvidar 
                  el encanto y la satisfacción de desarrollar y de compartir código con la comunidad.
              </p>
        }
        {
          props.lang === "english"
            ?
              <p>
                  I have been living in the beautiful city of Barcelona for the last four years, and I am currently
                  looking for a new opportunity to grow as a Web Developer.
              </p>
            :
              <p>
                  Vivo en la hermosa ciudad de Barcelona desde hace cuatro años, y estoy buscando una nueva oportunidad 
                  para crecer como desarrollador web.
              </p>
        }
      </Description>

      <Title>
        { props.lang === "english" ? "SKILLS" : "APTITUDES" }
      </Title>

      <SubTitle>
        1 - 2 { props.lang === "english" ? "years" : "años" }
      </SubTitle>
      <StyledSkills>
        <Skill>
          <div>
            <img src={publicPath + "/skills/jsLogo.png"} alt="JavaScript"/>
          </div>
          <span>JavaScript</span>
        </Skill>
        <Skill>
          <div>
            <img src={publicPath + "/skills/html5.png"} alt="HTML5"/>
          </div>
          <span>HTML5</span>
        </Skill>
        <Skill>
          <div>
            <img src={publicPath + "/skills/css3.png"} alt="CSS3"/>
          </div>
          <span>CSS3</span>
        </Skill>
        <Skill>
          <div>
            <img src={publicPath + "/skills/git.png"} alt="Git"/>
          </div>
          <span>Git</span>
        </Skill>
        <Skill>
          <div>
            <img src={publicPath + "/skills/github.png"} alt="GitHub"/>
          </div>
          <span>GitHub</span>
        </Skill>
      </StyledSkills>
      <SubTitle>
        { props.lang === "english" ? "6 months - 1 year" : "6 meses - 1 año" }
      </SubTitle>
      <StyledSkills>
        <Skill>
          <div>
            <img src={publicPath + "/skills/nodeJs.png"} alt="NodeJs"/>
          </div>
          <span>Node.js</span>
        </Skill>
        <Skill>
          <div>
            <img src={publicPath + "/skills/express.png"} alt="ExpressJs"/>
          </div>
          <span>Express.js</span>
        </Skill>
        <Skill>
          <div>
            <img src={publicPath + "/skills/reactJs.png"} alt="ReactJs"/>
          </div>
          <span>React.js</span>
        </Skill>
        <Skill>
          <div>
            <img src={publicPath + "/skills/mongoDb.png"} alt="MongoDB"/>
          </div>
          <span>MongoDB</span>
        </Skill>
        <Skill>
          <div>
            <img src={publicPath + "/skills/python.png"} alt="Python"/>
          </div>
          <span>Python</span>
        </Skill>
      </StyledSkills>
      <SubTitle>
        {"<"} 6 { props.lang === "english" ? "months" : "meses" }
      </SubTitle>
      <StyledSkills>
        <Skill>
          <div>
            <img src={publicPath + "/skills/aws.png"} alt="AWS"/>
          </div>
          <span>AWS</span>
        </Skill>
        <Skill>
          <div>
            <img src={publicPath + "/skills/heroku.png"} alt="Heroku"/>
          </div>
          <span>Heroku</span>
        </Skill>
      </StyledSkills>

      <Title>
        { props.lang === "english" ? "EXPERIENCES" : "EXPERIENCIAS" }
      </Title>

      <StyledExperiences>
        <Experience>
          <StructureLogo>
            <img src={publicPath + "/experiences/ironhack.png"} alt="Ironhack logo"/>
          </StructureLogo>
          <ExperienceDescription>
            <h2>
              { props.lang === "english"
                ? "Web Development Bootcamp Student"
                : "Bootcamp Web Development"
              }
            </h2>
            <h3>
              IronHack
            </h3>
            <h4>2020</h4>
            <ul>
              <li>
                Technologies: Javascript ES6, Node.js, Express.js, React.js (+ Hooks & Redux basics), MongoDB, Mongoose, HTML5 and CSS3.
              </li>
              <li>
                Learned how to build web apps from scratch.
              </li>
              <li>
                Adopted Agile methodology concepts.
              </li>
              <li>
                Experienced remote learning and working experience due to Covid-19.
              </li>
              <li>
                Learned best coding practices.
              </li>
            </ul>
          </ExperienceDescription>
        </Experience>

        <Experience>
          <StructureLogo>
            <img src={publicPath + "/experiences/iberia.png"} alt="Iberia logo"/>
          </StructureLogo>
          <ExperienceDescription>
            <h2>
              { props.lang === "english"
                ? "Passenger Service Agent"
                : "Agente Administrativo"
              }
            </h2>
            <h3>
              Iberia
            </h3>
            <h4>2017 - 2020</h4>
            <ul>
              <li>
                Welcomed and checked passengers from Iberia and Vueling Airlines, and companies handled by Iberia : Emirates, Aer Lingus, Level, etc.
              </li>
              <li>
                Checked and accepted passengers luggages at check-in counters and boarding gates.
              </li>
              <li>
                Checked travel documents according to companies policies and immigration laws.
              </li>
              <li>
                Maintained thorough knowledge of policies and procedures pertaining to unaccompanied minors, law enforcement officers, dangerous goods and other regulatory requirements.
              </li>
              <li>
                Assisted unaccompanied minors and passengers with special needs.
              </li>
            </ul>
          </ExperienceDescription>
        </Experience>

        <Experience>
          <StructureLogo>
            <img src={publicPath + "/experiences/cirad.png"} alt="Cirad logo"/>
          </StructureLogo>
          <ExperienceDescription>
            <h2>
              { props.lang === "english"
                ? "Web Developer"
                : "Desarrollador Web"
              }
            </h2>
            <h3>
              CIRAD
            </h3>
            <h4>2016</h4>
            <ul>
              <li>
                Technologies: Python, Django, Javascript, Git, GitHub, QGIS, HTML5 and CSS3. 
              </li>
              <li>
                Contributed to GeoNode development (via GitHub).
              </li>
              <li>
                Improved the AWARE web atlas (https://aware.cirad.fr), deployed with GeoNode.
              </li>
              <li>
                Migrated to GeoNode 2.4 version.
              </li>
              <li>
                Improved the authorizations and permissions system.
              </li>
              <li>
                Translated a part of the website.
              </li>
            </ul>
          </ExperienceDescription>
        </Experience>

        <Experience>
          <StructureLogo>
            <img src={publicPath + "/experiences/sepur.png"} alt="Sepur logo"/>
          </StructureLogo>
          <ExperienceDescription>
            <h2>
              { props.lang === "english"
                ? "GIS Analyst"
                : "Analista GIS"
              }
            </h2>
            <h3>
              SEPUR
            </h3>
            <h4>2015</h4>
            <ul>
              <li>
                Technologies: QGIS, PostgreSQL, PostGIS.
              </li>
              <li>
                Digitized the waste collection rounds maps.
              </li>
              <li>
                Analysed the dangerous spots of these collection rounds.
              </li>
              <li>
                Updated and managed the database used for this task.
              </li>
            </ul>
          </ExperienceDescription>
        </Experience>
        
      </StyledExperiences>
    </StyledAbout>
  );
}

export default About;