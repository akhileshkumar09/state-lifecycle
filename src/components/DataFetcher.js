import React from "react";


class DataFetcher extends React.Component{
  constructor(props){
    super(props)
    this.state={
        data: null,
        loading: true,
        error : null,
    } 
  }
  componentDidMount(){
    const api = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY';


    fetch(api)
    .then((response)=>{
        if(!response.ok){
            throw new Error('Failed to fetch data.')
        }
        return response.json();
    })
    .then((data) => {
      this.setState({ data, loading: false })})
     
    .catch((error) => this.setState({ error, loading: false }));
    }
  render(){
    const {data, loading, error} = this.state;
    
    if(loading){
        return <p>Loading...</p>
    }

    if(error){
        return <p>Error...</p>
    }

    return(
        <div>
            <h1>Fetched Data</h1>
          
          
         
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
  }
}

export default DataFetcher