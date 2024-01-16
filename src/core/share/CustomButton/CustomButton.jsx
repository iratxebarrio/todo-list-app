import { Button } from '@mui/material';
import PropTypes from 'prop-types'

export const CustomButton = ({ value, className, variant, style, onClick }) => {
 
  return (
  
      <Button 
        onClick={onClick}
        style={style} 
        variant={variant} 
        className={className}
      >
          {value}
      </Button>
   
  );
};

CustomButton.propTypes = {
    value: PropTypes.string.isRequired,
    className: PropTypes.string,
    variant: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
   
}