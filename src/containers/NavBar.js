import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  const pageLinks = props.pages.map(page => <NavLink key={page.id} to={`/tests/${page.id}`}><p>{page.name}</p></NavLink>)

  return (
    <section className="NavBar">
      <nav>
        <NavLink key={0} className="hoverOnly noUnderline" to="/"><h1>App</h1></NavLink>
        {pageLinks}
      </nav>
      <p>({props.message})</p>
    </section>
  )
}

export default NavBar;