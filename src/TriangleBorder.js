import Border from './Border';
import getColor from './utils/getColor';

const TriangleBorder = Border.extend`
  background-color: rgba(255,255,255,0.2);
  position: relative;
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    right:0;
    top: 0;
    border-bottom: 1.25em solid transparent;
    border-right: 1.25em solid ${props => getColor(props.borderColor)(props)};
    border-top: 0 solid transparent;
    border-left: 0 solid transparent;
  }

  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left:0;
    bottom: 0;
    border-bottom: 0 solid transparent;
    border-right: 0 solid transparent;
    border-top: 1.25em solid transparent;
    border-left: 1.25em solid ${props => getColor(props.borderColor)(props)};
  }
`;

export default TriangleBorder;
