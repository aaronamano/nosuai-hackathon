import os
from openai import OpenAI

# Set up the Nebius AI client
client = OpenAI(
    base_url="https://api.studio.nebius.ai/v1/",
    api_key=os.environ.get("NEBIUS_API_KEY"),
)

# Define the task prioritization prompt
completion = client.chat.completions.create(
    model="meta-llama/Meta-Llama-3.1-70B-Instruct",
    messages=[
        {
            "role": "user",
            "content": "I have the following tasks: \n"
                       "1. Submit the quarterly report (due in 2 days).\n"
                       "2. Schedule a team meeting (no deadline).\n"
                       "3. Review the new project proposal (due tomorrow).\n"
                       "4. Respond to client feedback (due in 5 days).\n\n"
                       "Please prioritize these tasks based on urgency and importance."
        }
    ],
    temperature=0.6
)

# Print the result
print(completion.to_json())