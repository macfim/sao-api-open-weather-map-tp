# API Integration Examples

This project demonstrates how to integrate with various public APIs using JavaScript. It provides simple, ready-to-use examples for fetching and displaying data from popular web services.

## APIs Included

- **OpenWeatherMap**: Get current weather data for any city
- **NASA**: Fetch the Astronomy Picture of the Day (APOD)
- **Open Library**: Search for books by title
- **RandomUser**: Generate random user profiles

## Prerequisites

- Node.js (v12.0.0 or higher recommended)
- npm (comes with Node.js)

## Installation

1. Clone this repository:

```bash
git clone https://github.com/yourusername/sao-api-open-weather-map-tp.git
cd sao-api-open-weather-map-tp
```

2. Install dependencies:

```bash
npm install
```

## Usage

Each API example is contained in its own file and can be run independently:

### OpenWeatherMap API

```bash
node index.js
```

This example shows how to fetch weather data for a specific city using the OpenWeatherMap API.

### NASA API (Astronomy Picture of the Day)

```bash
node index-nasa.js
```

Fetches and displays information about NASA's Astronomy Picture of the Day.

### Open Library API

```bash
node index-open-library.js
```

Demonstrates how to search for book information by title using the Open Library API.

### RandomUser API

```bash
node index-randomuser.js
```

Shows how to generate random user profiles using the RandomUser API.

## API Keys

Some APIs require authentication:

- For OpenWeatherMap, the example uses a sample API key. For production use, [get your own API key](https://openweathermap.org/api) and replace it in the code.
- For NASA API, the example uses a DEMO_KEY which has rate limitations. [Register for your own API key](https://api.nasa.gov/) for increased limits.
- Open Library and RandomUser APIs don't require authentication.

## Project Structure

- `index.js` - OpenWeatherMap API example using the request library
- `index-nasa.js` - NASA APOD API example using axios
- `index-open-library.js` - Open Library book search example using axios
- `index-randomuser.js` - RandomUser API example using axios
- Additional index files (index0.js, index1.js, index2.js) may contain alternative implementations or training exercises

## Dependencies

- [axios](https://github.com/axios/axios) - Promise based HTTP client
- [request](https://github.com/request/request) - Simplified HTTP client (deprecated but included for educational purposes)
