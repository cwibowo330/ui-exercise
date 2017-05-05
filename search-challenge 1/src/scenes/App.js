import React, { Component } from 'react';
import docs from '../data/docs';
import { addDoc, search } from '../services/SearchService';

class App extends Component {
  constructor() {
    super();

    this.state = { searchTerm: '', docs: [] };
    this.searchDocs = this.searchDocs.bind(this);
  }

  componentDidMount() {
    docs.forEach(doc => addDoc(doc));
  }

  searchDocs() {
    const docs = search(this.state.searchTerm);

    this.setState({
      docs,
      query: this.state.searchTerm,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h1>Search presidents</h1>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div className="form-inline">
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="enter a search term"
                  value={this.state.searchTerm}
                  onChange={(event) => {
                    this.setState({ searchTerm: event.target.value });
                  }}
                />
              </div>
              <button
                className="btn btn-primary"
                onClick={this.searchDocs}
              >
                search
              </button>
            </div>
            {
              this.state.query &&
                <div className="form-group">
                  <p className='help-block'>
                    you searched for: {this.state.query}
                  </p>
                </div>
            }
          </div>
        </div>
        {
          this.state.docs.map(doc => (
            <div className="row" key={doc.title.replace(' ', '-')}>
              <div className="col-xs-12">
                <h3>{doc.title}</h3>
                <p>{doc.body}</p>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default App;
