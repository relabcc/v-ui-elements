import kebabCase from 'lodash/kebabCase';
import isNil from 'lodash/isNil';

export default key => props => !isNil(props[key]) && `${kebabCase(key)}: ${props[key]};`;
