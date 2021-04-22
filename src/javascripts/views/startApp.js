import domBuilder from './domBuilder';
import navBar from '../components/navBar';
import aboutPage from '../components/showAboutPage';
import showProjects from '../components/showProjectCards';
import getProjects from '../helpers/data/projectsData';

const startApp = () => {
  domBuilder();
  navBar();
  aboutPage();
  showProjects(getProjects);
};

export default startApp;
