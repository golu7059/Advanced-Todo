# Todos Application with Context API

This project is a React-based Todo Application that leverages the Context API for global state management. It allows users to manage their tasks efficiently with features such as adding tasks, marking tasks as completed, and toggling task importance. The application is fully responsive and includes a dynamic theme switching feature.

## Features

- **Add Tasks**: Users can add new tasks with optional importance and a due date.
- **Mark Complete**: Tasks can be marked as completed or uncompleted.
- **Toggle Importance**: Mark tasks as important for better visibility.
- **Dynamic Theming**: Light and dark themes available.
- **Responsive Design**: Optimized for mobile, tablet, and desktop screens.

## Live Demo

Access the live application here: [Todos App Live](#)

## Screenshots

![Home Page - Light Theme](#)
*Home page in light theme with tasks and completed section.*

![Adding a Task](#)
*Adding a new task to the todo list.*

![Home Page - Dark Theme](#)
*Home page in dark theme for better accessibility.*

## Setup Instructions

Follow these steps to set up and run the application locally:

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/todos-app.git
   cd todos-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Development Server**
   ```bash
   npm start
   ```
   This command starts the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

4. **Build for Production**
   ```bash
   npm run build
   ```
   This builds the app for production to the `build` folder.

### Deployment

Deploy your application using your preferred free hosting service. Here's an example using Vercel:

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy the Application**
   ```bash
   vercel
   ```

3. **Provide Live URL**
   Once deployed, you will receive a live URL for the application.

## Project Structure

```plaintext
src/
├── components/
│   ├── Todos.js          # Main Todos component
├── context/
│   ├── GlobalContext.js  # Context API setup
├── styles/
│   ├── App.css           # Styling for the application
├── App.js                # Main app entry point
├── index.js              # ReactDOM entry point
```

## Technologies Used

- **Frontend**: React, Context API
- **Icons**: React Icons
- **Styling**: TailwindCSS
- **Hosting**: Vercel (or any preferred hosting service)

## Contributing

Contributions are welcome! If you have ideas or bug fixes, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Vercel](https://vercel.com/)

---

For any issues or inquiries, please contact [your-email@example.com](mailto:your-email@example.com).

