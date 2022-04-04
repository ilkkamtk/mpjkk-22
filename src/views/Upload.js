import {Button, Grid, Typography} from '@mui/material';
import {useContext} from 'react';
// import {useNavigate} from 'react-router-dom';
import {MediaContext} from '../contexts/MediaContext';
import useForm from '../hooks/FormHooks';

const Upload = () => {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useContext(MediaContext);
  const alkuarvot = {
    title: '',
    description: '',
  };

  // const navigate = useNavigate();

  const doUpload = async () => {
    try {
      console.log('doUpload');
    } catch (err) {
      alert(err.message);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doUpload,
    alkuarvot
  );
  console.log(inputs);
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography component="h1" variant="h2" gutterBottom>
          Login
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="title"
            name="title"
            onChange={handleInputChange}
            value={inputs.title}
          />
          <textarea
            placeholder="description"
            name="description"
            onChange={handleInputChange}
            value={inputs.description}
          ></textarea>

          <Button fullWidth color="primary" type="submit" variant="contained">
            Login
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default Upload;
