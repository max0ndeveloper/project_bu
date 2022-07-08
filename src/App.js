import { Routes, Route } from 'react-router-dom'
import MainPage from '../src/components/routes/infopage/mainpage.components';
import Navigation from '../src/components/routes/navigation/navigation.component'
import Home from '../src/components/routes/home/home.component'
import './App.css'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path="interesting-info" element={<MainPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
