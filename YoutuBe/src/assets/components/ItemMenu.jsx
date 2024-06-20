// Functionalities
import React from "react";
// Icons
import { TbArrowsRandom } from "react-icons/tb";

export default function ItemMenu({
  icon = <TbArrowsRandom size={25} color="white" />,
  title = "Title",
}) {
  return (
    <div className="justify-content-center align-items-center d-flex">
      {icon}
      {title}
    </div>
  );
}
