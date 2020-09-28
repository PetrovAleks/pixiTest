import App from './app';
import refs from './refs';
import { shapesInterval } from './scripts';
import './styles.css';

const app = new App();
app.start();
shapesInterval(app);
