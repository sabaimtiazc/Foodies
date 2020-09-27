import React from "react";
import { ReactComponent as Icon } from "../icons/icon-restaurant.svg";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const backgroundURL =
  // "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80";
  "https://images.unsplash.com/photo-1560187839-af980ee37cec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";

export default function Main(props) {
  const [showSignUp, setShowSignUp] = React.useState(false);
  const [showSignIn, setShowSignIn] = React.useState(false);

  return (
    <div className="h-screen md:flex">
      {/* Background image */}
      <div
        style={{
          backgroundImage: `url(${backgroundURL})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          zIndex: -1,
        }}
        className="absolute md:static left-0 top-0 w-full md:w-1/2 h-full"
      >
        {/* 50% transparent veil */}
        <div
          style={{
            zIndex: -1,
          }}
          className="visible md:hidden bg-black bg-opacity-50 h-full"
        ></div>
      </div>
      <div className="relative flex flex-col justify-between md:justify-center md:space-y-10 md:w-1/2 h-full md:bg-black md:bg-opacity-50">
        {/* This is the header section */}
        <div className="pt-8 mx-auto my-auto md:my-0 md:flex-none">
          <Icon className="h-20 w-20 text-orange-500 bg-white rounded-lg p-1 fill-current mx-auto" />
          <span className="block mt-2 text-2xl text-center text-white leading-none font-semibold">
            Welcome all
            <br />
            foodies!
          </span>
        </div>

        {/* This is the buttons */}
        <div className="flex flex-col w-full items-center space-y-3 px-5 pb-10 max-w-sm mx-auto md:flex-none">
          <button
            className="px-3 py-2 w-full rounded-full bg-orange-500 text-white"
            onClick={() => {
              setShowSignUp(true);
            }}
          >
            Sign Up
          </button>
          <button
            className="px-3 py-2 w-full rounded-full bg-white text-orange-500"
            onClick={() => {
              setShowSignIn(true);
            }}
          >
            Sign In
          </button>
        </div>

        {showSignUp && (
          <SignUp
            onDismiss={() => setShowSignUp(false)}
            onSignUpResult={(success) => {
              if (success) {
                setShowSignUp(false);
                setShowSignIn(true);
              }
            }}
          />
        )}

        {showSignIn && <SignIn onDismissed={() => setShowSignIn(false)} />}
      </div>
    </div>
  );
}

// export default function Main(props) {
//   const [showSignUp, setShowSignUp] = React.useState(false);
//   const [showSignIn, setShowSignIn] = React.useState(false);
//   const { authCallback } = props;
//   const [signUpResult, setSignUpResult] = React.useState(false);

//   return (
//     <div className="h-screen md:flex">
//       {/* background image  */}
//       <div
//         style={{
//           backgroundImage: `url(${backgroundURL})`,
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//           zIndex: -1,
//         }}
//         className="absolute md:static left-0  top-0 w-full md:w-1/2 h-full"
//       >
//         {/* 50% transparant veil */}

//         <div
//           style={{
//             zIndex: -1,
//           }}
//           className=" visible md:hidden bg-black bg-opacity-50 h-full"
//         ></div>
//       </div>
//       {/* <div className=" relative flex flex-col justify-between md:justify-center md:space-y-10  h-full md:bg-black md:bg-opacity-50"> */}
//       <div className="relative flex flex-col justify-between md:justify-center md:space-y-10 md:w-1/2 h-full md:bg-black md:bg-opacity-50">
//         {/* this is header icon and title  */}
//         <div className="pt-8 pb-8 mx-auto my-auto md: md:my-0 flex-none">
//           <Icon className="h-12 w-12 text-orange-500 bg-white rounded-lg p-1  fill-current mx-auto" />
//           <span className="block mt-2 text-2xl  text-center text-white leading-none font font-semibold">
//             Welcome all
//             <br /> foodies!
//           </span>
//         </div>

//         {/* this is button  */}
//         <div className="flex flex-col w-full items-center space-y-3 px-5 pb-10  mx-w-sm mx-auto md:flex-none">
//           <button
//             className="px-3 py-2 w-full rounded-full bg-orange-500 text-white"
//             onClick={() => {
//               setShowSignUp(true);
//             }}
//           >
//             Sign Up
//           </button>
//           <button
//             className="px-3 py-2 w-full rounded-full bg-white text-orange-500"
//             onClick={() => {
//               setShowSignIn(true);
//             }}
//           >
//             Sign in
//           </button>
//         </div>
//       </div>
//       {showSignUp && (
//         <SignUp
//           onDismiss={() => setShowSignUp(false)}
//           onSignUpResult={(success) => {
//             if (success) {
//               setShowSignUp(false);
//               setShowSignIn(true);
//             }
//           }}
//         />
//       )}

//       {showSignIn && (
//         <SignIn
//           onDismissed={() => setShowSignIn(false)}
//           authCallback={authCallback}
//         />
//       )}
//     </div>
//   );
// }
