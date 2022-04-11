import {Button, ImageListItem, ImageListItemBar} from '@mui/material';
import PropTypes from 'prop-types';
import {useContext} from 'react';
import {MediaContext} from '../contexts/MediaContext';
// import {Link} from 'react-router-dom';
import {mediaUrl} from '../utils/variables';

const MediaRow = ({file, userId, deleteMedia}) => {
  const {update, setUpdate} = useContext(MediaContext);
  const doDelete = () => {
    const deleteInfo = deleteMedia(file.file_id, localStorage.getItem('token'));
    if (deleteInfo) {
      setUpdate(!update);
    }
  };

  return (
    <ImageListItem
      key={file.file_id}
      // component={Link}
      // to={'/single'}
      state={{file}}
    >
      <img
        src={file.thumbnails ? mediaUrl + file.thumbnails.w320 : 'logo512.png'}
        alt={file.title}
        loading="lazy"
      />
      <ImageListItemBar
        actionIcon={
          <>
            {userId === file.user_id && (
              <>
                <Button variant="contained">Edit</Button>
                <Button variant="contained" onClick={doDelete}>
                  Delete
                </Button>
              </>
            )}
          </>
        }
        title={file.title}
        subtitle={file.description}
      />
    </ImageListItem>
  );
};

MediaRow.propTypes = {
  file: PropTypes.object,
  userId: PropTypes.number,
  deleteMedia: PropTypes.func,
};

export default MediaRow;
