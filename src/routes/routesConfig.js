import Home from '../components/pages/Home';
import Events from '../components/pages/Events';
import Opportunities from '../components/pages/Opportunities';
import AboutUs from '../components/pages/AboutUs';

const routes = [
  { path: '/', component: Home, exact: true },
  { path: '/events', component: Events },
  { path: '/opportunities', component: Opportunities },
  { path: '/about', component: AboutUs },
];

export default routes;
