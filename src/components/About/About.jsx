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
  ExperienceDescription,
} from "./styles";
const publicPath = process.env.PUBLIC_URL;

const About = (props) => {
  return (
    <StyledAbout>
      <Title>{props.lang === "english" ? "ABOUT ME" : "SOBRE MI"}</Title>

      <Picture src={publicPath + "/myPic.png"} alt="about me" />
      <Description>
        <p className="picLegend">
          {props.lang === "english"
            ? "Hi there, I'm Antoine!"
            : "¡Hola! Soy Antoine."}
        </p>
        {props.lang === "english" ? (
          <p>
            I'm a French Software Engineer with a background in Geographic
            Information System (GIS). I had my first professional experience as
            a Web Developer in 2016 and since then I could never forget the
            thrill and the satisfaction of programming and sharing code with the
            community.
          </p>
        ) : (
          <p>
            Soy Antoine, un Software Engineer francés, con un background en
            Sistemas de Información Geográfica (SIG). He tenido mi primera
            experiencia como Desarrollador Web en 2016 y desde entonces nunca he
            podido olvidar el encanto y la satisfacción de desarrollar y de
            compartir código con la comunidad.
          </p>
        )}
        {/* {props.lang === "english" ? (
          <p>
            I have been living in the beautiful city of Barcelona for the last
            four years, and I am currently looking for a new opportunity to grow
            as a Web Developer.
          </p>
        ) : (
          <p>
            Vivo en la hermosa ciudad de Barcelona desde hace cuatro años, y
            estoy buscando una nueva oportunidad para crecer como desarrollador
            web.
          </p>
        )} */}
      </Description>

      <Title>{props.lang === "english" ? "SKILLS" : "APTITUDES"}</Title>

      <SubTitle>1 - 2 {props.lang === "english" ? "years" : "años"}</SubTitle>
      <StyledSkills>
        <Skill>
          <div>
            <img
              src={publicPath + "/skills/Optimized-jsLogo.png"}
              alt="JavaScript"
              height="100px"
            />
          </div>
          <span>JavaScript</span>
        </Skill>
        <Skill>
          <div>
            <img
              src={publicPath + "/skills/Optimized-html5.png"}
              alt="HTML5"
              height="100px"
            />
          </div>
          <span>HTML5</span>
        </Skill>
        <Skill>
          <div>
            <img
              src={publicPath + "/skills/Optimized-css3.png"}
              alt="CSS3"
              height="100px"
            />
          </div>
          <span>CSS3</span>
        </Skill>
        <Skill>
          <div>
            <img
              src={publicPath + "/skills/Optimized-git.png"}
              alt="Git"
              height="42px"
            />
          </div>
          <span>Git</span>
        </Skill>
        <Skill>
          <div>
            <img
              src={publicPath + "/skills/Optimized-github.png"}
              alt="GitHub"
              height="66px"
            />
          </div>
          <span>GitHub</span>
        </Skill>
      </StyledSkills>
      <SubTitle>
        {props.lang === "english" ? "6 months - 1 year" : "6 meses - 1 año"}
      </SubTitle>
      <StyledSkills>
        <Skill>
          <div>
            <img
              src={publicPath + "/skills/Optimized-nodeJs.png"}
              alt="NodeJs"
              height="61px"
            />
          </div>
          <span>Node.js</span>
        </Skill>
        <Skill>
          <div>
            <img
              src={publicPath + "/skills/Optimized-express.png"}
              alt="ExpressJs"
              height="34px"
            />
          </div>
          <span>Express.js</span>
        </Skill>
        <Skill>
          <div>
            <img
              src={publicPath + "/skills/Optimized-reactJs.png"}
              alt="ReactJs"
              height="100px"
            />
          </div>
          <span>React.js</span>
        </Skill>
        <Skill>
          <div>
            <img
              src={publicPath + "/skills/Optimized-nextjs.png"}
              alt="NextJs"
              height="60px"
            />
          </div>
          <span>Next.js</span>
        </Skill>
        <Skill>
          <div>
            <img
              src={publicPath + "/skills/Optimized-mongoDb.png"}
              alt="MongoDB"
              height="27px"
            />
          </div>
          <span>MongoDB</span>
        </Skill>
        <Skill>
          <div>
            <img
              src={publicPath + "/skills/Optimized-python.png"}
              alt="Python"
              height="100px"
            />
          </div>
          <span>Python</span>
        </Skill>
      </StyledSkills>
      <SubTitle>
        {"<"} 6 {props.lang === "english" ? "months" : "meses"}
      </SubTitle>
      <StyledSkills>
        <Skill>
          <div>
            <img
              src={publicPath + "/skills/Optimized-aws.png"}
              alt="AWS"
              height="60px"
            />
          </div>
          <span>AWS</span>
        </Skill>
        <Skill>
          <div>
            <img
              src={publicPath + "/skills/Optimized-heroku.png"}
              alt="Heroku"
              height="119px"
            />
          </div>
          <span>Heroku</span>
        </Skill>
        <Skill>
          <div>
            <img
              src={publicPath + "/skills/Optimized-netlify.png"}
              alt="Netlify"
              height="100px"
            />
          </div>
          <span>Netlify</span>
        </Skill>
      </StyledSkills>

      <Title>{props.lang === "english" ? "EXPERIENCES" : "EXPERIENCIAS"}</Title>

      <StyledExperiences>
        <Experience>
          <StructureLogo
            style={{ backgroundColor: "white", borderRadius: "10px" }}
          >
            <img
              src={publicPath + "/experiences/Optimized-rokubun.png"}
              alt="Rokubun logo"
              height="125px"
            />
          </StructureLogo>
          <ExperienceDescription>
            <h2>
              {props.lang === "english"
                ? "Software Engineer"
                : "Software Engineer"}
            </h2>
            <h3>Rokubun</h3>
            <h4>{props.lang === "english" ? "2021 - now" : "2021 - ahora"}</h4>
            <ul>
              <li>
                {props.lang === "english"
                  ? "Build apps with React.js & Next.js."
                  : "Desarrollo de páginas web con Reactjs & Next.js."}
              </li>
            </ul>
          </ExperienceDescription>
        </Experience>

        <Experience>
          <StructureLogo>
            <img
              src={publicPath + "/experiences/Optimized-ironhack.png"}
              alt="Ironhack logo"
              height="125px"
            />
          </StructureLogo>
          <ExperienceDescription>
            <h2>
              {props.lang === "english"
                ? "Web Development Bootcamp Student"
                : "Bootcamp Web Development"}
            </h2>
            <h3>IronHack</h3>
            <h4>2020</h4>
            <ul>
              <li>
                {props.lang === "english"
                  ? "Technologies: Javascript ES6, Node.js, Express.js, React.js (+ Hooks & Redux basics), MongoDB, Mongoose, HTML5 and CSS3."
                  : "Tecnologías: Javascript ES6, Node.js, Express.js, React.js (+ Hooks & Redux básico), MongoDB, Mongoose, HTML5 y CSS3."}
              </li>
              <li>
                {props.lang === "english"
                  ? "Learned how to build web apps from scratch."
                  : "Desarrollo de aplicaciones web desde cero."}
              </li>
              <li>
                {props.lang === "english"
                  ? "Adopted Agile methodology concepts."
                  : "Adopción de la metodología Agile."}
              </li>
              <li>
                {props.lang === "english"
                  ? "Experienced remote learning and working experience due to Covid-19."
                  : "Experiencía de trabajo y de proyectos de forma remota, solo, en parejas o en grupo debido al Covid-19."}
              </li>
              <li>
                {props.lang === "english"
                  ? "Learned best coding practices."
                  : "Profundización y perfeccionamiento de conocimientos en programación."}
              </li>
            </ul>
          </ExperienceDescription>
        </Experience>

        <Experience>
          <StructureLogo>
            <img
              src={publicPath + "/experiences/Optimized-iberia.png"}
              alt="Iberia logo"
              height="63px"
            />
          </StructureLogo>
          <ExperienceDescription>
            <h2>
              {props.lang === "english"
                ? "Passenger Service Agent"
                : "Agente Administrativo"}
            </h2>
            <h3>Iberia</h3>
            <h4>2017 - 2020</h4>
            <ul>
              <li>
                {props.lang === "english"
                  ? "Welcomed and checked passengers from Iberia and Vueling Airlines, and companies handled by Iberia : Emirates, Aer Lingus, Level, etc."
                  : "Atención a los pasajeros de Iberia y Vueling Airlines, y de aerolíneas clientes de Iberia : Emirates, Aer Lingus, Level, etc."}
              </li>
              <li>
                {props.lang === "english"
                  ? "Checked and accepted passengers luggages at check-in counters and boarding gates."
                  : "Facturación de los pasajeros y equipajes así como del embarque y cierre de vuelo."}
              </li>
              <li>
                {props.lang === "english"
                  ? "Checked travel documents according to companies policies and immigration laws."
                  : "Verificación de la documentación de acuerdo a los países de destino."}
              </li>
              <li>
                {props.lang === "english"
                  ? "Maintained thorough knowledge of policies and procedures pertaining to unaccompanied minors, law enforcement officers, dangerous goods and other regulatory requirements."
                  : " Asistencia a los pasajeros en caso de cancelaciones o retrasos de vuelos."}
              </li>
              <li>
                {props.lang === "english"
                  ? "Assisted unaccompanied minors and passengers with special needs."
                  : "Asistencia a los menores no acompañados (UM) y a pasajeros con necesidades especiales"}
              </li>
            </ul>
          </ExperienceDescription>
        </Experience>

        <Experience>
          <StructureLogo>
            <img
              src={publicPath + "/experiences/Optimized-cirad.png"}
              alt="Cirad logo"
              height="66px"
            />
          </StructureLogo>
          <ExperienceDescription>
            <h2>
              {props.lang === "english" ? "Web Developer" : "Desarrollador Web"}
            </h2>
            <h3>CIRAD</h3>
            <h4>2016</h4>
            <ul>
              <li>
                {props.lang === "english"
                  ? "Technologies: Python, Django, Javascript, Git, GitHub, QGIS, HTML5 and CSS3."
                  : "Tecnologías: Python, Django, Javascript, Git, GitHub, QGIS, HTML5 y CSS3."}
              </li>
              <li>
                {props.lang === "english"
                  ? "Contributed to GeoNode development (via GitHub)."
                  : "Contribución al desarrollo de GeoNode via GitHub."}
              </li>
              <li>
                {props.lang === "english"
                  ? "Improved the AWARE web atlas (https://aware.cirad.fr), deployed with GeoNode."
                  : "Evolución del atlas cartográfico web AWARE (https://aware.cirad.fr) basado en GeoNode."}
              </li>
              <li>
                {props.lang === "english"
                  ? "Migrated to GeoNode 2.4 version."
                  : "Migración hacia GeoNode 2.4."}
              </li>
              <li>
                {props.lang === "english"
                  ? "Improved the authorizations and permissions system."
                  : "Mejoras en la concesión de permisos."}
              </li>
              <li>
                {props.lang === "english"
                  ? "Translated a part of the website."
                  : "Traducción del sitio web."}
              </li>
            </ul>
          </ExperienceDescription>
        </Experience>

        <Experience>
          <StructureLogo>
            <img
              src={publicPath + "/experiences/Optimized-sepur.png"}
              alt="Sepur logo"
              height="55px"
            />
          </StructureLogo>
          <ExperienceDescription>
            <h2>{props.lang === "english" ? "GIS Analyst" : "Analista GIS"}</h2>
            <h3>SEPUR</h3>
            <h4>2015</h4>
            <ul>
              <li>
                {props.lang === "english"
                  ? "Technologies: QGIS, PostgreSQL y PostGIS."
                  : "Tecnologías: QGIS, PostgreSQL y PostGIS."}
              </li>
              <li>
                {props.lang === "english"
                  ? "Digitized the waste collection rounds maps."
                  : "Digitalización de los planes de recogida."}
              </li>
              <li>
                {props.lang === "english"
                  ? "Analysed the dangerous spots of these collection rounds."
                  : "Análisis de las zonas peligrosas de estas recogidas."}
              </li>
              <li>
                {props.lang === "english"
                  ? "Updated and managed the database used for this task."
                  : "Gestión de la base de datos relativa a esta misión."}
              </li>
            </ul>
          </ExperienceDescription>
        </Experience>
      </StyledExperiences>
    </StyledAbout>
  );
};

export default About;
