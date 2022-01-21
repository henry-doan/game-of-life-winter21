import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initMiddleware } from 'devise-axios';
import AuthProvider from './providers/AuthProvider';
import RewardProvider from './providers/RewardProvider';
import TaskProvider from './providers/TaskProvider';
import HabitProvider from './providers/HabitProvider';
import ActivityProvider from './providers/ActivityProvider';

initMiddleware();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <RewardProvider>
          <TaskProvider>
            <HabitProvider>
              <ActivityProvider>
                <App />
              </ActivityProvider>
            </HabitProvider>
          </TaskProvider>
        </RewardProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();