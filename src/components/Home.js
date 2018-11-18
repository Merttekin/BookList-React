import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import axios from 'axios';


class Home extends Component {
    constructor() {
        super();
        this.state = {
            search: '',
            datas: [],
            isLoading: true
        }
    }

    colFormatter = (cell, row) => {
        return (
            <Link to={`/detail/${row.id}`}>Detay</Link>
        )
    }

    componentDidMount() {
        axios.get('http://5be5d36648c1280013fc3e24.mockapi.io/Books')
            .then(response => response.data)
            .then(data => this.setState({
                datas: data,
                isLoading: false
            }));
    }

    changeHandler = e => {
        this.setState({ search: e.target.value })
    }


    render() {

        const options = {
            page: 1,  // which page you want to show as default
            sizePerPage: 5,  // which size per page you want to locate as default
            pageStartIndex: 1, // where to start counting the pages
            paginationSize: 3,  // the pagination bar size.
            prePage: 'Prev', // Previous page button text
            nextPage: 'Next', // Next page button text
            firstPage: 'First', // First page button text
            lastPage: 'Last', // Last page button text
            // paginationShowsTotal: this.renderShowsTotal,  // Accept bool or function
            paginationPosition: 'top',  // default is bottom, top and both is all available
            hideSizePerPage: true, //> You can hide the dropdown for sizePerPage
            // alwaysShowAllBtns: true, // Always show next and previous button
            // withFirstAndLast: false //> Hide the going to First and Last page button
        };

        const { datas, isLoading } = this.state;



        // let columns = column_meta.map(i => {
        //     return <TableHeaderColumn dataField={i.columnName} dataFormat={extraFormatter} formatExtraData={i.columnName}>
        //         {i.displayName}</TableHeaderColumn>
        //       });

        return (
            <div>
                {isLoading ? 'Loading...' : ''}
                {
                    !isLoading ? 
                    <BootstrapTable data={datas} pagination={true} options={options} striped hover condensed>
                    <TableHeaderColumn dataField='Name' isKey filter={{ type: 'TextFilter', delay: 100, placeholder: 'Kitap Adı Ara' }}>Kitap Adı</TableHeaderColumn>
                    <TableHeaderColumn dataField='writerName' filter={{ type: 'TextFilter', delay: 100, placeholder: 'Yazar Adı Ara' }}>Yazar Adı</TableHeaderColumn>
                    <TableHeaderColumn dataField='Publisher' filter={{ type: 'TextFilter', delay: 100, placeholder: 'Yayın Evi Ara' }}>Yayın Evi</TableHeaderColumn>
                    <TableHeaderColumn dataField='id' dataFormat={this.colFormatter}>Detay</TableHeaderColumn>
                    {/* <TableHeaderColumn dataField='name' customInsertEditor={ { getElement: this.customNameField } }>Product Name</TableHeaderColumn> */}
                </BootstrapTable> : null
                }
                
            </div>

        )
    }
}



export default Home;