
/*
const Header: React.FC = () => {
  return (
    <header className="sticky top-0 px-8 w-full h-16 text-white bg-blue-600 flex items-center justify-between">
      <span></span>
      <div className="h-10 w-10 bg-white square-full flex items-center justify-center text-blue-600">
        <span className="material-icons"></span>
      </div>
    </header>
  );
};

export default Header;
*/

import React from 'react';


const Header: React.FC = () => {
  return (
    <header className="sticky top-0 px-8 w-full h-16 text-white bg-indigo-500 flex items-center justify-between">
      <span className="text-xl font-bold">FashionistaTrade</span>
      <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-indigo-500">
        <span className="material-icons">shopping_cart</span>
      </div>
    </header>
  );
};

export default Header;

