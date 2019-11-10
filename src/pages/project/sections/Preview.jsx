import React, { Component, createRef } from "react";

import Content from "../../../components/layout/Content";

import Image from "../../../components/misc/Image";
import ScrollProgress from "../../../components/misc/ScrollProgress";

class Preview extends Component {
  constructor(props) {
    super(props);

    this.previewRef = createRef();

    this.updateProgress = this.updateProgress.bind(this);
  }

  updateProgress(progress) {
    const preview = this.previewRef.current;

    if (preview) {
      preview.style.transform = `translateY(${-75 * progress}px)`;
    }
  }

  render() {
    return (
      <section id="preview">
        <Content>
          <ScrollProgress onProgress={this.updateProgress}>
            <div ref={this.previewRef} className="wrapper">
              <div data-aos="fade-in">
                <Image src={this.props.src}></Image>
              </div>
            </div>
          </ScrollProgress>
        </Content>
      </section>
    );
  }
}

export default Preview;
