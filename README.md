# Comments Dashboard App

This is a simple React frontend project that showcases user comments in a structured, interactive table. It includes routing between two pages: a **Dashboard** and a **Profile** page. The Dashboard supports advanced features like pagination, sorting, and search functionality.

## 🖼️ Project Structure

- **Dashboard Page (`/`)**
  - Displays comments in a table format
  - Fields: Post ID, Name, Email, Comment
  - Features:
    - Pagination (10 / 50 / 100 records per page)
    - Sorting by Post ID, Name, or Email
    - Single Search bar (search across Name, Email, and Comment)

- **Profile Page (`/profile`)**
  - Shows static or fetched user details

- **Navigation**
  - Implemented using React Router (`<Link>` components for navigation)


```
https://your-live-demo-link.com
```
## Tech Stack
- React (with Functional Components & Hooks)

- React Router DOM

- HTML/CSS (for styling)

- JavaScript (ES6+)

- JSONPlaceholder API (for dummy data)

##  Installation & Setup
1. Clone the repository
```
git clone https://github.com/saibabu-7272/swift-project
cd react-comments-dashboard
```
2. Install dependencies
```
npm install
```
3. Start the development server
```
npm start
```
4. Open your browser and go to http://localhost:3000

## Folder Structure
```
src/
├── components/
│   ├── CommentItem.js
│   |── UserDetailsField.js
|   |── Header.js
├── pages/
│   ├── Dashboard.js
│   |── Profile.js
│   
├── App.js
├── index.js
└── App.css

```
## Features Summary

| Feature             | Description                                                 |
| ------------------- | ----------------------------------------------------------- |
| Pagination          | Choose how many records per page: 10, 50, 100               |
| Sorting             | Sort comments by Post ID, Name, or Email                    |
| Search              | Search works for Name, Email, and Comment fields            |
| Routing             | Navigation between Dashboard and Profile using React Router |
| Reusable Components | Components are modular and easy to maintain                 |

## API Used
```
https://jsonplaceholder.typicode.com/users
https://jsonplaceholder.typicode.com/comments
```
