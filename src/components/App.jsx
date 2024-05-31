import { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import { fetchImages } from '../api';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import CustomModal from './CustomModal/CustomModal';

function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [imageData, setImageData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (query.trim() === '') {
      return;
    }
    async function getData() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchImages(query, page);
        console.log(data);
        setImages(prevImages => {
          return [...prevImages, ...data.results];
        });
        setShowLoadMore(data.total_pages && data.total_pages !== page);
        setNotFound(data.total_pages === 0);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [page, query]);

  const handleSearch = query => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleOpenModal = ({
    regular,
    alt_description,
    name,
    profile_image,
  }) => {
    setImageData({
      regular,
      alt_description,
      name,
      profile_image,
    });
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
    setImageData(null);
  };
  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {images.length > 0 && (
        <ImageGallery images={images} openModal={handleOpenModal} />
      )}
      {images.length > 0 && showLoadMore && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {isLoading && <Loader />}
      {error && <ErrorMessage />}

      <CustomModal
        isOpen={modalIsOpen}
        closeModal={handleCloseModal}
        imageData={imageData}
      />
      {notFound && <p>Nothing is found with your request {query}</p>}
    </>
  );
}

export default App;
