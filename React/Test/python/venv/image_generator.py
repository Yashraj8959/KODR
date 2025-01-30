from flask import Flask, request, jsonify
from PIL import Image
import tensorflow as tf
import tensorflow_hub as hub

# Load the pre-trained model (replace with your chosen model URL)
model = hub.load('https://tfhub.dev/deepmind/biggan-deep128-128/1')

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'  # Enable CORS for React app

@app.route('/generate', methods=['POST'])
def generate_image():
    try:
        data = request.get_json()
        prompt = data.get('prompt')

        # Preprocess prompt (optional, depending on model requirements)
        # ... (e.g., convert text to a numerical representation)

        # Generate latent vector (replace with model-specific logic)
        latent = tf.random.normal(shape=(1, 128))  # Example for BigGAN

        # Generate image from latent vector
        generated_image = model(latent)[0]
        generated_image = generated_image.numpy()

        # Post-process image (optional, e.g., normalization)
        # ...

        # Convert image to PIL format
        generated_image = Image.fromarray(generated_image.astype('uint8'))

        # Save the image (optional)
        # generated_image.save('generated_image.jpg')

        # Return base64 encoded image
        with open('generated_image.jpg', 'rb') as f:
            image_bytes = f.read()
            return jsonify({'imageUrl': 'data:image/jpeg;base64,' + base64.b64encode(image_bytes).decode()})

    except Exception as e:
        print(f"Error generating image: {e}")
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)