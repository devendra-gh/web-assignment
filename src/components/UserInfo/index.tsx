import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import { useUserData } from '../../redux/storeConfig/states';

const Title = React.lazy(() => import('../Title'));

const UserInfo = () => {
  const { auth } = useUserData();

  return (
    <React.Fragment>
      <Title><FormattedMessage id="user_info" /></Title>

      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem sx={{ padding: 0 }}>

          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>

          <ListItemText
            primary={`${auth?.firstname} ${auth?.lastname}`}
            secondary={`${auth?.email}`}
          />
        </ListItem>
      </List>
    </React.Fragment>
  );
}

export default UserInfo;
