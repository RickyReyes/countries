# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Continued development](#continued-development)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode

### Screenshot

![](./countries-ss.png)

### Links

- Solution URL: [https://github.com/RickyReyes/countries](https://github.com/RickyReyes/countries)
- Live Site URL: [https://countries-ochre.vercel.app/](https://countries-ochre.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Sass variables, mixins, and nesting
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Font Awesome](https://fontawesome.com) - icons
- Vanilla JavaScript
- [REST Countries](https://restcountries.com/) - RESTful API

## Continued development
- In the future, I would simplify the code with React. Each country can be a component, and the dark mode can exist in state.

## What I learned
### Fetching data from an RESTful API
- I learned how and when to use fetch, async, await, try, catch.
- I learned how to access an object's properties, and render them to the page in a succinct way by using the map() method and the join method.

### Implementing Dark Mode
- I created a boolean variable named "dark", and an array for all the elements that would change when dark mode is selected.
- I created a dark class for each element in the array, and toggled it when the Dark Mode link was clicked.

### Styling a `select` dropdown  
<<<<<<< HEAD
- I learned that default styling in place for <select> dropdowns
and that it varies from browser to browser. Some articles suggest using JavaScript in order to style the dropdown.  

### Using async, await and fetch  
- This was my first time using an external API for data, and fetch() to retrieve it. At first, I was getting an error because I was trying to work with the data before JavaScript had successfully retrieved it.  

- I researched and learned about synchronous and asynchronous code, and how JavaScript delegates asynchronous code to the browser, in either a microtask queue (higher priority) or a macrotask queue (lower priority). I also learned that functions defined with the async keyword return a Promise, which represents a future unknown value. You can chain functions onto a Promise, which will trigger upon a succesful completion (using .then) or upon failure (using .catch).  

### Working with REST API data  
- Accessing the data I needed was not a straightforward task. Once I had an array of objects that each represented a country, some pieces of information, like the country's name,  were easy to obtain (country.name.common), while other's, like the country's native name, required some more work (Object.values(country.name.nativeName)[0].common).  

```js
const endpoint = 'https://restcountries.com/v3.1/all';
async function fetchCountries() {
  const response = await fetch(endpoint);
  countries = await response.json();
  renderCountries(countries);
  ul.addEventListener('click', handleDetailClick);
}
```

### Continued development  

- I am now using the REST Countries API to work on a simple game about flags. In the near future, I am planning to discover more APIs and see what I can build with them. I feel that I have opened a new world of possibilites, having learned fetch() and how to pull values I need.  

### Useful resources  

- [freeCodeCamp Article](https://www.freecodecamp.org/news/async-await-javascript-tutorial/) - This helped me understand what goes on when using async, await, and fetch.  
- [Kevin Powell video on CSS Grid](https://www.youtube.com/watch?v=rg7Fvvl3taU) - Kevin is my go-to person on YouTube whenever I need to touch up on some CSS skills.

## Author  

- Frontend Mentor - [@RickyReyes](https://www.frontendmentor.io/profile/RickyReyes)  
- Twitter - [@RKYNTR](https://www.twitter.com/RKYNTR)
=======
- I learned that the default styling in place for <select> dropdowns varies from browser to browser. It is not easy to style these dropdowns using CSS, and it is recommended to use JavaScript if one wished to change the default styling. 
>>>>>>> 6fd9da313923c596d220ee25b6008645d181c9c5
