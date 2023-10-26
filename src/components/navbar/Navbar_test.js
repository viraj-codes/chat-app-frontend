import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Nav,
  Navbar,
  Container,
  Form,
  Button,
  Col,
  Row,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "./navbar.css";

function NavbarTest(props) {
  const [searchData, setsearchData] = useState({
    technology: "",
    level: "",
    fromDate: "",
    toDate: "",
    search: "",
  });

  const updateSearchData = (event) => {
    setsearchData({
      ...searchData,
      [event.target.name]: event.target.value,
    });
  };

  const [searchError, setsearchError] = useState("");
  const [fromDateError, setfromDateError] = useState("");
  const [toDateError, settoDateError] = useState("");

  let validateSearch = () => {
    if (
      searchData.search ||
      searchData.technology ||
      searchData.level ||
      (searchData.fromDate && searchData.toDate)
    ) {
      setsearchError("");
      return true;
    } else {
      setsearchError("Enter some keywords");
    }
    return false;
  };

  let validateDate = () => {
    if (
      searchData.search ||
      searchData.technology ||
      searchData.level ||
      (searchData.fromDate && searchData.toDate)
    ) {
      if (searchData.fromDate <= searchData.toDate) {
        setfromDateError("");
        settoDateError("");
        return true;
      } else {
        setfromDateError("Enter date before to-date");
        settoDateError("Enter date after from-date");
      }
      return false;
    } else if (searchData.fromDate) {
      setfromDateError("");
      settoDateError("Select to-date");
    } else {
      settoDateError("");
      setfromDateError("Select from-date");
    }
    return false;
  };

  const getDataFromNav = (searchData) => {
    props.getSearchedData(searchData);
  };

  const sendData = (event) => {
    validateSearch();
    validateDate();
    if (validateSearch() && validateDate()) {
      console.log("searchData", searchData);
      setsearchError("");
      setfromDateError("");
      settoDateError("");

      getDataFromNav(searchData);

      props.history.push("/search");
    }
  };

  const logoutUser = () => {
    localStorage.clear();
    props.history.push("/");
  }

  return (
    <div className="navbar_main">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container fluid>
          <Navbar.Brand className="logo">
            <Link to="/">
              <img
                src="assets/logo2.png"
                alt=""
                className="image"
                // height="48px"
                // width="175px"
              />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <div>
              <Nav className="me-auto">
                <Row className="g-3">
                  <Col md={2}>
                    <div className="tech">
                      <Form.Select
                        aria-label="Default select example"
                        variant=""
                        id="dropdown-basic"
                        className="technol"
                        name="technology"
                        value={searchData.technology}
                        onChange={updateSearchData}
                      >
                        <option>Technology</option>
                        <option value="React Js">ReactJs</option>
                        <option value="Vue Js">VueJs</option>
                        <option value="Angular">Angular</option>
                        <option value="Java">Java</option>
                      </Form.Select>
                    </div>
                  </Col>

                  <Col md={2}>
                    <div className="Linktech">
                      <Form.Select
                        aria-label="Default select example"
                        variant=""
                        id="dropdown-basic"
                        className="linksize"
                        name="level"
                        value={searchData.level}
                        onChange={updateSearchData}
                      >
                        <option>Level</option>
                        <option value="Easy">Easy</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Expert">Expert</option>
                      </Form.Select>
                    </div>
                  </Col>

                  <Col md={2}>
                    <div className="formdate">
                      <Form.Control
                        type="date"
                        name="fromDate"
                        placeholder="From Date"
                        // onFocus={(e) => (e.target.type = "date")}
                        // onBlur={(e) => (e.target.type = "text")}
                        value={searchData.fromDate}
                        onChange={updateSearchData}
                      />
                    </div>
                    {fromDateError && (
                      <div className="errormsg">{fromDateError}</div>
                    )}
                  </Col>
                  <Col md={2}>
                    <div className="todate">
                      <Form.Control
                        type="date"
                        name="toDate"
                        placeholder="To Date"
                        // onFocus={(e) => (e.target.type = "date")}
                        // onBlur={(e) => (e.target.type = "text")}
                        value={searchData.toDate}
                        onChange={updateSearchData}
                      />
                    </div>
                    {toDateError && (
                      <div className="errormsg">{toDateError}</div>
                    )}
                  </Col>

                  <Col md={2}>
                    <div>
                      <InputGroup>
                        <FormControl
                          type="text"
                          placeholder="Search Questions"
                          aria-label="Search"
                          className="search "
                          name="search"
                          value={searchData.search}
                          onChange={updateSearchData}
                        />
                      </InputGroup>
                      {searchError && (
                        <div className="errormsg">{searchError}</div>
                      )}
                    </div>
                  </Col>

                  <Col md={1}>
                    <div>
                      <Button
                        style={{ width: "100%" }}
                        className="searchbutton"
                        onClick={sendData}
                      >
                        Search
                      </Button>
                    </div>
                  </Col>
                  <Col md={1}>
                    <div>
                      <Button
                        style={{ width: "100%" }}
                        className="searchbutton"
                        onClick={logoutUser}
                      >
                        Logout
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default withRouter(NavbarTest);

// import React, { useState } from "react";
// import { Link, withRouter } from "react-router-dom";
// import {
//   Nav,
//   Navbar,
//   Container,
//   Form,
//   Button,
//   Col,
//   Row,
//   InputGroup,
//   FormControl,
// } from "react-bootstrap";
// import "./navbar.css";

// function NavbarTest(props) {
//   //   const [searchError, setsearchError] = useState("");
//   const [searchData, setsearchData] = useState({
//     technology: "",
//     level: "",
//     fromDate: "",
//     toDate: "",
//     search: "",
//   });

//   const updateSearchData = (event) => {
//     setsearchData({
//       ...searchData,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const [searchError, setsearchError] = useState("");
//   const [fromDateError, setfromDateError] = useState("");
//   const [toDateError, settoDateError] = useState("");

//   let validateSearch = () => {
//     if (
//       searchData.search ||
//       searchData.technology ||
//       searchData.level ||
//       searchData.fromDate ||
//       searchData.toDate
//     ) {
//       setsearchError("");
//       return true;
//     } else {
//       setsearchError("Enter some keywords");
//     }
//     return false;
//   };

//   let validateDate = () => {
//     if (searchData.fromDate && searchData.toDate) {
//       if (searchData.fromDate <= searchData.toDate) {
//         setfromDateError("");
//         settoDateError("");
//         return true;
//       } else {
//         setfromDateError("From date should be less than to date");
//         settoDateError("To date should be more than from date");
//       }
//       return false;
//     }else{
//         setfromDateError("Enter both dates")
//         settoDateError("Enter both dates")
//     }
//     return false;
//   };

//   const sendData = (event) => {
//     validateSearch();
//     validateDate();
//     if (validateSearch() && validateDate()) {
//       console.log("searchData", searchData);
//       setsearchError("");
//       props.history.push("/search");
//     }
//   };

//   return (
//     <div className="navbar_main">
//       <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
//         <Container fluid>
//           <Navbar.Brand className="logo">
//             <Link to="/">
//               <img
//                 src="assets/logo2.png"
//                 alt=""
//                 className="image"
//                 // height="48px"
//                 // width="200px"
//               />
//             </Link>
//           </Navbar.Brand>

//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav">
//             <div className="" style={{}}>
//               <Nav className="me-auto">
//                 <Row className="g-3">
//                   <Col md={1}></Col>
//                   <Col md={2}>
//                     <div className="tech">
//                       <Form.Select
//                         aria-label="Default select example"
//                         variant=""
//                         id="dropdown-basic"
//                         className="technol"
//                         name="technology"
//                         value={searchData.technology}
//                         onChange={updateSearchData}
//                       >
//                         <option>Technology</option>
//                         <option value="React Js">ReactJs</option>
//                         <option value="Vue Js">VueJs</option>
//                         <option value="Angular">Angular</option>
//                         <option value="Java">Java</option>
//                       </Form.Select>
//                     </div>
//                   </Col>

//                   <Col md={2}>
//                     <div className="Linktech">
//                       <Form.Select
//                         aria-label="Default select example"
//                         variant=""
//                         id="dropdown-basic"
//                         className="linksize"
//                         name="level"
//                         value={searchData.level}
//                         onChange={updateSearchData}
//                       >
//                         <option>Level</option>
//                         <option value="Easy">Easy</option>
//                         <option value="Intermediate">Intermediate</option>
//                         <option value="Expert">Expert</option>
//                       </Form.Select>
//                     </div>
//                   </Col>

//                   <Col md={2}>
//                     <div className="formdate">
//                       <Form.Control
//                         type="date"
//                         // name="date-of-birth"
//                         name="fromDate"
//                         placeholder="From Date"
//                         // onFocus={(e) => (e.target.type = "date")}
//                         // onBlur={(e) => (e.target.type = "text")}
//                         value={searchData.fromDate}
//                         onChange={updateSearchData}
//                       />
//                     </div>
//                     {fromDateError && (
//                       <div className="errormsg">{fromDateError}</div>
//                     )}
//                   </Col>
//                   <Col md={2}>
//                     <div className="todate">
//                       <Form.Control
//                         type="date"
//                         // name="date-of-birth"
//                         name="toDate"
//                         placeholder="To Date"
//                         // onFocus={(e) => (e.target.type = "date")}
//                         // onBlur={(e) => (e.target.type = "text")}
//                         value={searchData.toDate}
//                         onChange={updateSearchData}
//                       />
//                     </div>
//                     {toDateError && (
//                       <div className="errormsg">{toDateError}</div>
//                     )}
//                   </Col>

//                   <Col md={2}>
//                     <div>
//                       <InputGroup>
//                         <FormControl
//                           type="text"
//                           placeholder="Search Questions"
//                           aria-label="Search"
//                           className="search "
//                           name="search"
//                           value={searchData.search}
//                           onChange={updateSearchData}
//                         />
//                       </InputGroup>
//                       {searchError && (
//                         <div className="errormsg">{searchError}</div>
//                       )}
//                     </div>
//                   </Col>

//                   <Col md={1}>
//                     <div>
//                       <Button
//                         style={{ width: "100%" }}
//                         className="searchbutton"
//                         onClick={sendData}
//                       >
//                         Search
//                       </Button>
//                     </div>
//                   </Col>
//                 </Row>
//               </Nav>
//             </div>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// }

// export default withRouter(NavbarTest);
