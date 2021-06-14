//import '@testing-library/react/cleanup-after-each';
//import '@testing-library/jest-dom/extend-expect';
// import { enzyme } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
