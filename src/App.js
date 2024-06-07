import React from 'react';
import styles from './App.module.css';
import Sidebar from './components/common/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './routes/routesConfig';

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Sidebar />
        <main className={styles.content}>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.component />}
                exact={route.exact}
              />
            ))}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
