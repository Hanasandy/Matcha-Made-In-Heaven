// Include React as a dependencyy
var React = require("react");


var Results = React.createClass({
  // Here we will save states for the contents we save
  getInitialState: function() {
    return {
      product: "",
      name: ""
    };
  },
 
 
  // This code handles the sending of the search terms to the parent Search component
  handleClick: function(product) {
    console.log("CLICKED");
    var socketsMan = io.connect(); 
    var name = product.Name + "";
    socketsMan.emit( 'productDelete', name); 
    socketsMan.on('reback', function(message) {
       console.log(message);
       window.location.reload();
      
    }); 
    
    
  },
  // A helper method for mapping through our articles and outputting some HTML
  renderArticles: function() {
    return this.props.listp.docs.map(function(product, index) {
      // Each article thus reperesents a list group item with a known index
      return (
        <div key={index}>
          <li className="list-group-item">
            <h3>
              <span>
                <em>{product.Name}</em>
              </span>
              <span className="btn-group pull-right">
              
                
                <button className="btn btn-primary" onClick={() => this.handleClick(product)}>delete</button>
              </span>
            </h3>
            <p>product price: {product.Price}</p>
          </li>
        </div>
      );
    }.bind(this));
  },
  // A helper method for rendering a container to hold all of our articles
  
  renderContainer: function() {
    return (
     <div className="main-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h1 className="panel-title">
                  <strong>
                    <i className="fa fa-list-alt"></i>
                    Results
                  </strong>
                </h1>
              </div>
              <div className="panel-body">
                <ul className="list-group">
                 {this.renderArticles()}
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    

    );
  },

  render: function() {
    
    // If we have no articles, render this HTML
    if (!this.props.listp.docs) {
      return (
        <div>
        No Data
        </div>
      );
    }else{
      return this.renderContainer()
    }

  }
   
});

// Export the module back to the route
module.exports = Results;