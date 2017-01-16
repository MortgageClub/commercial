export function track(content) {
  if(typeof mixpanel !== "undefined") {
    mixpanel.track(content);
  }
}