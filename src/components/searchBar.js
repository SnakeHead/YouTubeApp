import React, {Component} from 'react'
import { FormGroup, FormControl, Radio } from 'react-bootstrap/lib/'

export default class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
       searchTerm: '',
       order: 'date' }

       this.onInputChange = this.onInputChange.bind(this);
       this.onRadioClick = this.onRadioClick.bind(this);
       console.log("State: " + this.state.order);
  }

  onInputChange(searchTerm) {
    this.setState({ searchTerm });
    this.props.onSearchTermChanged(searchTerm);
  }

  onRadioClick(event) {
    const target = event.target;
    const value = target.value;
    console.log("Value: " + value);

    console.log("Before: " + this.state.order);
    this.setState({ order: value })
    console.log("After: " + this.state.order);
  }

  render () {
    return (
      <div className="search-bar" style={{paddingTop: '24px'}}>
        <input className="search-bar" value={ this.state.searchTerm } onChange={ (event) => this.onInputChange( event.target.value) } />

        <FormGroup>
          <FormControl
            type='text'
            value={this.state.searchTerm} placeholder='Enter search term...'
            onChange={ (event) => this.onInputChange( event.target.value) }
            />
          </FormGroup>

          <FormGroup>
            <Radio inline name='sortby' value="date" onChange={ this.onRadioClick } checked = {this.state.order === 'date'} > Date </Radio>
            <Radio inline name='sortby' value="rating" onChange={ this.onRadioClick  } checked = {this.state.order === 'rating'} > Rating </Radio>
            <Radio inline name='sortby' value="relevance" onChange={ this.onRadioClick  } checked = {this.state.order === 'relevance'} > Relevance </Radio>
        </FormGroup>
      </div>
    );
  }
}
