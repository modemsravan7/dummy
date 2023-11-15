 
import { BrowserRouter,Route, Routes  } from 'react-router-dom';    
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'; 
import { I18nextProvider } from 'react-i18next';
import i18n from './components/i18n';
import { Provider } from 'react-redux'; 
import { store } from './store/store';
import RedirectComponent from './components/RedirectComponent/RedirectComponent ';
import ContentPage from './pages/ContentPage/ContentPage';
import Home from './pages/Home/Home';
import LoginForm from './pages/LoginForm/LoginForm';
import NotFoundPage from './components/404page/NotFoundPage';
 

function App() { 
  
  return (
    
    <BrowserRouter> 
    <ErrorBoundary>
    <I18nextProvider i18n={i18n}>
    <Provider store={store}>
    <Routes>
 
      <Route path="/" element={<RedirectComponent/>}/>
      <Route path="/home" element={<RedirectComponent/>}/>
      <Route path="/ContentPage/:index" element={<ContentPage/>}/>
      <Route path="/english/home" element={<Home/>}/>
      <Route path="/telugu/home" element={<Home/>}/>
      <Route path="/Hindi/home" element={<Home/>}/>
      <Route path="/loginForm" element={<LoginForm/>}/>
      <Route path="/*" element={<NotFoundPage/>}/>
      <Route path="/404" element={<NotFoundPage/>}/>
    </Routes>
    </Provider >
    </I18nextProvider>
    
    </ErrorBoundary>
    
    </BrowserRouter>

   
  )
}

export default App
