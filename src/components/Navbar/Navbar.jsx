import { Link } from 'react-router-dom'
import { StyledNavbar, Logo, LinksList, StyledSpan } from './styles'
const publicPath = process.env.PUBLIC_URL

const Navbar = () => {
  return (
    <StyledNavbar>
      <Link to="/">
          <Logo src={publicPath + "/logo__white.png"} />
      </Link>
      <LinksList>
        <Link to="/about">
          <StyledSpan>
            ABOUT
          </StyledSpan>
        </Link>
        <StyledSpan>
          |
        </StyledSpan>
        <Link to="/works">
          <StyledSpan>
            PROJECTS
          </StyledSpan>
        </Link>
      </LinksList>
    </StyledNavbar>
  );
}

export default Navbar;
