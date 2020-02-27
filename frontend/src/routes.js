import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Items from './pages/Items';
import Product from './pages/Product';

export default function Routes() {
  return (
    <Switch>
      <Route path="/items" exact component={Items} />
      <Route path="/items/:id" component={Product} />
    </Switch>
  );
}
