import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router";
import { getProductDetails_Request } from '../actions';
import Spinner from '../component/spinner';


function selectThumbImg(seqc) {
    let ele1 = document.getElementsByClassName("pd-thumb-img");
    let ele2 = document.getElementsByClassName("pd-full-img");

    for(let i = 0; i < ele1.length; i++) {
        let clsList = ele1[i].classList;

        if(clsList.contains('active')) {
            clsList.remove("active");
        }
    }
    for(let j = 0; j < ele2.length; j++) {
        let clsList = ele2[j].classList;
        
        if(clsList.contains('active')) {
            clsList.remove("active");
        }
    }
    document.getElementById('pd-thumb-img-'+seqc).classList.add("active");
    document.getElementById('pd-full-img-'+seqc).classList.add('active');
}


export default function Product_details() {
    const productDetails = useSelector((state) => state.productDetailsReducer);
    const dispatch = useDispatch();
    const { id } = useParams();
    let pid = id ? id.split("-")[0] : "";
    let urlId = id ? id.replace(/-/g, " ") : "";
    let pDetails = "";  

    useEffect(() => {
        let payload = { id:  urlId}
        dispatch(getProductDetails_Request(payload));
    }, []);

    if(productDetails){
        if(Array.isArray(productDetails.details)){
            pDetails = productDetails.details.find((p) => p.id === pid);
        }
        else {
            return(<p>{productDetails.details}</p>);
        }
    }

    if(!pDetails){
        return( <Spinner /> )
    }

    return(
        <div className="conatiner-fluid">
            <h4 className="mb-5">Product Name - {pDetails.name}</h4>

            <div className="col-12 col-md-8">
                <div className="row">
                    <div className="col-md-2">
                        <ul className="list pd-thumbnails-img">
                            {pDetails.media.thumbnails.map((data, i) =>
                                <li key={i} className={`pd-thumb-img ${i === 0 ? 'active':''}`} id={`pd-thumb-img-${i}`} onClick={() => selectThumbImg(i)}>
                                    <img src={data.src} alt={data.alt} />
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="col-md-10">
                        {pDetails.media.full.map((data, i) =>
                            <div key={i} className={`pd-full-img ${i === 0 ? 'active':''}`} id={`pd-full-img-${i}`}>
                                <img src={data.src} alt={data.alt} />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-4">

            </div>

        </div>  
    )
}