import BackgroundImage from './components/BackgroundImage';
import Header from './components/Header'
import Input from './components/Input'
import Tasks from './components/Tasks'
import Notif from './components/Notification';
import AppWrapper from './components/AppWrapper';
import FiltersList from './components/Filters/FiltersList';


function App() {


  return (
    <>

      <AppWrapper>

        <BackgroundImage />
        <div className="container">
          <Header />
          <Input />
          <Tasks />
          <FiltersList className='md:hidden pt-4 pb-5  mt-4 ' />
          <Notif />
        </div>

      </AppWrapper>

    </>
  )
}

export default App
