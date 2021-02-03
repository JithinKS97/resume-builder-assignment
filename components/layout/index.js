import Navbar from './Navbar'

const Layout = (props) => {
  return <>
    <style>{style}</style>
    <div className="app-container">
        <Navbar/>
        {props.children}
    </div>
  </>;
};

const style = `
  .app-container {
    width:50vw;
    margin:auto;
    margin-top:20px;
  }
`

export default Layout