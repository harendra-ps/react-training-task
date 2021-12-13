import React from "react";
import { Link } from "react-router-dom";
import Fill_Star from "../assets/images/fill-star.png";
import Half_Fill_Star from "../assets/images/half-fill-star.png";
import Empty_Star from "../assets/images/empty-star.png"




export default function PList(props) {

    return(
        <div className="row">
            {props.hits.map((data, i) => 
                <div key={i} className="col-6 col-md-3 plr-6" data-pid={data.productId} data-gender={data.c_gender}>
                    <div className="product-tile">
                        {data.defaultVariant ? 
                            <div className="product-tile__upper-section">
                                <Link to={`/product-details/${(data.defaultVariant.toUpperCase()).replace(/ /g, '-')}-A0`}>
                                    <picture>
                                        <source srcSet={`https://img1.cohimg.net/is/image/Coach/${(data.defaultVariant.toLowerCase()).replace(/ /g, '_')}_a0`} media="(min-width:992px)" />
                                        <source srcSet={`https://img1.cohimg.net/is/image/Coach/${(data.defaultVariant.toLowerCase()).replace(/ /g, '_')}_a0`} media="(min-width:768px)" />
                                        <img src={`https://img1.cohimg.net/is/image/Coach/${(data.defaultVariant.toLowerCase()).replace(/ /g, '_')}_a0`} alt={data.productId} />
                                    </picture>
                                </Link>
                            </div> : ""
                        }
                        <div className="product-tile__lower-section">
                            <p className="product-tile__title">{data.promotion[0].category_id}</p>
                            <p className="product-tile__title">
                                {data.defaultVariant ? <Link to={`/product-details/${(data.defaultVariant.toUpperCase()).replace(/ /g, '-')}-A0`}>{data.variants[0].name}</Link> : ""}
                            </p>
                            <p className="product-tile__price">{data.currency === "USD" && '$'} {data.variants[0].price}</p>
                            {/*data.activeProductData.revenue > 0 ?
                                <p className="product-tile__rating">
                                    <img className="rating-fill-icon" src={Fill_Star} />
                                    <img className="rating-fill-icon" src={Fill_Star} />
                                    <img className="rating-fill-icon" src={Fill_Star} />
                                    <img className="rating-half-icon" src={Half_Fill_Star} />
                                    <img className="rating-empty-icon" src={Empty_Star} />
                                    <span className="rating-text">({data.activeProductData.revenue})</span>
                                </p>
                                : null */
                            }
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}