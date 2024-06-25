R&W Engineering Firm Website Redesign

R&W Engineering Firm Website Redesign is a modern, responsive website showcasing engineering services and projects. It was developed using Next.js 14 and TypeScript, migrating from an older React and React Router-based site to create a more performant and SEO-friendly application.
Features

    Responsive design: Adapts seamlessly to various screen sizes and devices.
    Dynamic routing: Enables easy management of services and projects content.
    Custom React components: Enhances user interaction and functionality.
    SEO optimization: Ensures visibility and search engine friendliness.
    Accessibility features: Enhances usability for all users.

Technologies Used

    TypeScript
    Next.js 14
    React
    Tailwind CSS
    Heroicons

Project Structure

The project is structured as follows:

    src/
        app/
            about/: About section with its own routing structure.
                components/: Components specific to the about section.
                layout.tsx: Layout component for the about section.
                page.tsx: Main page component for the about section.
            affiliates/: Affiliates subsection.
            careers/: Careers subsection.
            registrations/: Registrations subsection.
            team/: Team subsection.
            components/: Reusable components used throughout the app.
            constants/: Constant values and configurations.
            contact/: Contact section.
            faqs/: FAQs section.
            home/: Home page components.
            news/: News section.
            projects/: Projects section.
                [slug]/: Dynamic routing for individual projects.
                [subcategorySlug]/: Further dynamic routing for project subcategories.
                projectsAssets/: Assets related to projects.
                projectsData/: Data files for projects.
                page.tsx: Main page component for the projects section.
            services/: Services section.
                [slug]/: Dynamic routing for individual services.
                servicesAssets/: Assets related to services.
                servicesData/: Data files for services.
                page.tsx: Main page component for the services section.
            page.tsx: Root page component.
            layout.tsx: Root layout component.

Key Accomplishments

    Developed a fully responsive website using Next.js 14, TypeScript, and Tailwind CSS.
    Implemented dynamic routing for services and projects, allowing for easy content management.
    Created reusable components like ServicesAccordion for improved user interaction.
    Optimized images and implemented lazy loading for improved performance.
    Designed and implemented a modular structure for easier maintenance and future scalability.

Installation Guide

To run this project locally, follow these steps:

    Clone the repository:

    bash

git clone https://github.com/your-username/engineeringsite.git

Navigate into the project directory:

bash

cd engineeringsite

Install dependencies:

bash

npm install

Start the development server:

bash

npm run dev

Open your browser and visit:

arduino

http://localhost:3000
