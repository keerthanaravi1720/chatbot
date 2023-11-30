// import React, { useState } from 'react';
// import { FaHome, FaSearch, FaBell, FaUser } from 'react-icons/fa';
// import '../css/AppFooter.css';

// function Header() {
//   const [selectedIcon, setSelectedIcon] = useState(null);

//   const handleIconClick = (icon) => {
//     setSelectedIcon(icon);
//   };

//   const isIconSelected = (icon) => {
//     return selectedIcon === icon;
//   };

//   return (
//     <div className="menu-item">
//       <div
//         className={`header-icon ${isIconSelected('home') ? 'light-on' : ''}`}
//         onClick={() => handleIconClick('home')}
//       >
//         {isIconSelected('home') && (
//           <div className="line-above"></div>
//         )}
//         {isIconSelected('home') && (
//           <div className="light-ray"></div>
//         )}
//         <div className="tubelight">
//           <FaHome />
//         </div>
//       </div>
//       <div
//         className={`header-icon ${isIconSelected('search') ? 'light-on' : ''}`}
//         onClick={() => handleIconClick('search')}
//       >
//         {isIconSelected('search') && <div className="line-above"></div>}
//         <FaSearch />
//       </div>
//       <div
//         className={`header-icon ${isIconSelected('bell') ? 'light-on' : ''}`}
//         onClick={() => handleIconClick('bell')}
//       >
//         {isIconSelected('bell') && <div className="line-above"></div>}
//         <FaBell />
//       </div>
//       <div
//         className={`header-icon ${isIconSelected('user') ? 'light-on' : ''}`}
//         onClick={() => handleIconClick('user')}
//       >
//         {isIconSelected('user') && <div className="line-above"></div>}
//         <FaUser />
//       </div>
//     </div>
//   );
// }

// export default Header;





// import React, { useState } from 'react';
// import { FaHome, FaSearch, FaBell, FaUser } from 'react-icons/fa';
// import '../css/AppFooter.css';

// function Header() {
//   const [selectedIcon, setSelectedIcon] = useState(null);

//   const handleIconClick = (icon) => {
//     setSelectedIcon(icon);
//   };

//   const isIconSelected = (icon) => {
//     return selectedIcon === icon;
//   };

//   return (
//     <div className="menu-item">
//       <div
//         className={`header-icon ${isIconSelected('home') ? 'light-on' : ''}`}
//         onClick={() => handleIconClick('home')}
//         data-icon="home"
//       >
//         <div className="tubelight">
//           <div className={`light-ray ${isIconSelected('home') ? 'ray-on' : ''}`}></div>
//           <FaHome />
//         </div>
//       </div>
//       <div
//         className={`header-icon ${isIconSelected('search') ? 'light-on' : ''}`}
//         onClick={() => handleIconClick('search')}
//         data-icon="search"
//       >
//         <div className="tubelight">
//           <div className={`light-ray ${isIconSelected('search') ? 'ray-on' : ''}`}></div>
//           <FaSearch />
//         </div>
//       </div>
//       <div
//         className={`header-icon ${isIconSelected('bell') ? 'light-on' : ''}`}
//         onClick={() => handleIconClick('bell')}
//         data-icon="bell"
//       >
//         <div className="tubelight">
//           <div className={`light-ray ${isIconSelected('bell') ? 'ray-on' : ''}`}></div>
//           <FaBell />
//         </div>
//       </div>
//       <div
//         className={`header-icon ${isIconSelected('user') ? 'light-on' : ''}`}
//         onClick={() => handleIconClick('user')}
//         data-icon="user"
//       >
//         <div className="tubelight">
//           <div className={`light-ray ${isIconSelected('user') ? 'ray-on' : ''}`}></div>
//           <FaUser />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;



import React, { useState } from 'react';
import { FaHome, FaSearch, FaBell, FaUser } from 'react-icons/fa';
import '../css/AppFooter.css';

function Header() {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
  };

  const isIconSelected = (icon) => {
    return selectedIcon === icon;
  };

  return (
    <div className="menu-item">
      <div
        className={`header-icon ${isIconSelected('home') ? 'light-on' : ''}`}
        onClick={() => handleIconClick('home')}
        data-icon="home"
      >
        <div className="tubelight">
          <div className={`light-ray ${isIconSelected('home') ? 'ray-on' : ''}`}></div>
          <FaHome />
        </div>
      </div>
      <div
        className={`header-icon ${isIconSelected('search') ? 'light-on' : ''}`}
        onClick={() => handleIconClick('search')}
        data-icon="search"
      >
        <div className="tubelight">
          <div className={`light-ray ${isIconSelected('search') ? 'ray-on' : ''}`}></div>
          <FaSearch />
        </div>
      </div>
      <div
        className={`header-icon ${isIconSelected('bell') ? 'light-on' : ''}`}
        onClick={() => handleIconClick('bell')}
        data-icon="bell"
      >
        <div className="tubelight">
          <div className={`light-ray ${isIconSelected('bell') ? 'ray-on' : ''}`}></div>
          <FaBell />
        </div>
      </div>
      <div
        className={`header-icon ${isIconSelected('user') ? 'light-on' : ''}`}
        onClick={() => handleIconClick('user')}
        data-icon="user"
      >
        <div className="tubelight">
          <div className={`light-ray ${isIconSelected('user') ? 'ray-on' : ''}`}></div>
          <FaUser />
        </div>
      </div>
    </div>
  );
}

export default Header;
