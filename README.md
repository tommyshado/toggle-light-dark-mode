# Toggle Light Dark Mode

A React TypeScript application that demonstrates light and dark theme switching functionality with Highcharts integration. This project serves as a reference implementation for theme toggling patterns that can be applied to production applications.

## 📋 Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Components](#components)
- [Theme System](#theme-system)
- [Development](#development)
- [Build](#build)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Theme Toggle**: Seamless switching between light and dark modes
- **Chart Integration**: Highcharts with theme-aware styling
- **TypeScript Support**: Full type safety and IntelliSense
- **React Hooks**: Modern React patterns with useState and useEffect
- **Responsive Design**: Works across different screen sizes
- **Fast Development**: Powered by Vite for instant hot reloading

## 🎯 Demo

The application displays an interactive line chart with multiple data series and a theme toggle button. Users can switch between light and dark modes, which dynamically updates:

- Chart background colors
- Text colors (titles, labels, legends)
- Axis styling
- Overall visual theme

## 🛠 Technologies

- **Frontend Framework**: React 19.1.1
- **Language**: TypeScript 5.9.3
- **Build Tool**: Vite 7.1.7
- **Charts Library**: Highcharts 12.4.0 with React wrapper
- **Styling**: CSS with dynamic theme variables
- **Package Manager**: PNPM
- **Linting**: ESLint with React-specific rules

## 📁 Project Structure

```
toggle-light-dark-mode/
├── public/                 # Static assets
├── src/
│   ├── App.tsx            # Main application component
│   ├── App.css            # Application styles
│   ├── main.tsx           # Application entry point
│   ├── ThemeToggleButton.tsx  # Theme switcher component
│   ├── BaseOptions.ts     # Base Highcharts configuration
│   ├── DarkTheme.ts       # Dark theme configuration
│   ├── LightTheme.ts      # Light theme configuration
│   └── assets/            # Image and icon assets
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
├── tsconfig.app.json      # App-specific TypeScript config
├── tsconfig.node.json     # Node-specific TypeScript config
└── eslint.config.js       # ESLint configuration
```

## 🚀 Installation

### Prerequisites

- Node.js (version 16 or higher)
- PNPM (recommended) or npm/yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/tommyshado/toggle-light-dark-mode.git
   cd toggle-light-dark-mode
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 📖 Usage

### Basic Theme Toggling

The application automatically starts in light mode. Click the theme toggle button to switch between modes:

- **Light Mode**: White background with dark text
- **Dark Mode**: Dark background with white text

### Chart Interaction

The Highcharts component is fully interactive:
- Hover over data points for tooltips
- Click legend items to show/hide series
- Zoom and pan functionality (if enabled)

## ⚙️ Configuration

### Customizing Chart Data

Edit `src/BaseOptions.ts` to modify chart data and configuration:

```typescript
const baseOptions: Highcharts.Options = {
  title: {
    text: "Your Custom Chart Title"
  },
  series: [
    { type: "line", name: "Your Series", data: [/* your data */] }
  ]
};
```

### Theme Customization

#### Dark Theme (`src/DarkTheme.ts`)
```typescript
const DarkTheme: Highcharts.Options = {
  chart: { backgroundColor: "#1e1e1e" },
  title: { style: { color: "#ffffff" } },
  // Add more styling options
};
```

#### Light Theme (`src/LightTheme.ts`)
```typescript
const LightTheme: Highcharts.Options = {
  chart: { backgroundColor: "#ffffff" },
  title: { style: { color: "#000000" } },
  // Add more styling options
};
```

## 🧩 Components

### App Component (`src/App.tsx`)

The main application component that:
- Manages theme state using `useState`
- Handles theme switching logic
- Combines base options with theme-specific configurations
- Renders the chart and toggle button

### ThemeToggleButton Component (`src/ThemeToggleButton.tsx`)

A simple, reusable button component that:
- Accepts theme state and toggle function as props
- Displays current theme mode
- Triggers theme switching on click

### Theme Configuration Files

- **BaseOptions.ts**: Core chart configuration shared across themes
- **DarkTheme.ts**: Dark mode specific styling overrides
- **LightTheme.ts**: Light mode specific styling overrides

## 🎨 Theme System

The theme system uses a merge pattern where base options are combined with theme-specific overrides:

```typescript
// Theme switching logic
useEffect(() => {
  if (theme === 'dark') {
    const darkOptions = { ...baseOptions, ...DarkTheme };
    setOption(darkOptions);
  } else {
    const lightOptions = { ...baseOptions, ...LightTheme };
    setOption(lightOptions);
  }
}, [theme]);
```

This pattern ensures:
- **Separation of concerns**: Base configuration separate from theming
- **Maintainability**: Easy to add new themes or modify existing ones
- **Consistency**: Shared base ensures consistent behavior across themes

## 💻 Development

### Available Scripts

- `pnpm dev` - Start development server with hot reloading
- `pnpm build` - Build for production
- `pnpm lint` - Run ESLint for code quality checks
- `pnpm preview` - Preview production build locally

### Code Quality

The project uses ESLint with React-specific rules for maintaining code quality:
- React Hooks rules
- React Refresh compatibility
- TypeScript integration
- Modern JavaScript standards

## 🏗 Build

### Production Build

```bash
pnpm build
```

This creates optimized files in the `dist/` directory:
- Minified JavaScript bundles
- Optimized CSS
- Static assets with cache headers
- Source maps for debugging

### Preview Production Build

```bash
pnpm preview
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Submit a pull request

### Development Guidelines

- Follow TypeScript best practices
- Use functional components with hooks
- Maintain consistent code formatting
- Add appropriate type annotations
- Test theme switching functionality

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Note**: This application is designed as a learning and demonstration tool for implementing theme switching in React applications with chart libraries. The patterns and techniques used here can be adapted for production applications with more complex theming requirements. 

