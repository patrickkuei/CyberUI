import React from 'react';
import Button from '../Button';

const HomeTab: React.FC = () => {
  return (
    <div className="text-center max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <h2 className="text-5xl font-semibold text-primary tracking-tight uppercase">
          CyberUI
        </h2>
        <p className="text-secondary text-xl font-light italic tracking-wide">
          A cyberpunk-themed React UI library
        </p>
        <p className="text-muted max-w-2xl mx-auto font-normal leading-relaxed">
          Build futuristic interfaces with neon-styled components, smooth animations,
          and cyberpunk aesthetics. Perfect for sci-fi projects and modern web applications.
        </p>
      </div>

      {/* Quick stats or features */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="text-center p-6 bg-surface border border-border-default rounded-lg">
          <div className="text-primary text-2xl mb-3">⚡</div>
          <h3 className="text-lg font-semibold text-secondary mb-2">Fast & Lightweight</h3>
          <p className="text-muted text-sm">Optimized components with minimal bundle size</p>
        </div>
        <div className="text-center p-6 bg-surface border border-border-default rounded-lg">
          <div className="text-accent text-2xl mb-3">🎨</div>
          <h3 className="text-lg font-semibold text-secondary mb-2">Cyberpunk Theme</h3>
          <p className="text-muted text-sm">Neon colors, glitch effects, and futuristic styling</p>
        </div>
        <div className="text-center p-6 bg-surface border border-border-default rounded-lg">
          <div className="text-primary text-2xl mb-3">📱</div>
          <h3 className="text-lg font-semibold text-secondary mb-2">Fully Responsive</h3>
          <p className="text-muted text-sm">Works perfectly on all screen sizes</p>
        </div>
      </div>

      {/* Call to action */}
      <div className="flex justify-center space-x-6 pt-8">
        <Button
          variant="primary"
          onClick={() => window.open('https://patrickkuei.github.io/CyberUI/storybook/', '_blank')}
        >
          View Documentation
        </Button>
        <Button
          variant="secondary"
          onClick={() => window.open('https://github.com/patrickkuei/CyberUI', '_blank')}
        >
          GitHub Repository
        </Button>
      </div>
    </div>
  );
};

export default HomeTab;
