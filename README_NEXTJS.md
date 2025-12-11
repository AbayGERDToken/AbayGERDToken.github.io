# Abay GERD Token - Next.js Site

This is the Next.js version of the Abay GERD Token website, converted from static HTML to a modern component-based architecture.

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This will create a static export in the `out` directory, ready for GitHub Pages deployment.

### Deployment

The site is configured for GitHub Pages deployment using GitHub Actions. Simply push to the main branch and the workflow will automatically build and deploy the site.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with navbar and footer
│   ├── page.tsx           # Home page
│   └── [routes]/          # Other pages
├── components/            # Reusable React components
│   ├── Navbar.tsx         # Navigation component
│   ├── Footer.tsx         # Footer component
│   ├── HeroSection.tsx    # Hero section
│   └── ...                # Other components
├── lib/                   # Utilities and configurations
│   └── firebase.ts        # Firebase setup
├── public/                # Static assets
│   ├── image/            # Images
│   └── dev/              # Development assets
├── styles/               # Global styles
│   └── globals.css       # Main stylesheet
└── next.config.js        # Next.js configuration
```

## Features

- **Component-Based Architecture**: Reusable React components
- **TypeScript**: Full type safety
- **Static Export**: Optimized for GitHub Pages
- **Bootstrap 5.3.3**: Maintained from original site
- **Firebase Integration**: Visitor tracking
- **Web3 Integration**: Token claiming functionality

## Migration Notes

This site was migrated from static HTML to Next.js while maintaining:
- All original functionality
- Bootstrap 5.3.3 styling
- Firebase integration
- Web3 token claiming
- All routes and navigation

## License

MIT License





