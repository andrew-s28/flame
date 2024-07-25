import { NavLink, Link, Route, Routes } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux';
import { State } from '../../store/reducers';

// Typescript
import { Route as SettingsRoute } from '../../interfaces';

// CSS
import classes from './Settings.module.css';

// Components
import { Themer } from './Themer/Themer';
import { WeatherSettings } from './WeatherSettings/WeatherSettings';
import { UISettings } from './UISettings/UISettings';
import { AppDetails } from './AppDetails/AppDetails';
import { StyleSettings } from './StyleSettings/StyleSettings';
import { GeneralSettings } from './GeneralSettings/GeneralSettings';
import { DockerSettings } from './DockerSettings/DockerSettings';

// UI
import { Container, Headline } from '../UI';

// Data
import clientRoutes from './settings.json';

export const Settings = (): JSX.Element => {
  const routes = clientRoutes.routes;

  const { isAuthenticated } = useSelector((state: State) => state.auth);
  console.log(isAuthenticated);

  const tabs = isAuthenticated ? routes : routes.filter((r) => !r.authRequired);

  return (
    <Container>
      <Headline title="Settings" subtitle={<Link to="/">Go back</Link>} />
      <div className={classes.Settings}>
        {/* NAVIGATION MENU */}
        <nav className={classes.SettingsNav}>
          {tabs.map(({ name, dest }: SettingsRoute, idx) => (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `${classes.SettingsNavLink} ${classes.SettingsNavLinkActive}`
                  : classes.SettingsNavLink
              }
              to={dest}
              key={idx}
            >
              {name}
            </NavLink>
          ))}
        </nav>

        {/* ROUTES */}
        <section className={classes.SettingsContent}>
          <Routes>
            <Route path="/theme" element={<Themer />} />
            <Route
              path="/weather" element={<WeatherSettings />}
            />
            <Route
              path="/general" element={<GeneralSettings />}
            />
            <Route
              path="/interface" element={<UISettings />}
            />
            <Route
              path="/docker" element={<DockerSettings />}
            />
            <Route
              path="/css" element={<StyleSettings />}
            />
            <Route
              path="/app" element={<AppDetails />} 
            />
          </Routes>
        </section>
      </div>
    </Container>
  );
};
