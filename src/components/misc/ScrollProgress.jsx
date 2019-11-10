import React, { Component, createRef } from "react";

import { getElementOffset } from '../../utils/utils';

class ScrollProgress extends Component {
  constructor(props) {
    super(props);

    this.elementRef = createRef();
    window.addEventListener('scroll', this.handleScroll.bind(this), false);
  }

  handleScroll() {
    const element = this.elementRef.current;

    if (element) {
      const position = getElementOffset(element);
      const maxScrollY =  document.body.offsetHeight;
      const scrollY = window.scrollY + (this.props.offset || 0);
      const startY = window.innerHeight - Math.max((window.innerHeight - position.y), 0);
      const elementY = scrollY - position.y + startY;
      const endDiffY =  Math.max(0, window.innerHeight - (maxScrollY - position.y));
      const endPosY = startY - endDiffY;
      const progress = elementY / endPosY;

      if (typeof this.props.onProgress === 'function') {
        this.props.onProgress.call(this, progress);
      } 
    }
  }

  render() {
    return(
      <span ref={this.elementRef} className={(this.props.className || '') + ' scroll-progress'}>
        {this.props.children}
      </span>
    );
  }
}

export default ScrollProgress;
