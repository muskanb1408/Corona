import React, { Component } from "react";
import axios from 'axios';
import '../App.css'
import ReactPaginate from 'react-paginate'


class List extends Component{
    constructor(props){
        super(props)
        this.state={
        posts:[],
     
        };
    }

componentDidMount() {
    axios.get('https://coronavirus-19-api.herokuapp.com/countries')
    .then( response => {
        console.log(response)
        this.setState({posts: response.data
        }
            )
    })
    .catch(error => {
        console.log(error)
    })
}


render(){
  
    const { posts } = this.state
    return(
        <div>
            <header><h1>COVID-19 Tabular Representation</h1></header>
            <div className={"table-responsive"}>
                <table border = "1" className={"table table-hover table-bordered table -striped"}>
                    <thead>
                        <th className="odd">Country</th>
                        <th className="even">Total cases</th>
                        <th className="odd">New Cases</th>
                        <th className="even">Total Deaths</th>
                        <th className="odd">New Deaths</th>
                        <th className="even">Recovered</th>
                        <th className="odd">Active Cases</th>
                    </thead>
                    <tbody>
                        { posts.length ?
                        posts.map(post => (
                            <tr>
                        <td className="oddtd">{post.country}</td>
                        <td className="eventd">{post.cases}</td>
                        <td className="oddtd">{post.todayCases}</td>
                        <td className="eventd" v>{post.deaths}</td>
                        <td className="oddtd">{post.todayDeaths}</td>
                        <td className="eventd">{post.recovered}</td>
                        <td className="oddtd">{post.active}</td>
                            </tr>
                        )):
                        null
                        }
                    </tbody>
                </table>
            </div>
            </div>
    );
}




}
 export default List;