import React from "react";
const genderTypes = {all: 'ALL', men: 'MEN', women: 'WOMEN'};


export default function Filter(props) {

    function selectGender(e) {
        let selectedVal = e.target.getAttribute('data-val');
        props.genderFilterCallback(selectedVal);
        e.target.blur();
    }


    return(
        <div className="row">
            <div className="col-md-6">
                <label className="filter-text">FILTER BY</label>
            </div>
            <div className="col-md-6">
                <button type="button" className="btn btn-outline-dark clear-btn float-right" onClick={() => props.clearAllFilters()}>CLEAR ALL</button>
            </div>

            <div className="col-md-12 mt-5">
                <p className="gender-text">GENDER</p>
                <button type="button" className={`btn btn-outline-dark gender-btn ${props.genderType === genderTypes.all ? 'active':'' }`} onClick={(e) => selectGender(e)} data-val={genderTypes.all} >All</button>
                <button type="button" className={`btn btn-outline-dark gender-btn ${props.genderType === genderTypes.men ? 'active':'' }`} onClick={(e) => selectGender(e)} data-val={genderTypes.men}>Men</button>
                <button type="button" className={`btn btn-outline-dark gender-btn ${props.genderType === genderTypes.women ? 'active':'' }`} onClick={(e) => selectGender(e)} data-val={genderTypes.women}>Women</button>
            </div>
        </div>
    )
}