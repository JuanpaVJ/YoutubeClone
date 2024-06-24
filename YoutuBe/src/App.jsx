// Functionalities
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// Components
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./assets/components/Menu";
import {
  Button,
  Row,
  Col,
  Container,
  InputGroup,
  Form,
  Nav,
  NavItem,
  NavLink,
  Offcanvas,
} from "react-bootstrap";
// Icons
import { TiSocialYoutube } from "react-icons/ti";
import { CiMenuFries } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { RiVideoAddFill } from "react-icons/ri";
import { MdOutlineNotificationsActive } from "react-icons/md";

function App() {
  const navigate = useNavigate();

  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "Ñ",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const [profLetter, setProfLetter] = useState("");

  useEffect(() => {
    const randomLetters = () => {
      let randomIndex = Math.floor(Math.random() * letters.length);
      setProfLetter(letters[randomIndex]);
    };
    randomLetters();
  }, []);

  return (
    <>
      <Row className="m-0 d-flex align-items-center">
        <Col className="mt-2 d-flex">
          <Button variant="transparent">
            <CiMenuFries size={25} color="white" />
          </Button>
          <div className="d-flex align-items-center">
            <TiSocialYoutube size={30} color="red" />
            <div className="text-white fs-5 d-none d-sm-block">Youtube</div>
          </div>
        </Col>
        <Col className="d-none d-sm-block text-center mt-2">
          <Form>
            <InputGroup className="mb-3">
              <InputGroup.Text className="p-0">
                <Button variant="transparent">
                  <FaSearch color="gray" />
                </Button>
              </InputGroup.Text>
              <Form.Control placeholder="Search" />
            </InputGroup>
          </Form>
        </Col>
        <Col className="d-flex justify-content-end">
          <Button variant="transparent">
            <RiVideoAddFill size={25} color="white" />
          </Button>
          <Button className="mx-1" variant="transparent">
            <MdOutlineNotificationsActive size={25} color="white" />
          </Button>
          <Button variant="transparent" className="d-block d-sm-none ms-1">
            <FaSearch size={25} color="white" />
          </Button>
          <button
            className="d-none d-sm-block fs-6 text-black"
            style={{
              borderRadius: 50,
              width: "35px",
              height: "35px",
              background: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {profLetter}
          </button>
        </Col>
      </Row>
      <Row className="m-0">
        <Menu />
        <Col className="p-2"></Col>
      </Row>
    </>
  );
}

export default App;
