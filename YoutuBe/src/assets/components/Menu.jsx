import React from "react";
// Componentes
import ItemMenu from "./ItemMenu";
// Icons
import { Button, Col, Row } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { IoIosArrowForward } from "react-icons/io";
import { IoPeopleCircle } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";
import { CgPlayList } from "react-icons/cg";
import { MdVideoLibrary } from "react-icons/md";
import { SlLike } from "react-icons/sl";
import { MdOutlineWatchLater } from "react-icons/md";
import { HiFire } from "react-icons/hi";
import { LuMusic4 } from "react-icons/lu";
import { IoLogoGameControllerA } from "react-icons/io";
import { HiMiniTrophy } from "react-icons/hi2";
import { FaLightbulb } from "react-icons/fa";

export default function Menu() {
  return (
    <Col md={2} className="m-2">
      <Row className="gap-2">
        <ItemMenu icon={<FaHome size={20} color="white" />} title="Principal" />
        <ItemMenu
          icon={<SiYoutubeshorts size={20} color="white" />}
          title="Shorts"
        />
        <ItemMenu
          icon={<MdSubscriptions size={20} color="white" />}
          title="Shorts"
        />
      </Row>
      <Row className="border-top mt-2"></Row>
      <Row className="gap-2 mt-3">
        <Button
          variant="transparent"
          className="text-white m-0 p-0 d-flex gap-2 align-items-center"
        >
          Tú
          <IoIosArrowForward color="white" size={20} />
        </Button>
        <ItemMenu
          icon={<IoPeopleCircle size={20} color="white" />}
          title="Tu canal"
        />
        <ItemMenu
          icon={<FaHistory size={20} color="white" />}
          title="Historial"
        />
        <ItemMenu
          icon={<CgPlayList size={20} color="white" />}
          title="Playlists"
        />
        <ItemMenu
          icon={<MdVideoLibrary size={20} color="white" />}
          title="Tus videos"
        />
        <ItemMenu
          icon={<MdOutlineWatchLater size={20} color="white" />}
          title="Ver mas tarde"
        />
        <ItemMenu
          icon={<SlLike size={20} color="white" />}
          title="Videos que te gustan"
        />
        <Row className="border-top mt-2"></Row>
        <div className="text-white m-0 p-0 d-flex gap-2 align-items-center">
          Suscripciones
        </div>
        <Row className="border-top mt-2"></Row>
        <div className="text-white m-0 p-0 d-flex gap-2 align-items-center">
          Explorar
        </div>
        <ItemMenu
          icon={<HiFire size={20} color="white" />}
          title="Tendencias"
        />
        <ItemMenu icon={<LuMusic4 size={20} color="white" />} title="Música" />
        <ItemMenu
          icon={<IoLogoGameControllerA size={24} color="white" />}
          title="Videojuegos"
        />
        <ItemMenu
          icon={<HiMiniTrophy size={20} color="white" />}
          title="Deportes"
        />
        <ItemMenu
          icon={<FaLightbulb size={20} color="white" />}
          title="Aprendizaje"
        />
      </Row>
    </Col>
  );
}
