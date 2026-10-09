/**
 * Compile-time compatibility guard for Image and Carousel `src` (#43/#44).
 *
 * In 2.6.0 `ImageProps.src` and `CarouselImageData.src` were required
 * `string`s. Making them optional broke consumers that READ them
 * (`props.src.toUpperCase()` fails under `strict`). The "no src" form is now
 * separate types (`ImageStandInProps`, `CarouselStandInData`), so every
 * 2.6.0 pattern below must keep compiling. The assertions are checked by
 * `tsc` (`npm run type-check` covers test files); if one stops compiling,
 * type-check fails. The runtime `it` blocks only keep Vitest happy and check
 * the patterns also render.
 *
 * Imports go through the package entry (`../index`), like a consumer's.
 */
import { render, screen } from "@testing-library/react";
import type { ComponentProps, ComponentType, FC } from "react";
import { describe, expect, expectTypeOf, it, vi } from "vitest";
import {
  Carousel,
  Image,
  type CarouselImageData,
  type CarouselProps,
  type CarouselSlideData,
  type CarouselStandInData,
  type CarouselStandInProps,
  type ImageProps,
  type ImageStandInProps,
} from "../index";

// ---- 2.6.0 reader patterns (must keep compiling) --------------------------

const srcOfProps: string = ({} as ImageProps).src;

function shoutImageSrc(p: ImageProps): string {
  return p.src.toUpperCase();
}

const imgs: CarouselImageData[] = [{ src: "a.jpg", alt: "x" }];
const shoutedSrcs: string[] = imgs.map((i) => i.src.toUpperCase());

const srcOfSlide: string = ({} as CarouselImageData).src;

// Pass-through wrappers that build on the 2.6.0 prop types.
function ImageWrapper(props: ImageProps) {
  return <Image {...props} />;
}
const imageArgs: ImageProps = { src: "a.jpg", alt: "x" };
const imageFromComponent: FC<ImageProps> = Image;
const imageAsComponentType: ComponentType<ImageProps> = Image;
type ImageComponentProps = ComponentProps<typeof Image>;
const srcFromComponentProps: string = ({} as ImageComponentProps).src;

function CarouselWrapper(props: CarouselProps) {
  return <Carousel {...props} />;
}
const carouselFromComponentProps: ComponentProps<typeof Carousel> = {
  images: imgs,
  currentIndex: 0,
  onChange: vi.fn(),
};
// Reading `src` through the props types, as type-level code does.
type SlideOfCarouselProps = CarouselProps["images"][number];
type SlideOfComponentProps = ComponentProps<typeof Carousel>["images"][number];
const srcFromCarouselProps: string = ({} as SlideOfCarouselProps).src;
const srcFromComponentCarouselProps: string = ({} as SlideOfComponentProps).src;

// ---- New stand-in forms (additive) ----------------------------------------

const standInProps: ImageStandInProps = { alt: "x" };
const standInWithFallback: ImageStandInProps = {
  alt: "x",
  src: undefined,
  fallback: "b.jpg",
  fallbackStyle: "scanline",
};
const standInSlide: CarouselStandInData = { alt: "Signal lost", caption: "?" };
const mixedSlides: CarouselSlideData[] = [{ src: "a.jpg", alt: "x" }, standInSlide];
const mixedProps: CarouselStandInProps = {
  images: mixedSlides,
  currentIndex: 0,
  onChange: vi.fn(),
};

// Types stay distinct: a stand-in is not an ImageProps / CarouselImageData.
expectTypeOf<ImageProps["src"]>().toEqualTypeOf<string>();
expectTypeOf<CarouselImageData["src"]>().toEqualTypeOf<string>();
expectTypeOf<ImageStandInProps["src"]>().toEqualTypeOf<undefined>();
expectTypeOf<CarouselStandInData["src"]>().toEqualTypeOf<undefined>();
expectTypeOf<CarouselProps["images"]>().toEqualTypeOf<CarouselImageData[]>();
expectTypeOf<ImageComponentProps>().toEqualTypeOf<ImageProps>();
expectTypeOf<ComponentProps<typeof Carousel>>().toEqualTypeOf<CarouselProps>();
expectTypeOf<CarouselStandInProps["images"]>().toEqualTypeOf<CarouselSlideData[]>();
expectTypeOf<ImageStandInProps>().not.toMatchTypeOf<ImageProps>();
expectTypeOf<CarouselStandInData>().not.toMatchTypeOf<CarouselImageData>();

describe("Image / Carousel src type compatibility", () => {
  it("keeps the 2.6.0 reader patterns compiling and working", () => {
    expect(shoutImageSrc({ src: "a.jpg", alt: "x" })).toBe("A.JPG");
    expect(shoutedSrcs).toEqual(["A.JPG"]);
    // referenced so the compile-only bindings are not flagged as unused
    expect(
      [srcOfProps, srcOfSlide, srcFromComponentProps, srcFromCarouselProps, srcFromComponentCarouselProps]
        .length
    ).toBe(5);
    expect(imageFromComponent).toBe(imageAsComponentType);
    expect(carouselFromComponentProps.images).toBe(imgs);
  });

  it("renders <Image src alt /> and wrappers typed with ImageProps", () => {
    render(
      <>
        <Image src="a.jpg" alt="Plain image" />
        <ImageWrapper {...imageArgs} alt="Wrapped image" />
      </>
    );
    expect(screen.getByAltText("Plain image")).toHaveAttribute("src", "a.jpg");
    expect(screen.getByAltText("Wrapped image")).toHaveAttribute("src", "a.jpg");
  });

  it("renders the stand-in forms: <Image alt /> and ImageStandInProps", () => {
    const { container } = render(
      <>
        <Image alt="Bare stand-in" />
        <Image {...standInProps} alt="Typed stand-in" />
        <Image {...standInWithFallback} alt="Fallback URL" />
      </>
    );
    expect(screen.getByRole("img", { name: "Bare stand-in" })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Typed stand-in" })).toBeInTheDocument();
    expect(screen.getByAltText("Fallback URL (fallback)")).toHaveAttribute("src", "b.jpg");
    expect(container.querySelectorAll("img")).toHaveLength(1);
  });

  it("renders a Carousel with images typed CarouselImageData[] (and via a CarouselProps wrapper)", () => {
    render(
      <CarouselWrapper images={imgs} currentIndex={0} onChange={vi.fn()} autoPlay={false} />
    );
    expect(screen.getByAltText("x")).toHaveAttribute("src", "a.jpg");
  });

  it("renders a Carousel whose images mix slides with and without src", () => {
    render(
      <>
        <Carousel
          images={[{ src: "a.jpg", alt: "Real slide" }, { alt: "Stand-in slide" }]}
          currentIndex={1}
          onChange={vi.fn()}
          autoPlay={false}
        />
        <Carousel {...mixedProps} currentIndex={0} autoPlay={false} />
      </>
    );
    expect(screen.getByRole("img", { name: "Stand-in slide" })).toBeInTheDocument();
    expect(screen.getAllByAltText("x")).not.toHaveLength(0);
  });
});
