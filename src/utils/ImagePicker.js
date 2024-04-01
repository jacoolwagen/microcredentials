// ImagePicker.js
import React, { useEffect, useState } from 'react';
import { fetchImagesFromPinata } from './pinata';

import styles from '../Minter.module.css';


const ImagePicker = ({ onImageSelected }) => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); 

  useEffect(() => {
    const loadImages = async () => {
      try {
        const fetchedImages = await fetchImagesFromPinata();
        console.log(fetchedImages); // Debugging line
        setImages(fetchedImages);
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };
  
    loadImages();
  }, []);

   // Function to handle image selection
   const handleImageSelect = (image) => {
    setSelectedImage(image.url);
    onImageSelected(image.url);
  };
  
    // If there are no images, display loading message
    if (images.length === 0) {
      return <div>Loading images...</div>;
    }

    return (
      <div className={styles.imagePicker}> {/* Use the CSS module for styling */}
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt="Selectable"
            onClick={() => handleImageSelect(image)}
            className={selectedImage === image.url ? styles.selectedImage : ''} // Apply selected style
          />
        ))}
      </div>
    );
  };
  
  export default ImagePicker;
