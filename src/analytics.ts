const writeRawEvent = (eventData: object) => {
  window.dataLayer = window.dataLayer || [];

  if (eventData) {
    window.dataLayer.push(eventData);
  }
};

export const writeData = (name: string) => {
  writeRawEvent({ event: name });
};