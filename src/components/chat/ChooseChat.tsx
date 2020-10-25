import {
  Box, Checkbox, FormControl, Input, InputLabel, ListItemText, MenuItem, Select,
} from '@material-ui/core';
import { observer } from 'mobx-react';
import React, { ReactElement, useState } from 'react';
import { compose } from 'recompose';
import { User } from '../../stores/UsersStore';
import withUsersList, { WithUsersInicjetedProps } from '../App/WithUsersList';

type Props = {} & WithUsersInicjetedProps;

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const UsersPicker: React.FunctionComponent<any> = (props: Props): ReactElement => {
  const { users } = props.userStore;
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const handleChange = (e: any) => setSelectedUsers(e.target.value);
  const renderValue = (selected: any) => users.filter((user: User) => (selected as string[]).indexOf(user.uid) !== -1).map((user:User) => user.name).join(', ');
  return (
    <Box paddingTop="1em" textAlign="center">
      <FormControl style={{ maxWidth: '70%', minWidth: '50%' }}>
        <InputLabel>Start chatting with ...</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          multiple
          variant="filled"
          value={selectedUsers}
          onChange={handleChange}
          input={<Input />}
          renderValue={renderValue}
          MenuProps={MenuProps}
        >
          {users.map((user: User) => (
            <MenuItem key={user.uid} value={user.uid}>
              <Checkbox checked={selectedUsers.indexOf(user.uid) > -1} />
              <ListItemText primary={user.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default compose<Props, {}>(
  withUsersList,
  observer,
)(UsersPicker);
