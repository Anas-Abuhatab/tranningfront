import axios from 'axios'
import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import UpdateForm from './UpdateForm';



 class Favouriets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favData: [],
            strDrink:'',
            strDrinkThumb:'',
            showModal:false,
            id:""
        };
    };
     componentDidMount = async ()=>{
         axios.get(`${process.env.REACT_APP_SERVER_HOST}/fruitData`).then(res=>{
             this.setState({    
                favData:res.data
             });
         });
     } ;
     handleDelete = async (id)=>{
        axios.delete(`${process.env.REACT_APP_SERVER_HOST}/delete/${id}`).then(res=>{
            this.setState({
                favData:res.data
            })
        })
     };
     handleEdit = async (strDrink,strDrinkThumb,id)=>{
        this.setState({
            strDrink:strDrink,
            strDrinkThumb:strDrinkThumb,
            showModal:true,
            id:id

        })
     };
     handleUpdate = async (e)=>{
         e.preventDefault();
         let config = {
             method:"PUT",
             url :`${process.env.REACT_APP_SERVER_HOST}/update/${this.state.id}`,
             data:{
                strDrink: e.target.name.value,
                strDrinkThumb: e.target.img.value
             }
            }
            await axios(config).then(res=>{
                this.setState({
                    showModal:false,
                    favData:res.data
                })
            })
     }
     closeModal=()=>{
         this.setState({
            showModal:false
         })
     }
    render() {
        return (
            <div>
                <h1>Favourites page</h1>
                <div className="row">
                    {this.state.favData.map(item => {
                        return (<Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.strDrinkThumb} />
                            <Card.Body>
                                <Card.Title>{item.strDrink}</Card.Title>
                                <Button variant="primary" onClick={() => { this.handleEdit(item.strDrink, item.strDrinkThumb,item._id) }}>Edit</Button>
                                <Button variant="primary" onClick={() => { this.handleDelete(item._id) }}>Delete</Button>
                            </Card.Body>
                        </Card>
                        )
                    })
                }
                </div>
                
                {this.state.showModal&&<UpdateForm name={this.state.strDrink}
                                                    img={this.state.strDrinkThumb}
                                                    handleUpdate={this.handleUpdate}
                                                    showModal={this.state.showModal}
                                                    closeModal={this.closeModal}/>}
            </div>
        )
    }
}

export default Favouriets
