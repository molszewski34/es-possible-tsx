import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header/Header"
import "../index.css"
import Footer from "./Footer"

interface LayoutProps {
  children?: React.ReactNode
  isHomePage?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: {},
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <div className="" data-is-root-path={isHomePage}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
