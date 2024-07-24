import Nav from './Nav'

const Layout = ({children}) => {
  return (
    <>
        <Nav></Nav>
        {children}
    </>
    

  )
}
  
export default Layout