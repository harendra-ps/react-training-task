import React from "react";
const sortByOptions = [
    {name: 'Best Matches', value: 'BEST_MATCHES'},
    {name: 'Price High To Low', value: 'PRICE_HIGH_TO_LOW'},
    {name: 'Price Low To High', value: 'PRICE_LOW_TO_HIGH'},
    // {name: 'Just Added', value: 'JUST_ADDED'}
];



export default function SortBy(props) {
    let activeVal = props.activeVal;

    function selectCurrentVal(e) {
        let selectedVal = e.target.getAttribute('data-val');
        props.sortByCallback(selectedVal);
    }

    return(
        <div className="float-right">
            <label className="sortby-text">Sort By:</label>
            <div className="dropdown">
                <button className="btn dropdown-toggle sortby-btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {sortByOptions.map((data, i) => data.value === activeVal && data.name)}
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {sortByOptions.map((data, i) =>
                        <li key={i} className={`${activeVal === data.value ? 'selected': ''}`} data-val={data.value} onClick={activeVal !== data.value ? (e) => selectCurrentVal(e) : null} >
                            {data.name}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}