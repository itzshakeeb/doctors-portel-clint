import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routers/Routers';

function App() {
  return (
    <div className='max-w-[1440px] mx-auto container'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
