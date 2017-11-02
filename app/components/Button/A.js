import styled from 'styled-components';

import buttonStyles from './buttonStyles';

import patternLibrary from '../../../libs/external-pattern-library.css';

const A = styled.a.attrs({
  className: 'pl-button'
})`${buttonStyles}`;

export default A;
