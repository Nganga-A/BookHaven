// import React, { useState, useEffect } from 'react';
// import api from './Api';

// function Readings() {
//     const [readings, setReadings] = useState([]);
  
//     useEffect(() => {
//       // Fetch the list of readings when the component mounts
//       api.get('/readings')
//         .then(response => {
//             console.log('Readings data:', response.data); // Add this line

//           setReadings(response.data);
//         })
//         .catch(error => {
//           console.error('Error fetching readings:', error);
//         });
//     }, []);
  
//     return (
//       <div>
//         <h2>Readings</h2>
//         <ul>
//           {readings.map(reading => (
//             <li key={reading.id}>
//               <strong>Book ID:</strong> {reading.book_id}<br />
//               <strong>Status:</strong> {reading.status}<br />
//               <strong>User ID:</strong> {reading.user_id}<br />
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
  
//   export default Readings;
  