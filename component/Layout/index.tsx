import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
