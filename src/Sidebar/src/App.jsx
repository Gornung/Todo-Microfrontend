import { render } from 'solid-js/web';

import './index.css';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => (
  <div class="container">
    <Sidebar />
  </div>
);
render(App, document.getElementById('app'));
