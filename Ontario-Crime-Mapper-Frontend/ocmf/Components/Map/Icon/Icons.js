// import L from 'leaflet';
// import Person_MissingI from "../../../public/Icon_Images/Person_Missing.svg";

import { Icon } from "leaflet";

export default function IconMaker(IconName) {
  return new Icon({
    iconUrl: `/Icon_Images/${IconName}.svg`,
    iconRetinaUrl: `/Icon_Images/${IconName}.svg`,
    iconSize: new L.Point(20, 20),
    className: `${IconName}-icon`,
  });
}

// const Person_Missing = new L.Icon({
//     iconUrl: require("../../../public/Icon_Images/Person_Missing.svg"),
//     iconRetinaUrl: require("../../../public/Icon_Images/Person_Missing.svg"),
//     // iconAnchor: null,
//     // popupAnchor: null,
//     // shadowUrl: null,
//     // shadowSize: null,
//     // shadowAnchor: null,
// iconSize: new L.Point(20, 20),
// className: 'Person-Missing-icon'
// });

// const Person_Missing = new Icon({
//   iconUrl: "/Icon_Images/Person_Missing.svg",
//   iconRetinaUrl: "/Icon_Images/Person_Missing.svg",
//   iconSize: new L.Point(20, 20),
//   className: "Person-Missing-icon",
// });

// const Collision = new Icon({
//   iconUrl: "/Icon_Images/Collision.svg",
//   iconRetinaUrl: "/Icon_Images/Collision.svg",
//   iconSize: new L.Point(20, 20),
//   className: "Collision-icon",
// });

// const Car_Jacking = new Icon({
//   iconUrl: "/Icon_Images/Car_Jacking.svg",
//   iconRetinaUrl: "/Icon_Images/Car_Jacking.svg",
//   iconSize: new L.Point(20, 20),
//   className: "Car_Jacking-icon",
// });

// const Crowd_Control = new Icon({
//   iconUrl: "/Icon_Images/Crowd_Control.svg",
//   iconRetinaUrl: "/Icon_Images/Crowd_Control.svg",
//   iconSize: new L.Point(20, 20),
//   className: "Crowd_Control-icon",
// });

// const Media_Advisory = new Icon({
//   iconUrl: "/Icon_Images/Crowd_Control.svg",
//   iconRetinaUrl: "/Icon_Images/Crowd_Control.svg",
//   iconSize: new L.Point(20, 20),
//   className: "Crowd_Control-icon",
// });

// const Elopee = new Icon({
//   iconUrl: "/Icon_Images/Elopee.svg",
//   iconRetinaUrl: "/Icon_Images/Elopee.svg",
//   iconSize: new L.Point(20, 20),
//   className: "Crowd_Control-icon",
// });

// const Fire = new Icon({
//   iconUrl: "/Icon_Images/Fire.svg",
//   iconRetinaUrl: "/Icon_Images/Fire.svg",
//   iconSize: new L.Point(20, 20),
//   className: "Crowd_Control-icon",
// });

// const Firearm_Discharge = new Icon({
//   iconUrl: "/Icon_Images/Firearm_Discharge.svg",
//   iconRetinaUrl: "/Icon_Images/Firearm_Discharge.svg",
//   iconSize: new L.Point(20, 20),
//   className: "Crowd_Control-icon",
// });

// // const Gas_Leak = new Icon({
// //   iconUrl: '/Icon_Images/Firearm_Discharge.svg',
// //   iconRetinaUrl: '/Icon_Images/Firearm_Discharge.svg',
// //   iconSize: new L.Point(20, 20),
// //   className: "Crowd_Control-icon",
// // });

// const Hazard = new Icon({
//   iconUrl: "/Icon_Images/Hazard.svg",
//   iconRetinaUrl: "/Icon_Images/Hazard.svg",
//   iconSize: new L.Point(20, 20),
//   className: "Crowd_Control-icon",
// });

// export {
//   Person_Missing,
//   Collision,
//   Car_Jacking,
//   Crowd_Control,
//   Media_Advisory,
//   Elopee,
//   Fire,
//   Firearm_Discharge,
//   Hazard,
// };
