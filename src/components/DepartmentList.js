import React, { useEffect } from 'react';
import $ from 'jquery'; 
import 'datatables.net'; 

import Logo from '../assets/img/logo-small.png'
import DoctorThumb01 from '../assets/img/doctors/doctor-thumb-01.jpg';
import DoctorThumb02 from '../assets/img/doctors/doctor-thumb-02.jpg';
import DoctorThumb03 from '../assets/img/doctors/doctor-thumb-03.jpg';
import DoctorThumb04 from '../assets/img/doctors/doctor-thumb-04.jpg';
import DoctorThumb05 from '../assets/img/doctors/doctor-thumb-05.jpg';
import DoctorThumb06 from '../assets/img/doctors/doctor-thumb-06.jpg';
import DoctorThumb07 from '../assets/img/doctors/doctor-thumb-07.jpg';
import DoctorThumb08 from '../assets/img/doctors/doctor-thumb-08.jpg';
import DoctorThumb09 from '../assets/img/doctors/doctor-thumb-09.jpg';
import DoctorThumb10 from '../assets/img/doctors/doctor-thumb-10.jpg';
import { Navbar, Row, Col, Dropdown, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faTrash } from '@fortawesome/free-solid-svg-icons';

const DepartmentList = () => {
  const data = [
    { id: 1, image: DoctorThumb01, sku: 'MG2345678', name: 'Gloss', title: 'Beauty and glamour', description: 'lorem ipsium dolor sit amet', brand: '18.00', cost: '38.00', quantity: '36', size: '1,800' },
    { id: 2, image: DoctorThumb02, sku: 'MG2345678', name: 'Gloss', title: 'Gadget', description: 'lorem ipsium dolor sit amet', brand: '18.00', cost: '38.00', quantity: '36', size: '1,800' },
    { id: 3, image: DoctorThumb03, sku: 'MG2345678', name: 'Gloss', title: 'Shoe', description: 'lorem ipsium dolor sit amet', brand: '18.00', cost: '38.00', quantity: '36', size: '1,800' },
    { id: 4, image: DoctorThumb04, sku: 'MG2345678', name: 'Gloss', title: 'Cream', description: 'lorem ipsium dolor sit amet', brand: '18.00', cost: '38.00', quantity: '36', size: '1,800' },
    { id: 5, image: DoctorThumb05, sku: 'MG2345678', name: 'Gloss', title: 'Lotion', description: 'lorem ipsium dolor sit amet', brand: '18.00', cost: '38.00', quantity: '36', size: '1,800' },
    { id: 6, image: DoctorThumb06, sku: 'MG2345678', name: 'Gloss', title: 'Beauty and glamour', description: 'lorem ipsium dolor sit amet', brand: '18.00', cost: '38.00', quantity: '36', size: '1,800' },
    { id: 7, image: DoctorThumb07, sku: 'MG2345678', name: 'Gloss', title: 'Watch', description: 'lorem ipsium dolor sit amet', brand: '18.00', cost: '38.00', quantity: '36', size: '1,800' },
    { id: 8, image: DoctorThumb08, sku: 'MG2345678', name: 'Gloss', title: 'Bag', description: 'lorem ipsium dolor sit amet', brand: '18.00', cost: '38.00', quantity: '36', size: '1,800' },
    { id: 9, image: DoctorThumb09, sku: 'MG2345678', name: 'Gloss', title: 'Soap', description: 'lorem ipsium dolor sit amet', brand: '18.00', cost: '38.00', quantity: '36', size: '1,800' },
    { id:10, image: DoctorThumb10, sku: 'MG2345678', name: 'Gloss', title: 'Earring', description: 'lorem ipsium dolor sit amet', brand: '18.00', cost: '38.00', quantity: '36', size: '1,800' },
  ];

  // DataTable initialization
  useEffect(() => {
    let __lengthCounter = 0;

    const table = $('#departmentTable').DataTable({
      data,
      columns: [
        {
          data: null,
          defaultContent: '<input type="checkbox" class="row-checkbox" />',
          orderable: false,
        },
        { data: 'id', title: 'ID' },
        {
          data: 'image',
          title: 'Image',
          render: function (data, type, row) {
            return `<img src="${data}" alt="${row.title}" width="30" height="30" />`;
          },
        },
        { data: 'sku', title: 'SKU' },
        { data: 'name', title: 'Name' },
        { data: 'title', title: 'Title' },
        { data: 'description', title: 'Description' },
        { data: 'brand', title: 'Brand' },
        { data: 'cost', title: 'Cost' },
        { data: 'quantity', title: 'Quantity' },
        { data: 'size', title: 'Size' },
      ],
      pageLength: 5,
      lengthMenu: [5, 10, 15, 20],
      drawCallback: function (settings) {
        const api = this.api();

        api.table().container().querySelectorAll('.dataTables_length').forEach((div, index) => {
          const label = div.querySelector('label');
          const select = div.querySelector('select');

          if (label && select) {
            const uniqueId = 'dt-length-' + __lengthCounter;
            label.setAttribute('for', uniqueId);
            select.setAttribute('id', uniqueId);
            __lengthCounter++;
          }
        });
      },
    });

    // Handle select all checkbox
    $('#selectAll').on('click', function () {
      const rows = table.rows({ search: 'applied' }).nodes();
      $('input[type="checkbox"]', rows).prop('checked', this.checked);
    });

    // Handle row checkbox click
    $('#departmentTable tbody').on('change', 'input.row-checkbox', function () {
      if (!this.checked) {
        const selectAllCheckbox = $('#selectAll').get(0);
        if (selectAllCheckbox && selectAllCheckbox.checked) {
          selectAllCheckbox.checked = false;
        }
      }
    });

    return () => {
      table.destroy();
    };
  }, []);

  const handleDelete = () => {
    const table = $('#departmentTable').DataTable();
    const selectedRows = table.rows().nodes().toArray().filter(row => $(row).find('input.row-checkbox').prop('checked'));

    if (selectedRows.length > 0) {
      selectedRows.forEach(row => table.row(row).remove());
      table.draw();
    } else {
      alert('No rows selected');
    }
  };

  return (
    <div className="container">
        <header>
          <Navbar>
            <Row className="w-100">
              <Col lg={2} md={2} sm={12} xs={12}  className='d-flex mt-3'>
                <div className='d-flex'>
                  <img className='mx-1' src={Logo} alt='Logo' />
                  <h1 className="text-primary">Unlimi<span className="text-danger">•</span></h1>
                </div>
                <div className="top-nav-search">
                  <form>
                    <input type="text" className="form-control" placeholder="Search here ..." />
                    <button className="btn" type="submit">
                      <FontAwesomeIcon icon={faSearch} />
                    </button>
                  </form>
                </div>
              </Col>
              <Col lg={10} md={10} sm={12} xs={12} className="d-flex justify-content-end align-items-center">
                <FontAwesomeIcon icon={faBell} className="mx-3" style={{ cursor: 'pointer' }} />
                <Dropdown alignRight>
                  <Dropdown.Toggle variant="link" id="dropdown-basic" className="p-0">
                    <Image src={DoctorThumb01} roundedCircle width="40" height="40" />
                    <span className='mx-2'>Deko</span>

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
      <h2>Department List</h2>
      <div className='d-flex justify-content-end'>
        <button onClick={handleDelete} className="btn btn-danger "><FontAwesomeIcon icon={faTrash} /> </button>
      </div>
      <table id="departmentTable" className="table table-striped table-bordered">
        <thead>
          <tr>
            <th><input type="checkbox" id="selectAll" /></th>
            <th>ID</th>
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
          {data.map((department) => (
            <tr key={department.id}>
              <td><input type="checkbox" className="row-checkbox" /></td>
              <td>{department.id}</td>
              <td><img src={department.image} alt={department.title} width="30" height="30" /></td>
              <td>{department.sku}</td>
              <td>{department.name}</td>
              <td>{department.title}</td>
              <td>{department.description}</td>
              <td>{department.brand}</td>
              <td>{department.cost}</td>
              <td>{department.quantity}</td>
              <td>{department.size}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DepartmentList;
