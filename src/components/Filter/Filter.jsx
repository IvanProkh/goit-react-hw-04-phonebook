import PropTypes from 'prop-types';

import { Form } from './Filter.styled';

const Filter = ({ filter, onChange }) => {
  return (
    <Form>
      <p>Filter name:</p>
      <input type="text" value={filter} onChange={onChange} />
    </Form>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
