# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.4.0] - 2025-12-05

### Added

- **Checkbox Component** - Cyberpunk-styled checkbox with neon glow effects, responsive sizing (sm/md/lg), and custom SVG icons
- **Divider Component** - Flexible divider with gradient, solid, and dashed variants
- **GradientText Component** - Text component with primary, secondary, and accent gradient options
- **SectionTitle Component** - Standardized section title with decorative gradient line and responsive sizing
- **Steps Component** - Multi-step progress indicator with responsive layout (vertical/horizontal), animated underlines, and triangle indicators
- **Timeline Component** - Vertical event timeline with status indicators and responsive sizing

### Enhanced

- **Button Component** - Refined focus ring to be thinner and semi-transparent for better accessibility
- **Modal Component** - Improved footer layout to prevent "ESC to abort" text overlap on mobile devices
- **Demo Application** - Reorganized demo tabs into a dedicated `src/demo` directory for better structure

## [1.3.3] - 2025-12-04

### Added

- **AGENT.md** - Comprehensive guide for AI coding agents included in the NPM package
- **llms.txt** - Discoverability manifest for AI search engines

### Enhanced

- **Documentation** - Added rich JSDoc examples (`@example`) to core components and precise params/returns to hooks for better AI context

## [1.3.2] - 2025-09-16

### Fixed

- Restored missing CSS and full type declarations (1.3.1 packaging issue)

### Changed

- Simplified Storybook title handling

### Internal

- Added sourcemaps
- Clarified React peer dependency configuration
- Excluded story/test declaration files from published package

## [1.3.1] - 2025-09-12

### Added

- **TabNavigation Component** - Responsive design (RWD) support with dropdown mode for mobile

### Enhanced

- **useCyberScrollbar Hook** - Improved performance and event handling
- **TabNavigation Component** - More flexible API accepting custom tab names

### Fixed

- **TabNavigation Component** - Type restrictions for real-world usage
- **Storybook** - Documentation display issues for TabNavigation

### Deprecated

- **Tab Type Export** - Use custom string arrays instead. Will be removed in v2.0.0.

## [1.3.0] - 2025-08-16

### Added

- **Modal Component** - Cyberpunk-themed modal with CRT power-on animation and RGB borders
- **Notification System** - Complete provider/hook pattern with `CyberNotificationProvider` and `useCyberNotifications`
- **useCyberScrollbar Hook** - Velocity-responsive cyberpunk scrollbar with direction-aware arrows
- **Arrow Component** - Directional indicators for carousel navigation

### Enhanced

- **InteractiveTab** - 6 interactive cyberpunk modals with rich content and notification integration
- **Image Component** - Portal rendering for true fullscreen preview mode
- **Carousel Component** - Improved objectFit implementation with arrow indicators
- **Demo Application** - Integrated cyberpunk scrollbar throughout
- **Documentation** - Complete Storybook API reference for notification system

### Fixed

- **Image Component** - Resolved ESC key freeze issue in preview mode

## [1.2.0] - 2025-08-12

### Added

- **Image Component**: Click-to-expand preview with cyberpunk effects

  - Full-screen preview mode with animated overlay
  - Fallback image support for error handling
  - Loading states with customizable placeholders
  - Cyberpunk visual effects (grid background, scanning lines, corner brackets)
  - Responsive sizing (sm, md, lg) with clear size differentiation
  - Accessibility features (ARIA attributes, keyboard navigation)
  - Lazy loading and eager loading options
  - Smooth animations and transitions
  - Perfect Storybook integration with contained preview mode

- **Skeleton Component**: Loading placeholder component

  - Multiple variants (text, circular, rectangular, button)
  - Customizable dimensions and animation
  - Responsive sizing support
  - Cyberpunk-themed styling with gradient animations

- **Select Component**: Dropdown select component

  - Multiple variants (primary, secondary, danger)
  - Form integration with labels and validation states
  - Responsive design with proper focus states
  - Accessible with keyboard navigation

- **Toggle Component**: Switch/toggle component

  - Multiple variants with cyberpunk styling
  - Form integration and controlled/uncontrolled modes
  - Accessible with proper ARIA attributes
  - Smooth animations and hover effects

- **LinearProgress Component**: Progress bar component
  - Determinate and indeterminate modes
  - Customizable colors and sizing
  - Smooth animations and cyberpunk styling
  - Responsive design

### Documentation

- **Design Tokens Documentation**: Comprehensive design system guide in Storybook
  - Color palette documentation
  - Typography system
  - Spacing and sizing guidelines
  - Component design patterns

### Enhanced

- **ElementsTab**: Updated showcase with new components

  - Added Image Gallery section with demo images
  - Enhanced form controls section with Select and Toggle
  - Improved layout and organization

- **Responsive Utilities**: Extended responsive system
  - Added new size mappings for components
  - Enhanced responsive value support

### Infrastructure

- Added demo images for Image component showcase
- Updated roadmap with development progress
- Enhanced Storybook configuration for better component testing
- Improved build system and type definitions

## [1.1.0] - 2025-08-11

### Added

- **Card Component**: Container component with cyberpunk styling
- **Badge Component**: Status indicator with multiple variants
- **Input Component**: Form input with validation states

## [1.0.0] - 2025-08-05

### Added

- Initial release of CyberUI 2045
- **Button Component**: 4 variants (primary, secondary, danger, ghost), 3 sizes, enhanced disabled states
- **CircularProgress Component**: Customizable progress indicator with neon styling
- **SegmentedProgress Component**: Multi-segment progress bar
- **Notification Component**: Toast-style notifications with different types
- **TabNavigation Component**: Cyberpunk-themed tab navigation
- Full TypeScript support with exported type definitions
- Comprehensive Storybook documentation
- Cyberpunk theme with neon colors and futuristic aesthetics
- Tailwind CSS integration with custom color palette
- Demo application showcasing all components
- GitHub Actions for automated Storybook deployment

### Features

- 🎨 Cyberpunk-themed UI components
- 📱 Responsive design
- ⚡ React 19 support
- 🎯 TypeScript first
- 📚 Comprehensive Storybook documentation
- 🚀 Modern build system with Vite
- 🎨 Tailwind CSS with custom theme
- ♿ Accessibility-focused design

### Technical Details

- Built with React 19 and TypeScript
- Styled with Tailwind CSS v4
- Bundled with Vite
- Type definitions included
- ESM and UMD module formats
- CSS imported separately for better tree-shaking
