import inboxMails from "./jsonServer/inbox.json"
import draftMails from "./jsonServer/draft.json"
import deletedMails from "./jsonServer/deleted.json"
import spamMails from "./jsonServer/spam.json"
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import DeleteIcon from '@mui/icons-material/Delete';
import BlockIcon from '@mui/icons-material/Block';

export const mailsData = [
    {
      name: "Inbox",
      icon: <InboxIcon />,
      data: inboxMails,
      unreadCount : getUnreadMailsCount(inboxMails) 
    },
    {
      name: "Drafts",
      icon: <DraftsIcon />,
      data: draftMails,
      unreadCount : getUnreadMailsCount(draftMails)
     },
    {
      name: "Junk Mail",
      icon: <BlockIcon />,
      data: spamMails,
      unreadCount : getUnreadMailsCount(spamMails)
    },
    {
      name: "Deleted Items",
      icon: <DeleteIcon />,
      data: deletedMails,
      unreadCount : getUnreadMailsCount(deletedMails)
    }
  ]

function getUnreadMailsCount(mails){
    return mails.filter(mail => mail.unread).length;
  }