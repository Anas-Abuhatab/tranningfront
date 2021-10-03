import axios from 'axios'
import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiData: []
        };
    };

    componentDidMount = async () => {
        await axios.get(`${process.env.REACT_APP_SERVER_HOST}/alldata`).then((res) => {
            let allData = res.data
            this.setState({
                apiData: allData
            })
            console.log(this.state.apiData)
        })
    };
    handlefav = async (name, img) => {
        let config = {
            method: "POST",
            url: `${process.env.REACT_APP_SERVER_HOST}/create`,
            data: {
                strDrink: name,
                strDrinkThumb:img
            }
        };

        await axios(config).then(res => {
            console.log(res.data)
        })
    }
    render() {
        return (
            <div>
                <h1>home page</h1>
                <div className="row">
                    {this.state.apiData.map(item => {
                        return (<Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.strDrinkThumb} />
                            <Card.Body>
                                <Card.Title>{item.strDrink}</Card.Title>

                                <Button variant="primary" onClick={() => { this.handlefav(item.strDrink, item.strDrinkThumb) }}>Add to Favourites</Button>
                            </Card.Body>
                        </Card>
                        )
                    })
                    }
                </div>

            </div>
        )
    }
}

export default Home
