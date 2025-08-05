# CyberUI Responsive Components

CyberUI now supports responsive design with an intuitive API that allows you to specify different component sizes for different screen breakpoints.

## Usage

### Simple Size (Static)
```tsx
import { Button, Badge, Input, Card } from 'cyberui';

// These will maintain the same size across all screen sizes
<Button size="md">Click me</Button>
<Badge size="sm">Status</Badge>
<Input size="lg" placeholder="Enter text..." />
<Card size="md">Content here</Card>
```

### Responsive Size (Dynamic)
```tsx
import { Button, Badge, Input, Card } from 'cyberui';

// These will change size based on screen breakpoints
<Button size={{ base: 'sm', md: 'md', lg: 'lg' }}>
  Responsive Button
</Button>

<Badge size={{ base: 'sm', md: 'md' }}>
  Responsive Badge
</Badge>

<Input
  size={{ base: 'sm', md: 'md', lg: 'lg' }}
  placeholder="Responsive input..."
/>

<Card size={{ base: 'sm', md: 'md', lg: 'lg' }}>
  <h3>Responsive Card</h3>
  <p>This card adapts to screen size</p>
</Card>
```

## Breakpoints

CyberUI uses Tailwind CSS breakpoints:

| Breakpoint | Min Width | Description |
|------------|-----------|-------------|
| `base`     | 0px       | Default (mobile first) |
| `sm`       | 640px     | Small screens |
| `md`       | 768px     | Medium screens (tablets) |
| `lg`       | 1024px    | Large screens (desktops) |
| `xl`       | 1280px    | Extra large screens |
| `2xl`      | 1536px    | 2X large screens |

## Size Variants

### Button Sizes
- `sm`: Small padding, text-sm
- `md`: Medium padding, text-lg (default)
- `lg`: Large padding, text-xl

### Badge Sizes
- `sm`: Compact padding, text-xs
- `md`: Normal padding, text-sm (default)
- `lg`: Spacious padding, text-base

### Input Sizes
- `sm`: Minimal padding, text-sm
- `md`: Standard padding, text-base (default)
- `lg`: Generous padding, text-lg

### Card Sizes
- `sm`: Tight spacing, text-sm
- `md`: Comfortable spacing, text-base (default)
- `lg`: Spacious layout, text-lg

## Advanced Examples

### Mobile-First Responsive Button
```tsx
<Button
  size={{
    base: 'sm',    // Small on mobile
    md: 'md',      // Medium on tablets
    lg: 'lg'       // Large on desktop
  }}
  variant="primary"
>
  Adaptive Button
</Button>
```

### Responsive Form Layout
```tsx
<div className="space-y-4">
  <Input
    size={{ base: 'sm', md: 'md' }}
    label="Username"
    placeholder="Enter username..."
  />

  <Input
    size={{ base: 'sm', md: 'md' }}
    label="Email"
    placeholder="Enter email..."
  />

  <Button
    size={{ base: 'sm', md: 'md' }}
    variant="primary"
    className="w-full"
  >
    Submit
  </Button>
</div>
```

### Responsive Card Grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {items.map(item => (
    <Card
      key={item.id}
      size={{ base: 'sm', md: 'md' }}
      variant="accent"
    >
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <Badge size={{ base: 'sm', md: 'md' }}>
        {item.status}
      </Badge>
    </Card>
  ))}
</div>
```

## TypeScript Support

Full TypeScript support with proper type inference:

```tsx
import type { ResponsiveValue } from 'cyberui';

// Type for responsive size values
type Size = ResponsiveValue<'sm' | 'md' | 'lg'>;

// Example component with responsive props
interface MyComponentProps {
  buttonSize: Size;
  cardSize: Size;
}

const MyComponent: React.FC<MyComponentProps> = ({ buttonSize, cardSize }) => (
  <Card size={cardSize}>
    <Button size={buttonSize}>Action</Button>
  </Card>
);
```

## Migration Guide

### From Static to Responsive

**Before (Static):**
```tsx
<Button size="md">Click me</Button>
```

**After (Responsive):**
```tsx
<Button size={{ base: 'sm', md: 'md', lg: 'lg' }}>Click me</Button>
```

**Backward Compatibility:**
The static size API still works, so you can migrate gradually:
```tsx
// Both of these work
<Button size="md">Static size</Button>
<Button size={{ base: 'sm', md: 'md' }}>Responsive size</Button>
```

## Best Practices

1. **Start with base size**: Always define a `base` size for mobile-first approach
2. **Progressive enhancement**: Add larger sizes for bigger screens
3. **Consistent scaling**: Use logical size progression (sm → md → lg)
4. **Test on devices**: Verify responsive behavior across different screen sizes

```tsx
// ✅ Good: Mobile-first with logical progression
<Button size={{ base: 'sm', md: 'md', lg: 'lg' }}>

// ❌ Avoid: Inconsistent sizing
<Button size={{ base: 'lg', md: 'sm' }}>

// ✅ Good: Simple responsive pattern
<Button size={{ base: 'sm', md: 'md' }}>
```
