
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { useSelector } from 'react-redux'
function Layout() {
  // const authstatus = useSelector((state) => state.auth.status);
  const authstatus=true;

  return (
    <div>
      {authstatus?<Header/>:""}
      <Outlet/>
      {authstatus?<Footer/>:""}
    </div>
  );
}

export default Layout;