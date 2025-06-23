## how to get started
1. git clone
2. create a .env file under `nosuai-hackathon\`
3. in the .env file add `NEBIUS_API_KEY=<your api key as a string>` 
4. under `nosuai-hackathon\` create a virtual environment using `python -m venv venv` or `python3 -m venv venv` 
5. in the terminal under `nosuai-hackathon\` run `venv\scripts\activate` and install the necessary packages
6. run `cd frontend` and under `@\frontend\` run `npm install`

## how to run the app
<h2>Backend</h2>

1. in the terminal under `nosuai-hackathon\` run `venv\scripts\activate`
2. afterwards run `python openai_api.py`

<h2>Frontend</h2>

1. in another terminal under `nosuai-hackathon\` run `cd frontend`
2. then run `npm run dev`