import React, { useState , useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { BrandAPI } from '../apis/brandAPI';
import './SelectPositionPage.css'
import { UserAPI } from '../apis/userAPI';
import { useAuthContext } from '../core/contexts/AuthProvider';

function SelectPositionPage() {
    const { token } = useAuthContext()
    const [show, setShow] = useState(false);
    const [idState, setId] = useState('');
    
    const [currentPositionIndex, setCurrentPositionIndex] = useState();

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


    const confirmHandle = () => {
        setShow(false)
        console.log(selectId)
        navigate("/select-graphics-position", {state:{id: brand._id, position: selectPosition}})
    }

    useEffect(() => {
        const setup = () => {
            console.log(location.state)
            if (location.state) {
                setId(location.state.id)
                BrandAPI.getById(location.state.id).then((res) => {
                    console.log(res)
                    setBrand(res)
                    UserAPI.getById(token._id).then((resUser) => {
                        const userBrandSelected = resUser.ads_poitions_selected.find(({ brand_id }) => brand_id === res._id);
                        console.log(userBrandSelected)
                        setCurrentPositionIndex(userBrandSelected?.ad_index_position ?? null)
                    })
                })
                
            } else {
                navigate('/')
            }
        }

        setup()
    }, [])
    const renderButtonList = () => {
        console.log('test ', brand)
        if (brand) {
            return brand.adsPositions.map((img, index) => {
                return <button onClick={() => onClickGraphicHandle(brand._id, index)} type="button" key={index} className={`btn ${currentPositionIndex == index ? "btn-dark" : "btn-outline-dark"}`}>POSITION {index +1}</button>
            })
        } else {
            return
        }
    }

    
    
    return (
        <div>
            <img src={brand?.logo_brand} alt="logo" className="main-logo" />

            <div className="headtext">
                <p>VARIOUS POSITIONS</p>
            </div>

            <div className="bt-position">
                {renderButtonList()}
            </div>

            <img src={brand?.full_image ?? ''} alt="position" className="position" />

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