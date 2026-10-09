// Consumer fixture: realistic code a user of cyberui-2045 2.6 has written.
//
// scripts/check-compat.js compiles this file (tsc --noEmit, strict, react-jsx)
// against the BUILT declarations in dist/. If a line stops compiling, the
// release broke a consumer: fix the library (keep the old API working and
// deprecate it), do NOT edit the line. The file is never executed, never part of
// the library build and never published.
//
// Add a line whenever a bug report shows a pattern the guard did not catch.
// Remove or change a line only in a major release.
import { useState } from 'react';
import type { ComponentProps, FC, NamedExoticComponent, ReactNode } from 'react';
import {
  Badge,
  Button,
  Card,
  Carousel,
  Checkbox,
  CyberNotificationProvider,
  Image,
  Input,
  LinearProgress,
  Modal,
  Select,
  Slider,
  Toggle,
  cn,
  useCyberNotifications,
  useCyberScrollbar,
} from 'cyberui-2045';
import type {
  ButtonProps,
  CarouselImageData,
  CarouselProps,
  ImageProps,
  InputProps,
  LinearProgressProps,
  ModalProps,
  SelectOption,
  SliderProps,
  SliderValue,
} from 'cyberui-2045';

// ─── Props types read as plain data ──────────────────────────────────────────

// `src` was required in 2.6: code reading it as a string must keep compiling.
export const imageSrc: string = ({} as ImageProps).src;
export const galleryLabels = (images: CarouselImageData[]): string[] => images.map((i) => i.src.toUpperCase());
export const gallery: CarouselImageData[] = [
  { src: '/neon-alley.jpg', alt: 'Neon alley at 3am' },
  { src: '/data-haven.jpg', alt: 'Data haven', caption: 'Level 7', fallbackSrc: '/fallback.jpg' },
];

// ─── Slider ──────────────────────────────────────────────────────────────────

export const SliderBasic = () => <Slider value={5} onValueChange={(v) => console.log(typeof v === 'number' ? v + 1 : v[0])} />;
export const SliderRange = () => <Slider value={[10, 40]} onValueChange={(v) => console.log(Array.isArray(v) ? v[1] : v)} />;
export const SliderAsFC: FC<SliderProps> = Slider;
export type SliderPropsViaTypeof = ComponentProps<typeof Slider>;
export const forwardSlider = (p: SliderProps) => <Slider {...p} />;
export const sliderValue: SliderValue = 3;
export const SliderUncontrolled = () => <Slider min={0} max={10} step={1} defaultValue={2} label="Overclock" showValue />;

// ─── LinearProgress ──────────────────────────────────────────────────────────

export const Download = () => <LinearProgress progress={40} size="sm" className="my-4" />;
export const progressProps: LinearProgressProps = { progress: 10, size: { base: 'sm', md: 'lg' } };
export const forwardProgress = (p: LinearProgressProps) => <LinearProgress {...p} />;

// ─── Image / Carousel ────────────────────────────────────────────────────────

export const Portrait = () => <Image src="/runner.png" alt="Runner" size="md" preview />;
export const forwardImage = (p: ImageProps) => <Image {...p} />;
// Reading types off the components' props, and assigning the components to their 2.6 types:
// the stand-in call signatures must not change what these see.
export const carouselSlideSrc = (i: ComponentProps<typeof Carousel>['images'][number]): string => i.src.toUpperCase();
export const carouselPropsSrc = (p: CarouselProps): number[] => p.images.map((i) => i.src.length);
export const imageComponentSrc = (p: ComponentProps<typeof Image>): string => p.src.toUpperCase();
export const imageFirstParamSrc = (p: Parameters<typeof Image>[0]): string => p.src.toUpperCase();
export const imageAsFC: FC<ImageProps> = Image;
export const carouselAsExotic: NamedExoticComponent<CarouselProps> = Carousel;
export const Gallery = () => {
  const [index, setIndex] = useState(0);
  const props: CarouselProps = { images: gallery, currentIndex: index, onChange: setIndex };
  return <Carousel {...props} autoPlay transition="fade" />;
};

// ─── Forms and layout ────────────────────────────────────────────────────────

const options: SelectOption[] = [
  { value: 'netrunner', label: 'Netrunner' },
  { value: 'solo', label: 'Solo', disabled: true },
];

export const LoginForm = () => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('netrunner');
  const [armed, setArmed] = useState(false);
  const [agree, setAgree] = useState(false);
  const inputProps: InputProps = { label: 'Handle', placeholder: 'V', error: name === '' ? 'Required' : undefined };
  return (
    <Card title="Jack in" variant="accent" size="md">
      <Input {...inputProps} value={name} onChange={(e) => setName(e.target.value)} />
      <Select label="Role" options={options} value={role} onChange={(e) => setRole(e.target.value)} onValueChange={setRole} />
      <Toggle checked={armed} onChange={() => setArmed(!armed)} />
      <Checkbox checked={agree} onChange={() => setAgree(!agree)} label="I accept the EULA" />
      <Badge variant="success">ONLINE</Badge>
      <Button variant="primary" size="lg" onClick={() => setName('')} disabled={!agree}>
        Connect
      </Button>
    </Card>
  );
};

export const forwardButton = (p: ButtonProps) => <Button {...p} />;
export const buttonClass = (extra?: string) => cn('mt-2', extra);

export const ConfirmDialog = ({ children }: { children?: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalProps: Pick<ModalProps, 'isOpen' | 'onClose' | 'title'> = {
    isOpen,
    onClose: () => setIsOpen(false),
    title: 'Wipe memory?',
  };
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open</Button>
      <Modal {...modalProps} size="md" variant="danger" onConfirm={() => setIsOpen(false)} confirmText="Wipe">
        {children}
      </Modal>
    </>
  );
};

// ─── Notifications and hooks ─────────────────────────────────────────────────

const Alerts = () => {
  const { showNotification } = useCyberNotifications();
  const id: string = showNotification('success', 'Uplink', 'Connected', { duration: 3000, autoHide: true });
  return <Button onClick={() => showNotification('error', 'ICE', `Intrusion ${id}`)}>Trigger</Button>;
};

export const App = () => {
  const scrollRef = useCyberScrollbar({ glowColor: 'secondary', variant: 'minimal' });
  return (
    <CyberNotificationProvider position="bottom-right" defaultDuration={4000}>
      <div ref={scrollRef} className={cn('h-64 overflow-auto')}>
        <Alerts />
      </div>
    </CyberNotificationProvider>
  );
};
