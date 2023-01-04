import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import DeleteIcon from '@mui/icons-material/Delete';
import BlockIcon from '@mui/icons-material/Block';

function FoldersList({ open }) {

  let folders = [
    {
      name: "Inbox",
      icon: <InboxIcon />,
      filename: "inbox.json"
    },
    {
      name: "Drafts",
      icon: <DraftsIcon />,
      filename: "drafts.json"
    },
    {
      name: "Junk Mail",
      icon: <BlockIcon />,
      filename: "spam.json"
    },
    {
      name: "Deleted Items",
      icon: <DeleteIcon />,
      filename: "deleted.json"
    },
  ]
  return (
    <>
      <List>
        {folders.map((folder, index) => (
          <ListItem key={folder.name} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {folder.icon}
              </ListItemIcon>
              <ListItemText primary={folder.name} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default FoldersList