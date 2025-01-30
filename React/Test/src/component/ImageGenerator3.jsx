import React, { useState } from 'react';
import axios from 'axios';

const ImageGenerator3 = () => {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleImageUpload = (event) => {
    const uploadedFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(uploadedFile);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  const handleImageDescription = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Replace with your actual Cloud Vision API endpoint and credentials (ensure billing is enabled)
      const response = await axios.post(
        'https://vision.googleapis.com/v1/images:annotate',
        {
          requests: [
            {
              image: {
                content: image.replace(/^data:image\/[a-z]+;base64,/, ''),
              },
              features: [
                { type: 'LABEL_DETECTION' }, // Adjust feature type as needed
              ],
            },
          ],
        },
        {
          headers: {
            'Authorization': `Bearer AIzaSyCWmcMddVOq-BbSnP09dyNsvLC8JX0j5lQ`, // Replace with your actual API key
            'Content-Type': 'application/json',
          },
        }
      );

      const labels = response.data.responses[0].labelAnnotations;
      const description = labels.map((label) => label.description).join(', ');
      setDescription(description);
    } catch (error) {
      console.error('Error getting image description:', error);
      setError('Error getting image description. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Image Description Generator</h2>
      <div className="flex flex-col items-center">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="mb-4 border rounded-md p-2"
        />
        <button
          onClick={handleImageDescription}
          disabled={isLoading}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {isLoading ? 'Describing...' : 'Get Description'}
        </button>
      </div>

      {image && (
        <div className="mt-4">
          <img src={image} alt="Uploaded Image" className="rounded-lg shadow-md max-w-md mx-auto" />
          {description && (
            <p className="mt-4 text-center">Description: {description}</p>
          )}
        </div>
      )}

      {error && (
        <p className="text-red-500 mt-4 text-center">Error: {error}</p>
      )}
    </div>
  );
};

export default ImageGenerator3;