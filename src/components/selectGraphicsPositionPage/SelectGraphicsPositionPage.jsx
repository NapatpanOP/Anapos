import { useLocation, useNavigate, useParams } from "react-router";
import { BrandAPI } from "../../apis/brandAPI";
import './SelectGraphicsPositionPage.css';
import { useState, useEffect } from "react";

const SelectGraphicsPositionPage = () => {
    // const { id, position } = useParams();
    
    const [brand, setBrand] = useState(null)
    const nevigate = useNavigate();
    const location = useLocation()

    var id, position
    const setup = () => {
        console.log(location.state)
        if(location.state) {
            id = location.state.id
            position = location.state.position
        } else {
            nevigate('/')
        }
    }
    
    const refreshData = () => {
        BrandAPI.getById(id).then((res) => {
            console.log(res)
            setBrand(res)
        })
    }

    setup()

    const renderButtonList = () => {
        console.log('test ', brand)
        console.log(position)
        if(brand) {
            return brand.adsPositions[position].images_urls.map((img, index) => {
                return <button onClick={() => click()} type="button" key={index} className="btn btn-outline-dark">POSITION {index} {img.selected_counts}</button>
            })
        } else {
            return
        }
    }

    useEffect(() => {
        refreshData()
        
        
    }, [])
    return (
        <div className="position-container">
           <img className="image-banner" src={brand?.image} alt={brand?.title} />
           <div className="button-list-contain">
                {renderButtonList()}
           </div>
           <div className="position-img-list">
            <img src="./src/assets/brand07.jpg" alt="" />
            <img src="./src/assets/brand07.jpg" alt="" />
            <img src="./src/assets/brand07.jpg" alt="" />
           </div>
        </div>
    );
}

export default SelectGraphicsPositionPage;

// {
//     "title": "Card 5",
//     "image": "brand05.jpg",
//     "full_image": "",
//     "like": [],
//     "type": "New",
//     "link": "/dailynewspage",
//     "adsPositions": [
//         {
//           "selected_counts": 0,
//           "images_urls": [
//               {
//                   "selected_counts": 0,
//                   "images_url": ""
//               },
//               {
//                   "selected_counts": 0,
//                   "images_url": ""
//               }
//           ]
//       }
//     ]
//   }