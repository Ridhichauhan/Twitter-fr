import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App.tsx';
import './index.scss';
import { BrowserRouter,  Route, Routes  } from 'react-router-dom';
import Landinglayout from './pages/landinglayout.tsx';
import Tweets from './container/tables/tweets/tweets.tsx';
import Loader from './components/common/loader/loader.tsx';
import TweetCounts from './container/tables/tweetcounts/tweetcounts.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.Fragment>
  <BrowserRouter>
    <React.Suspense fallback={<Loader/>}>
      <Routes> 
          <Route path={`${import.meta.env.BASE_URL}`} element={<App/>}>
        
          <Route path={`${import.meta.env.BASE_URL}tweets/tweets`} element={<Tweets/>} />
          <Route path={`${import.meta.env.BASE_URL}tweetcounts/tweetcounts`} element={<TweetCounts/>} />
          </Route>
          <Route path={`${import.meta.env.BASE_URL}`} element={<Landinglayout />}>
      </Route>
      </Routes>
    </React.Suspense>
  </BrowserRouter>
</React.Fragment>
);
