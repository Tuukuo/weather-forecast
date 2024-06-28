import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import React from 'react';

function WeatherForecast() {
  return (
    <div>
      <h1>Weather Forecast</h1>
    </div>
  );
}

export default WeatherForecast;


// const Navbar = () => {
//   const [city, setCity] = useState('');

//   const handleSearch = (e) => {
//     e.preventDefault();
//     console.log('Searching for:', city);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-brand">Rayan</div>
//       <form className="navbar-search" onSubmit={handleSearch}>
//         <input
//           type="text"
//           placeholder="Enter city name"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           className="search-input"
//         />
//         <button type="submit" className="search-button">
//           <i className="fas fa-search search-icon"></i>
//         </button>
//       </form>
//     </nav>
//   );
// };
// export default App;