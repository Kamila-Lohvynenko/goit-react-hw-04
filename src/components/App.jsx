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
  const [modalIsOpen, setIsOpen] = useState(false);
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function getData() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchImages(query, page);
        console.log(data);
        setImages(prevImages => {
          return [...prevImages, ...data];
        });
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

  const handleOpenModal = ({ regular, alt_description }) => {
    console.log(regular);
    setImageData({ regular, alt_description });
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
      {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
      {isLoading && <Loader />}
      {error && <ErrorMessage />}

      <CustomModal
        isOpen={modalIsOpen}
        closeModal={handleCloseModal}
        imageData={imageData}
      />
    </>
  );
}

export default App;
