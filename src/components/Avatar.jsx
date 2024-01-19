import React from 'react';
import './CustomAvatar.css'; // Import the CSS file for styling

const Avatar = ({ firstName }) => {
  // Extract the first letter of the first and last names
  const firstLetter = firstName ? firstName[0].toUpperCase() : '';

  return (
    <div className="custom-avatar">
      <span>{firstLetter}</span>
      {/* <span>{secondLetter}</span> */}
    </div>
  );
};

export default Avatar;
