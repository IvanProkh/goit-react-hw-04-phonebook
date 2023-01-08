import PropTypes from 'prop-types';

import { Form } from './Filter.styled';

export const Filter = ({ filter, initialiseFilter }) => {
  return (
    <Form>
      <p>Find contact:</p>
      <input
        type="text"
        value={filter}
        onChange={event => initialiseFilter(event.target.value)}
      />
    </Form>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  initialiseFilter: PropTypes.func.isRequired,
};
