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
