import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ROW_COLORS = {
  HEADER: '#deb5b545',
  DEFAULT: '#f5f5f5ab',
  CHECKED: '#e6e4e4',
};

const CourseListRow = ({
  isHeader = false,
  textFirstCell,
  textSecondCell = null,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const backgroundColor = isHeader ? ROW_COLORS.HEADER : isChecked ? ROW_COLORS.CHECKED : ROW_COLORS.DEFAULT;

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr style={{ backgroundColor }}>
          <th colSpan="2">{textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr style={{ backgroundColor }}>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr style={{ backgroundColor }}>
        <td>
          <input
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={isChecked}
          />
          {textFirstCell}
        </td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
