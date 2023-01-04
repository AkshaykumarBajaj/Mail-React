import { Box } from '@mui/system'
import { React, useEffect } from 'react'
import parse from 'html-react-parser';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import data from "../jsonServer/inbox.json"

function MailList() {
    return (
        <List>
            {data.map((mail) => (
                <ListItem key={mail.mId} >
                    <ListItemButton sx={{
                        background: mail.unread ? "rgba(0,0,0,.25)" : "rgba(0,0,0,.10)",
                        borderRadius: 2,
                    }}>
                        <ListItemText
                            primary={mail.subject}
                            primaryTypographyProps={{ fontWeight: mail.unread ? "bold" : "normal" }}
                            secondary={parse(mail.content.substring(0, 50) + "...")}
                            secondaryTypographyProps={{ color: mail.unread ? "blue" : "black" }} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    )
}

export default MailList