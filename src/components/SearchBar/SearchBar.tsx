import React, { Component } from 'react';

interface Props {
  onSubmit: (value: string) => void;
}

interface State {
  value: string;
}

class SearchBar extends Component<Props, State> {
  state: State = {
    value: '',
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    const { onSubmit } = this.props;
    const { value } = this.state;
    onSubmit(value);
    this.setState({ value: '' });
  };

  render(): JSX.Element {
    const { value } = this.state;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            value={value}
            onChange={this.handleChange}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
