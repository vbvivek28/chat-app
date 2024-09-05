import logo from '../assets/logo.png'
// eslint-disable-next-line react/prop-types
const AuthLayouts=({ children })=> {
  return (
    <>
        <header className="flex justify-center items-center py-3 shadow-md bg-white">
            <img 
              src={logo}
              alt='logo'
              width={180}
              height={180}
              /> 
        </header>
    { children }
    </>
  )
}

export default AuthLayouts;