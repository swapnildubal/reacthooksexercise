import React, { lazy, Suspense } from 'react';
import { Router } from '@reach/router';

const List = lazy(() => import('./pages/List/List'));
const Details = lazy(() => import('./pages/Details/Details'));

function Routes() {
  return (
    <Suspense fallback={<div>Loading Page ...</div>}>
      <Router>
        <List path="/" />
        <Details path="/details" />
      </Router>
    </Suspense>
  );
}

export default Routes;
