import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai'; 
import OpenAI from "openai";
const openai = new OpenAI();

const ImageGenerator = () => {
    const [image, setImage] = useState(null);
    const [prompt, setPrompt] = useState('');
    const [imageUrl, setImageUrl] = useState('')
    const [openaiResponse, setOpenaiResponse] = useState('');
    
    const handleGenerateImage = async () => {
        try {
            const response = await openai.chat.completions.create({
                model: "gpt-4o-mini",
                messages: [
                  {
                    role: "user",
                    content: [
                      { type: "text", text: "What's in this image?" },
                      {
                        type: "image_url",
                        image_url: {
                          "url": imageUrl,
                        },
                      },
                    ],
                  },
                ],
              });
              
              console.log(response.choices[0]);
              setOpenaiResponse(response.data);
    //   setImage(response.data[0].url);
    //   const result = await model.generateImages(prompt); 

    //   const imageUrl = result.response.data.images[0].url; 
    //   setImage(imageUrl); 
    } catch (error) {
      console.error('Error generating text:', error);
      setImage(null); 
    }
  };

  return (
    <div className="container mx-auto p-4"> 
    <h2 className="text-2xl font-bold mb-4 text-center">AI Image Generator</h2>
    <div className="flex flex-col items-center">
      <textarea 
        placeholder="Enter your prompt here..." 
        value={prompt} 
        onChange={(e) => setPrompt(e.target.value)} 
        className="w-full max-w-md p-4 rounded-lg border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" 
      />
      <button 
        onClick={handleGenerateImage} 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Generate Image
      </button>
    </div>

    {image && (
      <div className="mt-8">
        <img src={image} alt="Generated Image" className="rounded-lg shadow-md" />
      </div>
    )}
  </div>
  )
}

export default ImageGenerator
