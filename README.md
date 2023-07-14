## Table of Contents

- [Table of Contents](#table-of-contents)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Setup / Installation](#setup--installation)

# Health Application
## Requirements

- NodeJS 16+ (latest LTS, which should be 18 by now, is recommended)

## Quick Overview

### Problem

Arent3d's assessment is not complicated, but the amount of things that need to be solved is considerable. It must:

- Comply with the design (color palette, font families,...)
- There are three screens with different kinds of component.
- It must emulate real-world use cases such as click-to-scroll, data filtering, data fetching,...
- While it's not required, but mobile-screen responsibility is a plus, so I decided to implement it anyway.
- It has charts (to be more precise, Line Chart), and it should display some data, with filters.

### Solution
- I decided to use **NextJS**. So I don't need to care about setting up routing, also Vercel can host it for me.
- I created **Mock API** requests to fetch mock data and display them on the pages.
- I used **Tailwind CSS** to style the application. To simulate real API requests, 

### \*\*\* **Bonus features** \*\*\* :

- On Top page, implement **filter** functions that allow users to filter meals by clicking on categories: Morning, Lunch, Dinner, and Snack.
- Implement **mock APIs** that simulate real API requests and return mock data for the following APIs:

  - Achievement rate API
  - Body record graph API
  - Meal history API
  - My exercise API
  - My diary API
  - Article API

- Display a **loading spinner** while fetching data from each API for every widget.
- Make all three pages **responsive** on all screen sizes.
- Write a few **test cases** to demonstrate the testing aspect.
- Make **load more** data diary,article,meal history API when user click button
- Custom **404 page** when the route not correct  

### Demo

Github Repo: [Repo link](https://github.com/phandinhhuyptit/arent-health-web-test)

To verify that the application is working as intended, please visit these links (or you can run locally - see below):

- [Top page](https://arent-health-web-test-3bje.vercel.app/)
- [My Record Page](https://arent-health-web-test-3bje.vercel.app/my-record)
- [Column Page](https://arent-health-web-test-3bje.vercel.app/column)

[Back to Table of Contents](#table-of-contents)

## Technologies

### Core

- **React (18.2.0)**
- **NextJS**
- **TypeScript**

### Styling

- **Tailwind CSS**: used for styling components, page layout,...

### Testing

- **React testing library**: React component testing
- **Jest**: utility testing

### Hosting and Deployment

- **Vercel**: hosting & continuous deployment

[Back to Table of Contents](#table-of-contents)## Project Structure

## Project-structure
```
api
└── mockData         ---> Mock data (meals, diary, graph data,...)      
public               ---> Contains images, icons, etc.
├── icons
└── images
hooks                ---> Reusable custom hooks (e.g API fetch)
layouts              ---> Layout components defining common structure of a page which then used in all pages
components           ---> Components used in a page 
├── PageAComponent
|── PageBComponent 
└── PageCComponent
shared               ---> Components shared across all pages
services             ---> Mock API fetch mock data
├── images           
pages
├── pageA            ---> A page of the application (correspond to a route)
|   └── index.tsx
├── pageB
|    └── index.tsx
types                ---> Contains custom Typescript typing definitions.
├── api.types.ts  
├── data.types.ts
styles               ---> Contains custom Css for components and pages
├── global.css       
utils
├── moduleA          ---> Util module for important calculation
├──  tests           ---> Unit tests for each module
|       ├── fn1.test.ts
|       ├── fn2.test.ts
    ...
tailwind.config.js   ---> define global style variables such as colors + plugins
README.md
```


[Back to Table of Contents](#table-of-contents)

## Setup / Installation

`node` and `npm` (or `yarn`) are required to be installed on your machine.

Clone this repository.

At the root directory:

Install packages: `yarn install` (or npm install)

Then, run the development server:

```bash
yarn dev
# or
npm run dev
# or
npm dev
```

## Note

_It usually run on port 3000. Access localhost:3000 for the dev website_

I also include a Dockerfile for Docker deployment, if you are into that as well. It runs on port 4173 by default so you might want to forward the port later.
