// Functionalities
import { useState } from "react";
// Icons
import { TbArrowsRandom } from "react-icons/tb";
// Components
import { Button } from "react-bootstrap";

export default function ItemMenu({
  icon = <TbArrowsRandom size={20} color="white" />,
  title = "Title",
}) {
  const [hovered, setHovered] = useState(false);
  let hoverStyle = "p-0 m-0 justify-content-start align-items-center d-flex gap-4 my-1"

  return (
    <Button
      // variant="transparent"
      className="p-0 m-0 justify-content-start align-items-center d-flex gap-4 my-1 bg-transparent border-0"
    >
      {icon}
      <div className="text-white fs-6">{title}</div>
    </Button>
  );
}
