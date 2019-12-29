export function getElementOffset(element) {
  let x = 0;
  let y = 0;

  do {
    x += element.offsetLeft || 0;
    y += element.offsetTop || 0;
    element = element.offsetParent;
  } while (element);

  return { x, y };
}

export function hasHash(url) {
  let hasHash = url.split("#")[1];

  return hasHash ? true : false;
}
