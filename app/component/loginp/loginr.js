// Include React
var React = require("react");




var registeru = React.createClass({

  // Here we set a generic state associated with the number of clicks
  getInitialState: function() {
    return { term : "" , start : ""};
  },

  // componentDidUpdate is a lifecycle event which runs every time AudreyII's state is changed
  // In this case, whenever a child is clicked.
  // Here we have access to the the previous props and previous state from before the update
  componentDidMount: function() {
  
      //console.log("hello")
     
    // Since our component recieves no props, we'll log out just the current and previous state each
    // time the component updates.
    
  },

  // Here we create a function for updating the AudreyII's consumed state based on clicks received by the child
  // We will then give the child access to this function
  handleChange: function(event) {
      // var socketsMan = io.connect(); 
       //socketsMan.emit('yo', "hahaha");
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
     //console.log(this.state.term);
     //console.log(this.state.start);
     // console.log(this.state.end);


  },
  handleSubmit: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    //var socketsMan = io.connect(); 
    event.preventDefault();
    //this.setState(this.state.list : {});
   // console.log( this.state );
    var socketsMan = io.connect(); 
    var sendate = {
         name : this.state.term,
         desc : this.state.start 
         
 
    }
    //console.log(sendate);
    
     socketsMan.emit('userSave', sendate);
     //socketsMan.on('receiveU', function(message) {

       console.log(sendate);
      
      //});	
     
    
   // console.log("begin");     
   // console.log(this.state.list);
    //console.log("end");   
    //console.log(helpers);
    // socketsMan.emit('submit', this.state);
    /*
    helpers.getSaved({ title: this.state.term })
      .then(function(response) {
       
        console.log(response);
      }.bind(this));
         


    // Set the parent to have the search term
    //this.props.setTerm(this.state.term);
    */

  },

  

  // Here we describe our component's render method
  render: function() {
    return (
      <div className="container">
         

        <div className="row">


          <div className="jumbotron">
            

          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h4 className="">
                <strong>Register</strong>
              </h4>

              {/*
                Note how each of the form elements has an id that matches the state.
                This is not necessary but it is convenient.
                Also note how each has an onChange event associated with our handleChange event.
              */}
              <input
                value={this.state.term}
                type="text"
                className="form-control text-center"
                id="term"
                onChange={
                          this.handleChange}
                required
              />
              <input
                value={this.state.start}
                type="text"
                className="form-control text-center"
                id="start"
                onChange={
                          this.handleChange}
                required
              />
              


              <br />
              <button
                className="btn btn-primary"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
                  
          </div>
        </div>
          
          

   


      </div>
    );
  }
});

module.exports = registeru;
