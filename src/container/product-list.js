import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom";
import * as actions from '../actions';

import SortBy from '../component/sortBy';
import PList from '../component/p-list';
import Filter from "../component/filter";
import Spinner from '../component/spinner';




class Product_list extends React.Component{ 
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            sortBy: 'BEST_MATCHES',
            data: "",
            genderType: ''
        }
    }

    componentDidMount() {
        let payload = {
            pageNo: 4,
            startFrom: 0
        }
        this.props.getProductList(payload);
    }

    static getDerivedStateFromProps(props, state) {
        let data = null;
        // console.log("props: ", props);

        if(props.productList){
            data = {
                data: props.productList.Data,
                loading: props.productList.loading
            }
        }

        return data;
    }

    genderFilterCallback(currentVal) {
        this.setState({
            genderType: currentVal
        });
    }

    sortByCallback(currentVal) {
        console.log(currentVal);
        this.setState({
            sortBy: currentVal
        });
    }

    clearAllFilters() {
        this.setState({
            sortBy: 'BEST_MATCHES',
            genderType: '' 
        })
    }


    render() {
        let data = this.state.data;
        console.log("data: ", data);
        let genderType = this.state.genderType;
        let sortBy = this.state.sortBy;
        let hits = data ? data.hits ? data.hits.filter((data, i) => data.defaultVariant.match(/\//) != "/") : [] : [];
        
        if(genderType && genderType !== 'ALL'){
            hits = hits.filter((data, i) => data.c_gender && data.c_gender.toUpperCase() === genderType);
        }
        if(sortBy === 'PRICE_HIGH_TO_LOW'){
            hits = hits.sort((a, b) => b.variants[0].price - a.variants[0].price);
        }
        else if(sortBy === 'PRICE_LOW_TO_HIGH'){
            hits = hits.sort((a, b) => a.variants[0].price - b.variants[0].price);
        }


        return(
            <div className="container-fluid">
                <h3>NEW ARRIVALS</h3>

                <div className="row">
                    <div className="col-md-3 d-none d-md-block mt-2">
                        <Filter genderFilterCallback={(val) => this.genderFilterCallback(val)} clearAllFilters={() => this.clearAllFilters()} genderType={genderType} />
                    </div>
                    <div className="col-sm-12 col-md-9">
                        <div className="row">
                            <div className="col-6 col-md-6 plr-6">
                                <label className="sortby-text">{hits.length > 0 ? `${hits.length} Products`: '0 Product'}</label>
                            </div>
                            <div className="col-md-6 d-none d-md-block plr-6">
                                <SortBy sortByCallback={(val) => this.sortByCallback(val)} activeVal={sortBy} />
                            </div>
                        </div>
                        <PList  hits={hits} />
                    </div>
                </div>
                
                {this.state.loading ? <Spinner /> : null}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
	return {
		productList: state.productListReducer
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Product_list);