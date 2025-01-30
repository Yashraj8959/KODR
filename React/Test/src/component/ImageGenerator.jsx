import React, { useState } from 'react';
import { GoogleGenerativeAI, GoogleAIFileManager } from '@google/generative-ai';

const ImageGenerator = () => {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleImageUpload = async (event) => {
    try {
      const file = event.target.files[0];
      const fileManager = new GoogleAIFileManager(AIzaSyCWmcMddVOq-BbSnP09dyNsvLC8JX0j5lQ); 

      const uploadResult = await fileManager.uploadFile(
        file, 
        { 
          mimeType: file.type, 
          displayName: file.name 
        }
      );

      console.log(`Uploaded file ${uploadResult.file.displayName} as: ${uploadResult.file.uri}`);
      setImage(uploadResult.file.uri); 

    } catch (err) {
      console.error("Error uploading image:", err);
      setError("Error uploading image. Please try again.");
    }
  };

  const handleImageDescription = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const genAI = new GoogleGenerativeAI(AIzaSyCWmcMddVOq-BbSnP09dyNsvLC8JX0j5lQ);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const result = await model.generateContent([
        "Tell me about this image.",
        {
          fileData: {
            fileUri: image, 
            mimeType: "image/jpeg", // Adjust mimeType based on the actual image type
          },
        },
      ]);

      setDescription(result.response.text); 
    } catch (err) {
      console.error("Error generating description:", err);
      setError("Error generating image description. Please try again.");
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
          {/* Display the uploaded image (if desired) */}
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

export default ImageGenerator;