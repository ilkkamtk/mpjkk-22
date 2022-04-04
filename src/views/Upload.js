import {Button, CircularProgress, Grid, Typography} from '@mui/material';
import {useMedia} from '../hooks/ApiHooks';
import {useNavigate} from 'react-router-dom';
import useForm from '../hooks/FormHooks';

const Upload = () => {
  const alkuarvot = {
    title: '',
    description: '',
  };
  const {postMedia, loading} = useMedia();
  const navigate = useNavigate();

  const doUpload = async () => {
    try {
      console.log('doUpload');
      const token = localStorage.getItem('token');
      const formdata = new FormData();
      formdata.append('title', inputs.title);
      formdata.append('description', inputs.description);
      formdata.append('file', inputs.file);
      const mediaData = await postMedia(formdata, token);
      confirm(mediaData.message) && navigate('/home');
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

          <input
            type="file"
            name="file"
            accept="image/*, video/*, audio/*"
            onChange={handleInputChange}
          />
          {loading ? (
            <CircularProgress />
          ) : (
            <Button fullWidth color="primary" type="submit" variant="contained">
              Login
            </Button>
          )}
        </form>
      </Grid>
    </Grid>
  );
};

export default Upload;
