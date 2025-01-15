from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
import os
from dotenv import load_dotenv
from openai import OpenAI

# Load environment variables
load_dotenv()

# Get the API key from environment variables
api_key = os.getenv("NEBIUS_API_KEY")
if not api_key:
    raise ValueError("API key not found.")

# Set up OpenAI client
client = OpenAI(base_url="https://api.studio.nebius.ai/v1/", api_key=api_key)

# Create Flask app
app = Flask(__name__)

# Enable CORS for frontend URL (localhost:5173)
CORS(app, origins=["http://localhost:5173"])

# Define the route for prioritizing tasks
@app.route('/prioritize', methods=['POST'])
def prioritize():
    try:
        tasks = request.json['tasks']  # Get the tasks from the request
        # Process the tasks (e.g., send to OpenAI model)
        completion = client.chat.completions.create(
            model="meta-llama/Meta-Llama-3.1-70B-Instruct",
            messages=[{
                "role": "user",
                "content": f"Prioritize the following tasks:\n{tasks}"
                            "consider difficulty as a factor"
                            "consider duration as a factor"
                    
            }],
            temperature=0.6
        )
        prioritized_tasks =  completion.choices[0].message.content  # Get the result
        return jsonify({"prioritized_tasks": prioritized_tasks})  # Send back response
    except Exception as e:
        return jsonify({"error": str(e)}), 500  # Handle error if any

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)  # Ensure the server is running
