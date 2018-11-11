import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class Detail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            datas: [],
            Name: '',
            writerName: '',
            Publisher: ''
        }

    }

    componentDidMount() {
        const id = this.props.match.params.id
        fetch(`http://5be5d36648c1280013fc3e24.mockapi.io/Books/${id}`)
            .then(response => response.json())
            .then(data => this.setState({ Name: data.Name, writerName: data.writerName, Publisher: data.Publisher }));
    }

    render() {
        const { Name, writerName, Publisher } = this.state;
        // const book = datas.map(book =>
        //     <div>
        //         <h2>{book.Name}</h2>
        //         <p>{book.writerName}</p>
        //         <p>{book.Publisher}</p>
        //     </div>
        // )
        return (
            <div className="wrapper">
                {/* <h2>{`Kitap İsmi: ${Name}`}</h2>

                <h3>{`Yazarı: ${writerName}`}</h3>

                <h4>{`Yayın Evi: ${Publisher}`}</h4> */}
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>Kitap İsmi</th>
                            <th>Yazar</th>
                            <th>Yayın Evi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{Name}</td>
                            <td>{writerName}</td>
                            <td>{Publisher}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }

};

export default Detail;