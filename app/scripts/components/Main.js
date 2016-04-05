import React, {Component} from 'react'
import { connect, bindActionCreators } from 'react-redux'
import {increase, decrease} from '../actions/count'

class Main extends Component{
    constructor(props) {
        super(props)
    }
    render() {
        var number = this.props.number;
        return (
            <div id="main" role="main">
                <div id="ribbon">
                    <span className="ribbon-button-alignment"> 
                        <span id="refresh" className="btn btn-ribbon" data-action="resetWidgets" data-title="refresh"  rel="tooltip" data-placement="bottom" data-original-title="<i className='text-warning fa fa-warning'></i> Warning! This will reset all your widget settings." data-html="true">
                            <i className="fa fa-refresh"></i>
                        </span> 
                    </span>
                    <ol className="breadcrumb">
                        <li>Home</li><li>Dashboard</li>
                    </ol>
                </div>
                <div id="content">
                    <div>
                        Some state changes:
                        {number}
                        <button onClick={() => this.props.increase(1)}>Increase</button>
                        <button onClick={() => this.props.decrease(1)}>Decrease</button>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        number: state.default.number
    }
}

export default connect(
    mapStateToProps,
    {
        increase,
        decrease
    }
)(Main)