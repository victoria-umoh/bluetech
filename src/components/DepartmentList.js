import React, { useEffect, useState, useRef } from 'react';
import Logo from '../assets/img/loogoo.webp'
import DoctorThumb01 from '../assets/img/doctors/doctor-thumb-01.jpg';
import { Navbar, Row, Col, Dropdown, Image, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


const DepartmentList = () => {

  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://3.88.1.181:8000/products/public/catalog?supplier=FragranceX&first=0&last=50');
        setTableData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  
  console.log ('Data ::', tableData);
  console.log ('loading ::', loading);
  
  const searchRef = useRef(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log("searchRef", searchRef.current.value)

      try {
        const response = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}?supplier=FragranceX&first=0&last=50&search=${searchRef.current.value}`);
        setTableData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }    
        
  };

  return (
    <>
        <header fluid={true} >
          <Navbar expand="lg" className='bg-white'>
            <Row className="w-100">
              <Col lg={2} md={2} sm={12} xs={12} className='d-flex mt-3 px-5'>
                <div className='d-flex'>
                  <img className='' src={Logo} alt='Logo' width="30" height="40" />
                  <h1 style={{color: '#0341a7', fontWeight: '600'}} className='mx-1'>Unlimi<span className="text-danger">•</span></h1>
                </div>
                <div className="top-nav-search mx-5">
                  <form className='search-form'>
                    <input type="text" className="form-control search-input" placeholder="Search here ..." ref={searchRef} />
                    <button className="btn" type="submit" onClick={handleSearch}>
                      <FontAwesomeIcon icon={faSearch} />
                    </button>
                  </form>
                </div>
              </Col>
              <Col lg={10} md={10} sm={12} xs={12} className="d-flex justify-content-end align-items-center">
                <FontAwesomeIcon icon={faBell} className="" style={{ cursor: 'pointer' }} />
                <sup className=''><span className='badge text-white bg-danger'>5</span></sup>
                <Dropdown alignRight>
                  <Dropdown.Toggle variant="link" id="dropdown-basic" className="p-0 mx-2 text-decoration-none">
                    <Image src={DoctorThumb01} roundedCircle width="40" height="40" />
                    <span className='mx-2 text-black'>Deko</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
          </Navbar>
        </header>

        <div className="container">
        
        <h2 className='mt-5'>Department List</h2>

        <Table bordered hover>
            <thead style={{ backgroundColor: '#0341a7'}}>
                <tr style={{ backgroundColor: '#0341a7' }}>
                    <th><input type="checkbox" id="selectAll" /></th>
                    <th>S/N</th>
                    <th>Image</th>
                    <th>SKU</th>
                    <th>Name</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Brand</th>
                    <th>Cost</th>
                    <th>Quantity</th>
                    <th>Size</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((department, i) => (
                    <tr key={department.id}>
                        <td><input type="checkbox" className="row-checkbox" /></td>
                        <td>{i+1}.</td>
                        <td><img src={department.Image_1} alt={department.Title} width="50" height="50" /></td>
                        <td>{department.SKU}</td>
                        <td>{department.Name}</td>
                        <td>{department.Title}</td>
                        <td>{department.Description}</td>
                        <td>{department.Brand}</td>
                        <td>{department['Cost Price']}</td>
                        <td>{department.Quantity}</td>
                        <td>{department.size}</td>
                    </tr>
                    
                ))}
            </tbody>
        </Table>
        </div>
    </>
  );
};

export default DepartmentList;
