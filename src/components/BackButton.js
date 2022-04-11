import {ArrowBack} from '@mui/icons-material';
import {Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <Button
      startIcon={<ArrowBack />}
      onClick={() => {
        navigate('/home');
      }}
    >
      Back
    </Button>
  );
};

export default BackButton;
