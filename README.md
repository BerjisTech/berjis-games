# 🎉 Party Games - Interactive House Party Guide

An vibrant, interactive web application for hosting epic party games at house parties. Display it on a big screen and let the games begin!

## ✨ Features

- **7 Epic Party Games**: Hand-picked games perfect for house parties
- **Interactive Guides**: Step-by-step instructions for each game
- **Vibrant Design**: Colorful, playful interface with smooth animations
- **Sound Effects**: Optional hover and click sounds for extra fun
- **Responsive**: Works great on TVs, tablets, and mobile devices
- **Easy Navigation**: Click any game to see detailed instructions

## 🎮 Available Games

1. **The Human Knot** - Problem-solving team game
2. **Reverse Charades** - Hilarious acting game with a twist
3. **Conducted Story** - Creative storytelling challenge
4. **Silent Line-Up** - Non-verbal communication exercise
5. **The Counting Game** - Focus and team rhythm builder
6. **Back Drawing** - Communication interpretation game
7. **Word-by-Word Story** - Quick thinking narrative builder

Each game includes:
- Detailed step-by-step instructions
- Pro tips for better gameplay
- Player count recommendations
- Estimated duration
- Difficulty level

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- Yarn package manager

### Installation

```bash
# Install dependencies
yarn install

# Start development server
yarn start

# Build for production
yarn build
```

### Development

The app runs on port 4900 by default:
```bash
yarn start
# Open http://localhost:4900
```

## 🏗️ Project Structure

```
games/
├── src/
│   ├── app/
│   │   ├── models/          # Game data models
│   │   ├── services/        # Business logic
│   │   │   ├── games.service.ts
│   │   │   └── sound.service.ts
│   │   ├── pages/
│   │   │   ├── home/        # Game grid homepage
│   │   │   └── game-detail/ # Individual game pages
│   │   ├── app.component.ts
│   │   └── app.routes.ts
│   ├── styles.css           # Global styles
│   └── index.html
├── angular.json             # Angular configuration
├── package.json
└── README.md
```

## 🎨 Tech Stack

- **Framework**: Angular 18 (standalone components)
- **Styling**: TailwindCSS 4.1
- **Routing**: Angular Router with lazy loading
- **Sound**: Web Audio API
- **Build**: Angular CLI

## 🌐 Deployment

The app is designed to be served at `games.berjis.tech` (replacing the previous `games.berjis.tech`).

### Building for Production

```bash
yarn build
# Output: dist/games/
```

### Docker Deployment

The included Dockerfile and nginx.conf are pre-configured:

```bash
docker build -t games .
docker run -p 80:80 games
```

## 🔧 Configuration

### Port Configuration

Update port in `package.json`:
```json
"start": "ng serve --host 0.0.0.0 --port 4900"
```

### Sound Effects

Users can toggle sound effects using the 🔊/🔇 button in the top-right corner.

## 📱 Usage Tips

1. **For House Parties**: Display on a TV or projector
2. **Game Selection**: Browse the colorful grid and click any game
3. **During Play**: Keep the game page open for reference
4. **Sound**: Enable sounds for extra engagement (disable if too distracting)

## 🎯 Future Enhancements

Potential additions:
- Timer functionality for timed games
- Score tracking
- Custom game creation
- Print-friendly view
- More games!

## 📄 License

Part of the Berjis ecosystem.

## 🤝 Contributing

This is a simple, fun project. To add more games:

1. Update `games.service.ts` with new game data
2. Follow the existing game model structure
3. Test and build

---

**Made with ❤️ for epic house parties!**
