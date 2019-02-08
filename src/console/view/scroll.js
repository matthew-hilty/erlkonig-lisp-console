function getCursorOffset(cursor, node) {
  const margin = 5;
  return cursor.offsetLeft + cursor.offsetWidth + margin - node.offsetWidth;
}

function getElement(id) {
  return document.getElementById(id);
}

function getPercentage(number) {
  return (100 * number) + '%';
}

function getViewport() {
  return document.getElementsByClassName('erl-viewport')[0];
}

function onEvent(eventName, callback) {
  document.addEventListener(eventName, callback);
}

function _scroll(node, cursor) {
  node.scrollTop = node.scrollHeight - node.clientHeight;
  node.scrollLeft = getCursorOffset(cursor, node);
}

function scroll(cssScrollbarDetected) {
  if (cssScrollbarDetected) {
    return function () {
      const cursor = getElement('erl-cursor');
      _scroll(getViewport(), cursor);
    };
  }

  return function () {
    const viewport = getViewport();
    const cursor = getElement('erl-cursor');
    const xTrack = getElement('erl-x-scroll-track');
    const xThumb = getElement('erl-x-scroll-thumb');
    const yTrack = getElement('erl-y-scroll-track');
    const yThumb = getElement('erl-y-scroll-thumb');
    const prompt = getElement('erl-prompt');

    const viewportWidth = viewport.offsetWidth;
    const viewportHeight = viewport.offsetHeight;

    setXThumbVisibility(viewport, viewportWidth, xTrack, xThumb, cursor, prompt);
    setYThumbVisibility(viewport, viewportHeight, yTrack, yThumb, cursor);
    scrollHorizontally(viewport, viewportWidth, xTrack, xThumb);
    scrollVertically(viewport, viewportHeight, yTrack, yThumb);

    _scroll(viewport, cursor);
  };
}

function scrollBarHorizontally(xThumb, leftRatio) {
  xThumb.style.left = getPercentage(leftRatio);
}

function scrollBarVertically(yThumb, topRatio) {
  yThumb.style.top = getPercentage(topRatio);
}

function scrollContentHorizontally(viewport, leftRatio) {
  viewport.scrollLeft = leftRatio * viewport.scrollWidth;
}

function scrollContentVertically(viewport, topRatio) {
  viewport.scrollTop = topRatio * viewport.scrollHeight;
}

function scrollVertically(viewport, viewportHeight, yTrack, yThumb) {
  const yThumbHeight = yThumb.offsetHeight;
  const yTrackHeight = yTrack.offsetHeight;
  const ullage = yTrackHeight - yThumbHeight;

  function mouseMove_vertical(event) {
    const _top = event.clientY - yTrack.getBoundingClientRect().top;
    const top = _top < 0 ? 0 : _top > ullage ? ullage : _top;
    const topRatio = top / yTrackHeight;
    scrollBarVertically(yThumb, topRatio);
    scrollContentVertically(viewport, topRatio);
  };

  function mouseDown_vertical(event) {
    yThumb.style.backgroundColor = 'rgb(0, 80, 0)';
    onEvent('mousemove', mouseMove_vertical);
    onEvent('mouseup', mouseUp_vertical);
  };

  function mouseUp_vertical(event) {
    yThumb.style.backgroundColor = 'rgba(55, 53, 50, 0.5)';
    document.removeEventListener('mousemove', mouseMove_vertical);
    document.removeEventListener('mouseup', mouseUp_vertical);
  };

  yThumb.removeEventListener('mousedown', mouseDown_vertical);
  yThumb.addEventListener('mousedown', mouseDown_vertical);
}

function scrollHorizontally(viewport, viewportWidth, xTrack, xThumb) {
  const xThumbWidth = xThumb.offsetWidth;
  const xTrackWidth = xTrack.offsetWidth;
  const ullage = xTrackWidth - xThumbWidth;

  function mouseMove_horizontal(event) {
    const _left = event.clientX - xTrack.getBoundingClientRect().left;
    const left = _left < 0 ? 0 : _left > ullage ? ullage : _left;
    const leftRatio = left / xTrackWidth;
    scrollBarHorizontally(xThumb, leftRatio);
    scrollContentHorizontally(viewport, leftRatio);
  };

  function mouseUp_horizontal(event) {
    xThumb.style.backgroundColor = 'rgba(55, 53, 50, 0.5)';
    document.removeEventListener('mousemove', mouseMove_horizontal);
    document.removeEventListener('mouseup', mouseUp_horizontal);
  };

  function mouseDown_horizontal(event) {
    xThumb.style.backgroundColor = 'rgb(0, 80, 0)';
    onEvent('mousemove', mouseMove_horizontal);
    onEvent('mouseup', mouseUp_horizontal);
  };

  xThumb.removeEventListener('mousedown', mouseDown_horizontal);
  xThumb.addEventListener('mousedown', mouseDown_horizontal);
}

function setXThumbVisibility(viewport, viewportWidth, xTrack, xThumb, cursor, prompt) {
  const xTrackWidth = xTrack.offsetWidth;
  const terminalWidth = viewport.scrollWidth;
  const xThumbStyle = xThumb.style;

  if (viewportWidth < terminalWidth) {
    const fullPromptOffsetWidth = prompt.offsetLeft + prompt.offsetWidth;
    const start = fullPromptOffsetWidth;
    const viewportRatio = viewportWidth / terminalWidth;
    const xThumbWidth = viewportRatio * xTrackWidth;
    const viewportPercentage = getPercentage(viewportRatio);
    const ullage = xTrackWidth - xThumbWidth;
    const xPosition = cursor.offsetLeft + cursor.offsetWidth - start;
    const cursorRatio = (xPosition / terminalWidth) * (ullage / xTrackWidth);
    const cursorPercentage = getPercentage(cursorRatio);

    xThumbStyle.left = cursorPercentage;
    xThumbStyle.width = viewportPercentage;
    xThumbStyle.visibility = 'visible';
  } else {
    xThumbStyle.left = 0;
    xThumbStyle.width = '100%';
    xThumbStyle.visibility = 'hidden';
  }
}

function setYThumbVisibility(viewport, viewportHeight, yTrack, yThumb, cursor) {
  const yTrackHeight = yTrack.offsetHeight;
  const terminalHeight = viewport.scrollHeight;
  const yThumbStyle = yThumb.style;

  if (viewportHeight < terminalHeight) {
    const start = viewport.offsetTop;
    const viewportRatio = viewportHeight / terminalHeight;
    const yThumbHeight = viewportRatio * yTrackHeight;
    const viewportPercentage = getPercentage(viewportRatio);
    const ullage = yTrackHeight - yThumbHeight;
    const yPosition = cursor.offsetTop + cursor.offsetHeight - start;
    const cursorRatio = (yPosition / terminalHeight) * (ullage / yTrackHeight);
    const cursorPercentage = getPercentage(cursorRatio);

    yThumbStyle.top = cursorPercentage;
    yThumbStyle.height = viewportPercentage;
    yThumbStyle.visibility = 'visible';
  } else {
    yThumbStyle.top = 0;
    yThumbStyle.height = '100%';
    yThumbStyle.visibility = 'hidden';
  }
}

export { scroll };
