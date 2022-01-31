import React, {Component} from 'react';


class CarsSold extends Component{
	constructor(props){
		super(props);
		this.state = {
			products: []
		} 
	}

	apiCall(url,handler){
		fetch(url)
		.then(res => res.json())
		.then(data => handler(data))
		.catch(error => console.log(error))
	}

	componentDidMount(){
		console.log('corriendo montaje');
		this.apiCall('http://localhost:3001/api/products', this.mostrarProducts)
	};


	mostrarProducts = (data) =>{
	let contenido = data
    console.log(contenido)
		
		// this.setState({
		// 	products: data.data
		// })

	}

	componentDidUpdate(){
		console.log('actualizado')
	}


	render(){
		console.log("Estoy renderizando");

    return(
        <React.Fragment>
					<h1 className="h3 mb-2 text-gray-800">Más vendidos</h1>
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%">
									<thead>
										<tr>
                                            <th>ID</th>
                                            <th>Marca</th>
                                            <th>Modelo</th>
                                            <th>Combustible</th>
                                            <th>Precio</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>1</td>
											<td>Volkswagen</td>
											<td>Nivus</td>
                                            <td>Nafta</td>
											<td>17000</td>
										</tr>
										<tr>
											<td>2</td>
											<td>Volkswagen</td>
											<td>Taos</td>
											<td>Nafta</td>
											<td>17000</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>            
        </React.Fragment>
    )
}}
export default CarsSold;