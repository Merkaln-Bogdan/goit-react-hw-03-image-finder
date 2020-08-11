import React from "react";
import Notification from "./components/Notification/Notification";
import Spinner from "./components/Spinner/Spinner";
import Gallery from "./components/ImageGallery/ImageGallery";
import SearchForm from "./components/Searchbar/Searchbar";
import fetchQueryApi from "./services/galleryApi";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
// import PropTypes from "prop-types";
class App extends React.Component {
  static defaultProps = {
    page: 0,
    loading: false,
    showModal: null,
  };
  state = {
    gallery: [],
    loading: false,
    error: null,
    searchQuery: "",
    page: 0,
    showModal: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    if (prevQuery !== nextQuery) {
      this.fetchGallery();
    }
  }
  fetchGallery = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
    const { searchQuery, page } = this.state;
    this.setState({ loading: true });
    fetchQueryApi
      .fetchGalleryWithQuery(searchQuery, page)
      .then((gallery) =>
        this.setState((prevState) => ({
          gallery: [...prevState.gallery, ...gallery],
          page: prevState.page + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };
  handleSearchFormSubmit = (query) => {
    this.setState({ searchQuery: query, page: 1, gallery: [] });
  };
  openModalWindow = (src) => {
    this.setState({ showModal: src });
  };
  closeModalWindow = () => {
    this.setState({ showModal: false });
  };
  render() {
    const { gallery, loading, error, showModal } = this.state;
    return (
      <div>
        <SearchForm onSubmit={this.handleSearchFormSubmit} />
        {error && (
          <Notification message={`Что-то пошло не так: ${error.message}`} />
        )}
        {loading && <Spinner message="Загрузка..." />}
        {gallery.length > 0 && (
          <Gallery gallery={gallery} show={this.openModalWindow} />
        )}
        {gallery.length > 0 && <Button fetchGallery={this.fetchGallery} />}
        {showModal && (
          <Modal closeImage={this.closeModalWindow}>
            <img src={showModal} alt="" />
          </Modal>
        )}
      </div>
    );
  }
}
export default App;
// App.propTypes = {
//   fetchQueryApi: PropTypes.func.isRequired,
// };
