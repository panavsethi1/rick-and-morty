import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query siteInfo {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const { title, description } = data.site.siteMetadata

  return (
    <nav className="navbar">
      <div className="navbar__heading">
        <h1>{title}</h1>
      </div>
      <div className="navbar__links">
        <Link className="navbar__links__item" to="/">
          Home
        </Link>
        <Link className="navbar__links__item" to="/characters">
          Characters
        </Link>
      </div>
    </nav>
  )
}
