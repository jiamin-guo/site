import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: (props) => {
      let background = '';
      switch (props.color) {
        case 'blue-dark':
          background = 'linear-gradient(45deg, #4CD9ED 0%, #437FEC 90%)';
          break;
        case 'blue':
          background = 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)';
          break;
        default:
          background = 'linear-gradient(45deg, #FF5C87 -28.62%, #A033FF 36.39%, #0088FF 98.74%)';
          break;
      }
      return background;
    },
    letterSpacing: '4px',
    border: 0,
    boxShadow: (props) => {
      let boxShadow = '';
      switch (props.color) {
        case 'blue-dark':
          boxShadow = '0 3px 5px 2px rgba(67, 127, 236, .3)';
          break;
        case 'blue':
          boxShadow = '0 3px 5px 2px rgba(33, 203, 243, .3)';
          break;
        default:
          boxShadow = '0 3px 5px 2px rgba(240, 46, 170, 0.4)';
          break;
      }
      return boxShadow;
    },
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: 8,
    borderRadius: '30px',
    fontWeight: 'bold',
  },
});

const GradientButton = ({
  type,
  color,
  onClick,
  children,
  opClass
}) => {
  const classes = useStyles({ color });
  return <Button type={type} className={`${classes.root} ${opClass}`} onClick={onClick}>{ children }</Button>;
};

GradientButton.defaultProps = {
  color: null,
  type: 'button',
};

export default GradientButton;
