import React from 'react';

//sort of like a middleware for catching pages that don't match any specified routes
//if the program falls all the way through the routes without matching, it default
//displays this page

export default () => {
  return (
    <div>
      <h1 className="display-4">
        <span className="text-danger">404</span> Page Not Found
      </h1>
      <p className="lead">Sorry that page does not exist.</p>
    </div>
  );
};
