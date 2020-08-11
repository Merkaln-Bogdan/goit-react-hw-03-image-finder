import React, { Component } from "react";
import style from "./Searchbar.module.css";

export default class SearchForm extends Component {
  static defaultProps = {
    inputValue: "",
  };
  state = {
    inputValue: "",
  };

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  render() {
    return (
      <header className={style.Searchbar}>
        <form className={style.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={style.SearchFormButton}>
            <span className={style.SearchFormButtonLabel}>Поиск</span>
          </button>
          <input
            className={style.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
