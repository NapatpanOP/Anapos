import React, { useState , useEffect } from 'react';
import "./SanookPage.css"
import logosanook from "../assets/logoBrands/sanook.jpg"
import positionsanook from "../assets/positionPage/PositionSanook.jpg"
import PopupSanook from '../components/PositionPopup/Sanook/PopupSanook';
import { useLocation, useNavigate } from 'react-router';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function SelectPositionPage() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const onClickPositionHandle = () => {
        setShow(true)
    };
    // const [brand, setBrand] = useState(null)
    const nevigate = useNavigate();
    const location = useLocation()

    var brand
    var id, position
    const setup = () => {
        console.log(location.state)
        if (location.state) {
            id = location.state.id
            refreshData()
        } else {
            nevigate('/')
        }
    }

    const refreshData = () => {
        BrandAPI.getById(id).then((res) => {
            console.log(res)
            // setBrand(res)
            brand = res
        })
    }

    useEffect(() => {
        // refreshData()
        setup()
    }, [])

    const renderButtonList = () => {
        console.log('test ', brand)
        console.log(position)
        if (brand) {
            return brand.adsPositions[position].images_urls.map((img, index) => {
                return <button onClick={() => onClickPositionHandle()} type="button" key={index} className="btn btn-outline-dark">POSITION {index} {img.selected_counts}</button>
            })
        } else {
            return
        }
    }

    
    
    return (
        <div>
            <img src={logosanook} alt="logo-sanook" class="logo-sanook" />

            <div class="headtext">
                <p>VARIOUS POSITIONS</p>
            </div>

            <div class="bt-position">
                {renderButtonList()}
            </div>

            <img src={positionsanook} alt="position-sanook" class="position-sanook" />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Position selection</Modal.Title>
                </Modal.Header>
                <Modal.Body>If sure to select this position, press Save and press Next.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary btn-success" onClick={handleClose}>
                        Save
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        <a href="/next-page" style={{ color: 'white', textDecoration: 'none' }}>
                            Next
                        </a>
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default SelectPositionPage;