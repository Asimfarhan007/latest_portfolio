// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { images } from "../assets/images";
// import { DASHBOARD, DATA_KYC, LOG_OUT, PAYMENTS } from "../constants/textConstant";

// const BottomBar = ({setDevToken,setIsLoggedIn}) => {
//   const location = useLocation();
//   const navigate =useNavigate()
//   return (
//     <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t-[1px] border-[#ECECEC] shadow-lg h-16">
//       <div className="flex justify-between items-center p-3">
//         <Link
//           to="/AffiliateDashboard"
//           className="flex flex-col items-center text-[12px]"
//           style={
//             location?.pathname === "/AffiliateDashboard"
//               ? { color: "#4F44E0" }
//               : { color: "black" }
//           }
//         >
//           <img
//             src={
//               location?.pathname === "/AffiliateDashboard"
//                 ? images?.dashboardBlue
//                 : images?.dashboard
//             }
//             className="h-6 w-6"
//             alt="Dashboard"
//           />

//           <span>{DASHBOARD}</span>
//         </Link>

//         <Link
//           to="/Payments"
//           className="flex flex-col items-center text-[12px]"
//           style={
//             location?.pathname === "/Payments"
//               ? { color: "#4F44E0" }
//               : { color: "black" }
//           }
//         >
//           <img
//             src={
//               location?.pathname === "/Payments"
//                 ? images?.paymentsBlue
//                 : images?.payments
//             } // Replace with your own icon for payments
//             className="h-6 w-6"
//             alt="Payments"
//           />
//           <span>{PAYMENTS}</span>
//         </Link>

//         {/* <Link
//           to="/DataKyc"
//           className="flex flex-col items-center text-[12px] text-black"
//           style={
//             location?.pathname === "/DataKyc"
//               ? { color: "#4F44E0" }
//               : { color: "black" }
//           }
//         >
//           <img
//             src={location?.pathname === "/DataKyc"?images?.dataKycBlue:images?.dataKyc} // Replace with your own icon for Data & KYC
//             className="h-6 w-6"
//             alt="Data & KYC"
//           />
//           <span>{DATA_KYC}</span>
//         </Link> */}

//         <a
//           href="#"
//           className="flex flex-col items-center text-[12px] text-black"
//           onClick={()=>{setDevToken(null),window?.localStorage.clear(),setIsLoggedIn(false),navigate('/')}}
//         >
//           <img
//             src={images?.logout} // Replace with your own icon for logout
//             className="h-6 w-6"
//             alt="Log out"
//           />
//           <span>{LOG_OUT}</span>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default BottomBar;
