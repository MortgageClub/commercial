export function track(content) {
  if(typeof mixpanel !== "undefined") {
    mixpanel.track(content);
  }
}

export function identify(content) {
  if(typeof mixpanel !== "undefined") {
    mixpanel.identify(content);
  }
}

export function setPeople(content) {
  if(typeof mixpanel !== "undefined") {
    mixpanel.people.set(content);
  }
}

export function createGuid(content) {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
  });
}
