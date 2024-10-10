# Recipe Book - React Course Project

Recipe Book is a **Single Page Application (SPA)** built using React, React Hooks, Fetch API, React Router, and Materialize. This project demonstrates how to work with APIs and routing in a React-based multi-page application.

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [API](#api)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

The **Recipe Book** project is a multi-page web application built with React and React Router 6.2. It allows users to browse and search for food recipes, view recipes in different categories, and see detailed information about individual dishes.

This project uses **TheMealDB** API to fetch data about food categories, meals in each category, and specific meal details.

## Features

- **Routing with React Router**: Multi-page navigation including:
  - Main page with categories of dishes
  - Page displaying meals in a selected category
  - Recipe detail page with detailed information about each meal
- **API Integration**: Fetches data from [TheMealDB API](https://www.themealdb.com/api.php).
- **Search Functionality**: Search for meals by category name on the main page.
- **Responsive Design**: Styled with Materialize CSS for a sleek and responsive user interface.

## Technologies Used

- **React**: For building the user interface and managing component states using React Hooks (`useState`, `useEffect`).
- **React Router v6.2**: For creating a multi-page navigation system within the SPA.
- **Fetch API**: For making HTTP requests to TheMealDB API.
- **Materialize CSS**: For responsive and modern UI design.
- **JavaScript (ES6)**: Modern syntax and practices in JavaScript for building the app logic.

## API

The app integrates with [TheMealDB](https://www.themealdb.com/api.php), a free API providing information on meal categories, recipes, and ingredients.

- **API Base URL**: `https://www.themealdb.com/api/json/v1/1/`
- Endpoints used:
  - Categories: `/categories.php`
  - Meals by category: `/filter.php?c={category_name}`
  - Meal details by ID: `/lookup.php?i={meal_id}`

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/recipe-book-react.git
   cd recipe-book-react
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open your browser** and go to `http://localhost:3000` to view the app.

## Usage

- Browse the main page to view a list of meal categories.
- Click on a category to view all meals within that category.
- Click on a meal to see its recipe and detailed information, including ingredients and instructions.
- Use the search bar to search for meal categories by name.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an issue for suggestions and improvements.

## License

This project is open-source and available under the [MIT License](LICENSE).