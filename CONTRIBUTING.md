# Contributing to CyberUI

Thank you for your interest in contributing to CyberUI! We welcome contributions from the community.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/CyberUI.git`
3. Install dependencies: `npm install`
4. Start development server: `npm run dev`
5. Start Storybook: `npm run storybook`

## Development Workflow

1. Create a feature branch: `git checkout -b feature/amazing-feature`
2. Make your changes
3. Add tests if applicable
4. Update documentation/stories
5. Commit your changes: `git commit -m 'Add some amazing feature'`
6. Push to your branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

## Component Guidelines

### Creating New Components

1. Create the component in `src/components/`
2. Follow the existing naming conventions
3. Include TypeScript interfaces for props
4. Add Storybook stories in `.stories.tsx`
5. Export the component from `src/components/index.ts`

### Styling Guidelines

- Use CSS custom properties for theming
- Follow the cyberpunk design system
- Ensure components are responsive
- Include focus states for accessibility

### Example Component Structure

```tsx
import React from 'react';

interface ComponentProps {
  // Define your props here
}

const Component: React.FC<ComponentProps> = ({
  // props
}) => {
  return (
    // Component JSX
  );
};

export default Component;
```

## Testing

Run tests with:
```bash
npm test
```

## Code Style

- Use TypeScript
- Follow existing code patterns
- Use ESLint configuration
- Add comments for complex logic

## Pull Request Process

1. Ensure your code passes all checks
2. Update documentation if needed
3. Add/update Storybook stories
4. Fill out the PR template
5. Wait for review and address feedback

## Questions?

Feel free to open an issue for any questions or discussions!
