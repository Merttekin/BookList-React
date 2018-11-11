import React, { Component } from 'react';

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
                <h2>{`Kitap İsmi: ${Name}`}</h2>

                <h3>{`Yazarı: ${writerName}`}</h3>

                <h4>{`Yayın Evi: ${Publisher}`}</h4>
                
            </div>
        )
    }

};

export default Detail;