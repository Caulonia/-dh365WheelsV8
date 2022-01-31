import React, {Component} from 'react';
import Car  from './Car';

let cars = [
    {modelo: 'Nivus'},
    {modelo: 'Taos'},
    {modelo: 'T-Croos'},
    {modelo: 'Tiguan'},
    {modelo: 'Thundra'}
]

class CarsInDb extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: []
        }
    }

    
    // componentDidMount() {
    //     console.log("%cse monto el componente", 'color: green');
    // //     fetch('http://localhost:3001/api/products')
    // //     .then(response => response.json())
    // //     .then(data => {
    // //         this.setState({
    // //             products: data
    // //         })
    // //     })
    // //     .catch(error => console.error(error));
    // }   

    render(){

    return (
        <React.Fragment>
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800">Modelos</h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                {/* {this.setState.products.length === 0 && <p>Cargando</p>}
                                {this.setState.products.map((product,i) =>{
                                    return (
                                        <li key={i}>
                                            <h1>{product.modelo}</h1>
                                        </li>
                                    )
                                })

                                } */}
                                {cars.map((car,index)=>{
                                return  <Car  {...car}  key={index} />})}
                            </div>
                        </div>
                    </div>
                </div>
           
        </React.Fragment>
    )

}}

export default CarsInDb;