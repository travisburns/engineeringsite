# R&W Engineering Firm Website Redesign
![rwcover](https://github.com/travisburns/engineeringsite/assets/41456635/200dd038-dbdd-4d02-8f24-00d0b771b533)

A modern, responsive website showcasing engineering services and projects, built with Next.js 14 and TypeScript.
Live Site -(https://engineeringsite-kbgc64y01-travis-projects-d7f59f2c.vercel.app/)
## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Key Accomplishments](#key-accomplishments)
- [Learnings](#learnings)
- [Troubleshooting](#troubleshooting)

## Features

- Responsive design adapting to various screen sizes and devices
- Dynamic routing for services and projects
- Custom React components for improved user interaction
- Dedicated sections for services, projects, team members, and more
- Optimized for search engines and performance
- Accessibility features for inclusive user experience

## Technologies Used

- TypeScript
- Next.js 14
- React
- Tailwind CSS
- Heroicons

## Project Structure

* **src/app/**: Contains the main Next.js application code.
  * **about/**: About section with its own routing structure.
    * **affiliates/**: Affiliates subsection.
    * **careers/**: Careers subsection.
    * **components/**: Components specific to the about section.
    * **registrations/**: Registrations subsection.
    * **team/**: Team subsection.
    * **layout.tsx**: Layout component for the about section.
    * **page.tsx**: Main page component for the about section.
  * **components/**: Reusable components used throughout the app.
  * **constants/**: Constant values and configurations.
  * **contact/**: Contact section.
  * **faqs/**: FAQs section.
  * **home/**: Home page components.
  * **news/**: News section.
  * **projects/**: Projects section.
    * **[slug]/**: Dynamic routing for individual projects.
      * **[subcategorySlug]/**: Further dynamic routing for project subcategories.
    * **projectsAssets/**: Assets related to projects.
    * **projectsData/**: Data files for projects.
    * **page.tsx**: Main page component for the projects section.
  * **services/**: Services section.
    * **[slug]/**: Dynamic routing for individual services.
    * **servicesAssets/**: Assets related to services.
    * **servicesData/**: Data files for services.
    * **page.tsx**: Main page component for the services section.
  * **page.tsx**: Root page component.
  * **layout.tsx**: Root layout component.


## Key Accomplishments

Developed a fully responsive website using Next.js 14, TypeScript, and Tailwind CSS
Implemented dynamic routing for services and projects, allowing for easy content management
Created reusable components like ServicesAccordion for improved user interaction
Optimized images and implemented lazy loading for improved performance
Designed and implemented a modular structure for easier maintenance and future scalability

## Learnings

Throughout the development of this project:

Gained experience in migrating from React Router to Next.js routing system
Enhanced skills in TypeScript and type-safe development
Learned best practices for SEO optimization in Next.js applications
Improved understanding of responsive design principles using Tailwind CSS
Developed expertise in creating and managing dynamic routes in Next.js
Gained experience in implementing accessibility features in React components
Enhanced skills in performance optimization for web applications
Learned to effectively structure a large-scale web application for maintainability

## In Progress
Creation of user authentication and client portal, in addition, a admin login and page in order to create and post news and blog articles, drawing from a mongoDB database. 
Using Bcrpyt for salting and hashing of passwords. 
### created backend proccess's for account creation, bcyrpt salting and hashing, schema's, connection to MongoDb. A error remains, as when logging in the res is of a 500 error. 
### Solved the issue of logging in and a issue with styles not being applied as I should of put the pages for login, account creation, in the src/app not a folder outside of it. - however new error occures where clicking any link will auto-logout, this is due to the state not being shared across components. I will need to use useContext for the account log in. 

## Installation

```bash
# Clone the Repository
git clone []
cd rwengineering

# Install Dependencies
npm install

# Run the Development Server
npm run dev

# Build for Production
npm run build

# Start the Production Server
npm start


Troubleshooting
If you encounter any issues during development or deployment, please check the following:

Ensure all dependencies are correctly installed
Verify that your Node.js version is compatible with Next.js 14
Check for any TypeScript errors in your code
Ensure that your environment variables are correctly set up

If problems persist, please open an issue in the GitHub repository.
