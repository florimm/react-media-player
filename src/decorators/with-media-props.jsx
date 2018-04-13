import React, { Component } from 'react';
import { MediaProvider, MediaConsumer } from '../MediaContext';
import contextTypes from '../context-types';

export default function withMediaProps(MediaComponent) {
  return class extends Component {
    static displayName = 'withMediaProps';
    render() {
      return (
        <MediaConsumer>
          {data => <MediaComponent {...this.props} media={data.media} />}
        </MediaConsumer>
      );
    }
  };
}
