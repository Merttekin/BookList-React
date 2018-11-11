import React, { Component } from 'react';

class Create extends Component {

    constructor(props) {
        super(props);
        this.addTodo = this.addTodo.bind(this);

        this.state = {
            redirect: false
        }
    }


    addTodo(event) {
        event.preventDefault();
        let Name = this.refs.Name.value;
        let writerName = this.refs.writerName.value;
        let Publisher = this.refs.Publisher.value;

        const { history } = this.props;

        let todo = {
            Name,
            writerName,
            Publisher
        };


        fetch('http://5be5d36648c1280013fc3e24.mockapi.io/Books', {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'POST',
            body: JSON.stringify(todo)
        })
        .then(res => {
            if(res.status === 201){
                history.push("/");
            }
        }) ;


    }

    render() {
        return (
            <div>
                <form className="createMenu col-md-4">
                    <div className="form-control">
                        <label htmlFor="Name">Kitap İsmi</label>
                        <input ref="Name" id="Name" name="Name" type="text" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="writerName">Yazar</label>
                        <input ref="writerName" id="writerName" name="writerName" type="text" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="Publisher">Yayın Evi</label>
                        <input ref="Publisher" id="Publisher" name="Publisher" type="text" />
                    </div>

                    <button onClick={this.addTodo} className="btn btn-success createBtn">Gönder</button>
                </form>
            </div>
        )
    }
}
export default Create;