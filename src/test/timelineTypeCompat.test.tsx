/**
 * Compile-time compatibility guard for Timeline (#60).
 *
 * In 2.7.1 `TimelineProps.events` was `TimelineEvent[]` (`time: string`,
 * `description?: string`, four statuses). 2.8.0 adds the wider `TimelineItem`
 * / `TimelineItemsProps` as a separate call signature, so every 2.7.1 pattern
 * below must keep compiling, including props derived from `typeof Timeline`.
 * The assertions are checked by `tsc` (`npm run type-check` covers test files);
 * if one stops compiling, type-check fails. The runtime `it` blocks only keep
 * Vitest happy and check the patterns also render.
 *
 * Imports go through the package entry (`../index`), like a consumer's.
 */
import { render, screen } from "@testing-library/react";
import type { ComponentProps, ComponentType, FC } from "react";
import { describe, expect, expectTypeOf, it } from "vitest";
import {
  Timeline,
  type TimelineEvent,
  type TimelineItem,
  type TimelineItemsProps,
  type TimelineProps,
} from "../index";

// ---- 2.7.1 reader patterns (must keep compiling) --------------------------

type EventOfComponentProps = ComponentProps<typeof Timeline>["events"][number];
type EventOfParameters = Parameters<typeof Timeline>[0]["events"][number];

const timeOfComponentProps: string = ({} as EventOfComponentProps).time;
const timeOfParameters: string = ({} as EventOfParameters).time;

function shoutDescription(e: EventOfComponentProps): string | undefined {
  return e.description?.toUpperCase();
}

function statusLabel(e: EventOfComponentProps): string {
  switch (e.status ?? "info") {
    case "success":
      return "ok";
    case "error":
      return "fail";
    case "warning":
      return "warn";
    case "info":
      return "info";
  }
}

const takesLegacyShape = (e: { time: string; description?: string }) => e.time;
const legacyFromComponentProps = takesLegacyShape({} as EventOfComponentProps);

function readTimes(props: TimelineProps): string[] {
  return props.events.map((e) => e.time.toUpperCase());
}

// Pass-through wrappers and component-typed assignments built on TimelineProps.
function TimelineWrapper(props: TimelineProps) {
  return <Timeline {...props} />;
}
const timelineAsFC: FC<TimelineProps> = Timeline;
const timelineAsComponentType: ComponentType<TimelineProps> = Timeline;

expectTypeOf<ComponentProps<typeof Timeline>>().toEqualTypeOf<TimelineProps>();
expectTypeOf<EventOfComponentProps>().toEqualTypeOf<TimelineEvent>();
expectTypeOf<EventOfComponentProps["time"]>().toEqualTypeOf<string>();
expectTypeOf<TimelineProps["events"]>().toEqualTypeOf<TimelineEvent[]>();

// ---- New TimelineItem forms (additive) -------------------------------------

const items: TimelineItem[] = [{ title: "Stage 1", status: "neutral" }];
const itemsProps: TimelineItemsProps = { events: items, size: "sm" };
const timelineAsItemsComponent: ComponentType<TimelineItemsProps> = Timeline;

expectTypeOf<TimelineItemsProps["events"]>().toEqualTypeOf<TimelineItem[]>();
expectTypeOf<TimelineEvent>().toMatchTypeOf<TimelineItem>();
expectTypeOf<TimelineItem>().not.toMatchTypeOf<TimelineEvent>();

describe("Timeline type compatibility", () => {
  it("keeps the 2.7.1 reader patterns compiling and working", () => {
    const e: TimelineEvent = { title: "Boot", time: "now", description: "ok", status: "success" };
    expect(shoutDescription(e)).toBe("OK");
    expect(statusLabel(e)).toBe("ok");
    expect(readTimes({ events: [e] })).toEqual(["NOW"]);
    // referenced so the compile-only bindings are not flagged as unused
    expect([timeOfComponentProps, timeOfParameters, legacyFromComponentProps].length).toBe(3);
    expect(timelineAsFC).toBe(timelineAsComponentType);
    expect(timelineAsItemsComponent).toBe(timelineAsFC);
  });

  it("renders legacy TimelineProps wrappers and the new TimelineItem forms", () => {
    render(
      <>
        <TimelineWrapper events={[{ title: "Legacy Event", time: "09:00" }]} />
        <Timeline events={[{ title: "Inline Neutral", status: "neutral" }]} />
        <Timeline events={[{ title: "Rich Step", description: <code>jack-in</code> }]} />
        <Timeline {...itemsProps} />
      </>
    );
    expect(screen.getByText("Legacy Event")).toBeInTheDocument();
    expect(screen.getByText("Inline Neutral")).toBeInTheDocument();
    expect(screen.getByText("jack-in").tagName).toBe("CODE");
    expect(screen.getByText("Stage 1")).toBeInTheDocument();
  });
});
