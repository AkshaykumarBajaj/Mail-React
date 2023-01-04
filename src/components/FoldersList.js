import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


function FoldersList({ open, mailsData }) {
  return (
    <>
      <List>
        {mailsData.map((folder, index) => (
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
              <ListItemText primary={folder.unreadCount} primaryTypographyProps={{ padding: "10px" }} sx={{ background: 'rgba(0,0,0,.10)', borderRadius: 100, margin: "5px" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default FoldersList