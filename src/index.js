import { createElement } from 'react';
import styled from 'styled-components';

module.exports = styles => props =>
  createElement(styled[props.tag || 'div'](styles), props, props.children);
