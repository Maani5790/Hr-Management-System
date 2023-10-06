import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Logo from '../assets/download.png';
import { Link } from 'react-router-dom';

const Images = () => {
  const [images, setImages] = useState([1]);

  useEffect(() => {
    fetchImages(); 
    const interval = setInterval(fetchImages, 5000);

    autoCaptureScreenshot();
    

    return () => clearInterval(interval);
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get('http://server.rightclixs.com/images');
      setImages(response.data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://server.rightclixs.com/images/${id}`);
      setImages(images.filter(image => image.id !== id));
    } catch (error) {
      console.error('Error deleting image:', error);
    }
    
  };

  const handleZoom = (imageId) => {
    const updatedImages = images.map((image) => {
      if (image._id === imageId) {
        return { ...image, zoomed: !image.zoomed };
      }
      return image;
    });
    setImages(updatedImages);
  };

  const autoCaptureScreenshot = async () => {
    try {
      const response = await axios.get('http://server.rightclixs.com/start-capture');
      console.log(response.data.message);
    } catch (error) {
      console.error('Error starting auto-capture:', error);
    }
  };


  return (
    <>

<div className="flex" style={{ backgroundColor: '#131324' }}>
     
<nav className="w-1/5 h-screen p-4">
        <div className="text-white mb-4">
          <img src={Logo} className="w-20 h-14 text-white mb-4" alt="Logo" />
        </div>
        <ul>
          <li>
            <Link
              to="/home"
              className="text-white hover:text-gray-200 block mb-2"
            >
              Dashboard
            </Link>
          </li>
          <div className="my-2 border-t border-gray-600"></div>
          <li>
            <Link
              to="/myteam"
              className="text-white hover:text-gray-200 block mb-2"
            >
              My Team
            </Link>
          </li>
          <div className="my-2 border-t border-gray-600"></div>
          <li>
            <Link
              to="/screen-shots"
              className="text-white hover:text-gray-200 block mb-2"
            >
              All Screen Shots
            </Link>
          </li>
          <div className="my-2 border-t border-gray-600"></div>
          <li>
            <Link
              to="/overview"
              className="text-white hover:text-gray-200 block mb-2"
            >
              overview
            </Link>
          </li>
         
        </ul>
      </nav>
      <div className='min-h-screen'>
      <div className="images-container p-8">
        <h2 className="text-3xl text-white flex justify-center font-semibold mb-6">Image Gallery</h2>
        <div className="image-grid mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-scroll" style={{ maxHeight: 'calc(100vh - 200px)' }}>
          {images.map((image) => (
            <div key={image.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={`http://server.rightclixs.com/images/${image.id}`}
                className={`w-full ${image.zoomed ? 'transform scale-110' : ''}`}
                alt={`Image ${image.id}`}
              />
              <div className="p-4">
                <button className="bg-red-500 text-white px-3 py-1 rounded-md mr-2" onClick={() => handleDelete(image.id)}>Delete</button>
                <button className="bg-green-500 text-white px-3 py-1 rounded-md" onClick={() => handleZoom(image._id)}>
                  {image.zoomed ? 'Zoom Out' : 'Zoom In'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    </>
  
  );
};

export default Images;
