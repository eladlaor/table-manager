# Cemento Evaluation Process: Stage 2

## Overview

This is a web application that allows you to manage and edit tabular data. It provides features such as table filtering, pagination, and cell editing.

## Getting Started

### Prerequisites

- Node.js installed.

### Installation

Clone the repository to your local machine:

`git clone https://github.com/your-username/cemento-task.git`

Navigate to the project directory:
`cd cemento-task`

Install the project dependencies:
`npm install`

### Usage

Start the development server:
`npm start`
Open your web browser and navigate to http://localhost:3000 to access the application.

### Features

#### Editing Data

Double click on a cell in the table to edit its content.

#### Filtering Columns

Use the filter component to show or hide columns in the table.

#### Pagination

Navigate through pages of data using the pagination component.

Use the `src/config.ts` file to adjust the number of items per page.

The app also uses virtualization (react-window) for lazy loading in cases where there are many items per page.

#### Data Persistence

The application uses localStorage to save (locally) your data and column visibility preferences.

Your changes will be saved even after closing and reopening the browser.
