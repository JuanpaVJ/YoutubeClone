import React from "react";
import "../../../src/styles.css";
// Componentes
import ItemMenu from "./ItemMenu";
// Icons
import { Button, Col, Row, Offcanvas } from "react-bootstrap";
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
import { SiYoutubegaming } from "react-icons/si";
import { HiMiniTrophy } from "react-icons/hi2";
import { FaLightbulb } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { IoSettings } from "react-icons/io5";
import { FaRegFlag } from "react-icons/fa";
import { IoHelp } from "react-icons/io5";
import { LiaCommentSolid } from "react-icons/lia";

export default function Menu() {
  return (
    <Offcanvas responsive="lg">
      <Col
        md={2}
        className="overflow-auto m-0 ps-4"
        style={{height: "100vh", maxHeight: "750px", scrollbarWidth: "none" }}
      >
        <Row className="gap-2">
          <ItemMenu
            icon={<FaHome size={20} color="white" />}
            title="Principal"
          />
          <ItemMenu
            icon={<SiYoutubeshorts size={20} color="white" />}
            title="Shorts"
          />
          <ItemMenu
            icon={<MdSubscriptions size={20} color="white" />}
            title="Shorts"
          />
        </Row>
        <Row className="border-top mt-2 w-75"></Row>
        <Row className="gap-2 mt-3">
          <Button variant="transparent" className="hover-element-text w-75">
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
            icon={<CgPlayList size={24} color="white" />}
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
          <Row className="border-top mt-2 w-75"></Row>
          <div className="text-white m-0 p-0 d-flex gap-2 align-items-center">
            Suscripciones
          </div>
          <Row className="border-top mt-2 w-75"></Row>
          <div className="text-white m-0 p-0 d-flex gap-2 align-items-center">
            Explorar
          </div>
          <ItemMenu
            icon={<HiFire size={20} color="white" />}
            title="Tendencias"
          />
          <ItemMenu
            icon={<LuMusic4 size={20} color="white" />}
            title="Música"
          />
          <ItemMenu
            icon={<SiYoutubegaming size={20} color="white" />}
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
          <Row className="border-top mt-2 w-75"></Row>
          <div className="text-white m-0 p-0 d-flex gap-2 align-items-center">
            Más de YouTube
          </div>
          <ItemMenu
            icon={<FaYoutube color="red" size={23} />}
            title="YouTube Premium"
          />
          <ItemMenu
            icon={<SiYoutubestudio color="red" size={23} />}
            title="YouTube Studio"
          />
          <ItemMenu
            icon={<SiYoutubemusic color="red" size={23} />}
            title="YouTube Music"
          />
          <ItemMenu
            icon={<SiYoutubekids color="red" size={23} />}
            title="YouTube Kids"
          />
          <Row className="border-top mt-2 w-75"></Row>
          <ItemMenu
            icon={<IoSettings color="white" size={20} />}
            title="Configuración"
          />
          <ItemMenu
            icon={<FaRegFlag color="white" size={20} />}
            title="Historial de denuncias"
          />
          <ItemMenu icon={<IoHelp color="white" size={20} />} title="Ayuda" />
          <ItemMenu
            icon={<LiaCommentSolid color="white" size={20} />}
            title="Enviar comentarios"
          />
        </Row>
      </Col>
    </Offcanvas>
  );
}
