const form = document.querySelector("form")!;

function getReadableEventPhase(eventPhase: number) {
  switch (eventPhase) {
    case Event.CAPTURING_PHASE:
      return "CAPTURING_PHASE";
    case Event.AT_TARGET:
      return "AT_TARGET";
    case Event.BUBBLING_PHASE:
      return "BUBBLING_PHASE";
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.table({
    "Event name": event.type,
    "Event phase": getReadableEventPhase(event.eventPhase),
    Target: (event.target as HTMLElement).tagName,
    "Propagation path": event.composedPath(),
    Bubbles: event.bubbles,
  });
});

form.querySelector("input")!.addEventListener("invalid", (event) => {
  event.preventDefault();
  console.table({
    "Event name": event.type,
    "Event phase": getReadableEventPhase(event.eventPhase),
    Target: (event.target as HTMLElement).tagName,
    "Propagation path": event.composedPath(),
    Bubbles: event.bubbles,
  });
});
