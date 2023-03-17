import React from 'react'
import queryString from 'query-string'
 
class Home extends React.Component{
 
state = {
    site: 'unknown',
    subject: 'i dont know'
  }
   
  handleQueryString = () => {
    // Parsing the query string 
    // Using parse method
    let queries = queryString.parse(this.props.location.search)
    console.log(queries)
    this.setState(queries)
  }
   
  render() {
    return (
      <div style={{ margin: 200 }}>
           
      <p> WebSite: {this.state.site} </p>
   
           
      <p> Subject: {this.state.subject} </p>
   
        <button
          onClick={this.handleQueryString}
          className='btn btn-primary'>
          click me </button>
      </div>
    );
  }
}
   
export default Home;