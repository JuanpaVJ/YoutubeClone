// Functionalities
import { useState } from "react";
// Icons
import { TbArrowsRandom } from "react-icons/tb";
// Components
import { Button } from "react-bootstrap";
import "../../../src/styles.css";

export default function ItemMenu({
  icon = <TbArrowsRandom size={20} color="white" />,
  title = "Title",
}) {
  return (
    <Button className="hover-element w-50 px-2 ps-3">
      {icon}
      <div className="text-white fs-6 ellipsis-text">{title}</div>
    </Button>
  );
}
