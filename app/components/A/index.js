/**
 * A link to a certain page, an anchor tag
 */

import styled from 'styled-components';

import patternLibrary from '../../../libs/external-pattern-library.css';

const A = styled.a.attrs({
  className: 'pl-link'
})`
  color: #41addd;

  &:hover {
    color: #6cc0e5;
  }
`;

export default A;
