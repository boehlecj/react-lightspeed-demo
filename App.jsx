import React from 'react';

class App extends React.Component {
   render() {
      return (<div className="container">
        <h2>Modal CSV Parser Demo</h2>
        {/* Trigger the modal with a button */}
        <button type="button" className="btn btn-info btn-lg" id="myBtn">Open Modal</button>
        {/* Modal */}
        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">
            {/* Modal content*/}
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">×</button>
                <h4 className="modal-title">{this.props.title}</h4>
              </div>
              <div className="modal-body">
                <div className="main">
                  <form className="form-inline">
                    <div className="form-group">
                      <p>
                      {this.props.description}
                      </p>
                    <input type="file" id="files" className="form-control.input-sm" accept=".csv" required />
                    </div>
                    {/*}<div className="form-group">//
                    //  <button type="submit" id="submit" className="btn btn-primary">Submit</button>//
                    //</div>/*/}
                  </form>
                  {/*<div id="app" />*/}
                </div>
                <div className="modal-footer">
                  <button type="submit" id="submit" className="btn btn-primary">Submit</button>
                  <button type="button" id="cancel" className="btn btn-default" data-dismiss="modal">Cancel</button>
                  <input type="hidden" id="url" value={this.props.url}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  title: "Import Terms",
  description: "Upload a CSV or plain text file containing one term and severity level (1-3) per row separated by a comma. Max 500 lines.",
  url: "https://jsonplaceholder.typicode.com/posts"
}


export default App;
