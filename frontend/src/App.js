import React from 'react';
import Main from './views/Main';
import RESTaurant from './views/RESTaurant';
import { useUserState } from './context/UserContext';

function App() {
  const user = useUserState();

  return (
    <>
      {
        user !== null && user !== undefined ?
          <RESTaurant />
          :
          <Main />
      }
    </>
  );
}

export default App;




// import React from 'react';
// import RESTaurant from "./views/RESTaurant"
// import Main from "./views/Main.jsx";


// function App() {
//   const cookie = document.cookie;
//   //key value ;4
//   // const tuples = cookie === "" ?: cookies.split(',');
//   const tuples = cookie === "" ? [] : cookie.split(',');

//   const json = {};
//   for (let i = 0; i < tuples.length; ++i) {
//     const [key, value] = tuples[i].split('=');
//     json[key] = value;
//   }
//   console.log(json);

//   // const [isAuth, setIsAuth] = React.useState(document.cookie === 'true');

//   const [isAuth, setIsAuth] = React.useState(json.isAuth === 'true');


//   // console.log('Cookie' = + document.cookie + 'nom nom nom');
//   return (
//     <>
//       {
//         isAuth ?
//           <RESTaurant />
//           : < Main
//             authCallback={
//               (success) => {
//                 document.cookie = "isAuth=" + success;
//                 setIsAuth(success);
//               }}
//           />
//       }
//     </>
//   );
// }

// export default App;

