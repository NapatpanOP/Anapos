import React, { useState , useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { BrandAPI } from '../apis/brandAPI';
import './SelectPositionPage.css'

function SelectPositionPage() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    var selectId = ''
    const onClickGraphicHandle = (id, position) => {
        console.log(id)
        selectId = id
        selectPosition = position
        setShow(true)
    };
    var selectPosition = 0
    const [brand, setBrand] = useState(null)
    const navigate = useNavigate();
    const location = useLocation()

    // var brand
    const setup = () => {
        console.log(location.state)
        if (location.state) {
            selectId = location.state.id
            refreshData()
        } else {
            navigate('/')
        }
    }

    const refreshData = () => {
        BrandAPI.getById(selectId).then((res) => {
            console.log(res)
            setBrand(res)
            // brand = res
        })
    }

    const confirmHandle = () => {
        setShow(false)
        console.log(selectId)
        navigate("/select-graphics-position", {state:{id: brand._id, position: selectPosition}})
    }

    useEffect(() => {
        // refreshData()
        setup()
    }, [])

    const renderButtonList = () => {
        console.log('test ', brand)
        if (brand) {
            return brand.adsPositions.map((img, index) => {
                return <button onClick={() => onClickGraphicHandle(brand._id, index)} type="button" key={index} className="btn btn-outline-dark">POSITION {index +1}</button>
            })
        } else {
            return
        }
    }

    
    
    return (
        <div>
            <img src={brand?.logo_brand} alt="logo-sanook" className="main-logo" />

            <div className="headtext">
                <p>VARIOUS POSITIONS</p>
            </div>

            <div className="bt-position">
                {renderButtonList()}
            </div>

            <img src={brand?.full_image ?? ''} alt="position-sanook" className="position-sanook" />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Position selection</Modal.Title>
                </Modal.Header>
                <Modal.Body>If sure to select this position, press Save and press Next.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => confirmHandle()}>
                        Next
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default SelectPositionPage;