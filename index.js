import { createElement } from 'react';
import styled from 'styled-components';

module.exports = styles => props =>
  createElement(styled[props.tag](styles), props, props.children);
