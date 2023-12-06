import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { Tooltip } from '@mui/material'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_STYLES = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingX: 2,
      gap: 2,
      overflowX: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label='Minatisleeping MERN Stack Board'
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label='Public/Private Workspace'
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label='Add To Google Drive'
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label='Automation'
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label='Filters'
          clickable
        />

      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={7}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': { bgcolor: '#a4b0be' }
            }
          }}
        >
          <Tooltip title='minatisleeping'>
            <Avatar
              alt="Minatisleeping"
              src="https://drive.google.com/uc?id=1Now0X3Y_2xfz68zv4-7pV12IF3ohpYLM" />
          </Tooltip>
          <Tooltip title='chanpunu'>
            <Avatar
              alt="Xp"
              src="https://scontent.fhan4-3.fna.fbcdn.net/v/t1.6435-9/122693594_146878467136914_7219505183091615041_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7a1959&_nc_ohc=oeyXZshOiswAX9lqWDa&_nc_ht=scontent.fhan4-3.fna&oh=00_AfBChqyybAjtXPyfnLXj9NgPSKzpMMrQDrO5wJjtsUdkzA&oe=658F45C8" />
          </Tooltip>
          <Tooltip title='chanpunu'>
            <Avatar
              alt="Xp"
              src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/329158831_1246351552961003_3086407150157530397_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=1MLJoo2WNlIAX_Aqebq&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfCLuccUt7VJNxEmxI40KpWqzzXFW9kWVmNjR9HMtlGLmQ&oe=6571CB78" />
          </Tooltip>
          <Tooltip title='chanpunu'>
            <Avatar
              alt="Xp"
              src="https://scontent.fhan3-4.fna.fbcdn.net/v/t39.30808-6/311879279_655456756279080_2881748940703634130_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=ht78zRRYKoQAX8n1KPS&_nc_ht=scontent.fhan3-4.fna&oh=00_AfDmvHeWtpxAYG28oxHqn9_htnJQiDlfbVbq0zWEH9Goeg&oe=656D502E" />
          </Tooltip>
          <Tooltip title='chanpunu'>
            <Avatar
              alt="Xp"
              src="https://farm66.staticflickr.com/65535/51787457781_d356acb798_o.jpg" />
          </Tooltip>
          <Tooltip title='chanpunu'>
            <Avatar
              alt="Xp"
              src="https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-6/275551940_513551340469623_4037602612271126958_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=XfGDtUylqs0AX-qjjhI&_nc_ht=scontent.fhan3-5.fna&oh=00_AfB7ErR4zAPoM60fGHm8TdwaMIMI_ZExsWFzlQWFm-0dPQ&oe=656DB659" />
          </Tooltip>
          <Tooltip title='chanpunu'>
            <Avatar
              alt="Xp"
              src="https://scontent.fhan4-3.fna.fbcdn.net/v/t1.6435-9/122693594_146878467136914_7219505183091615041_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7a1959&_nc_ohc=oeyXZshOiswAX9lqWDa&_nc_ht=scontent.fhan4-3.fna&oh=00_AfBChqyybAjtXPyfnLXj9NgPSKzpMMrQDrO5wJjtsUdkzA&oe=658F45C8" />
          </Tooltip>
          <Tooltip title='chanpunu'>
            <Avatar
              alt="Xp"
              src="https://scontent.fhan4-3.fna.fbcdn.net/v/t1.6435-9/122693594_146878467136914_7219505183091615041_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7a1959&_nc_ohc=oeyXZshOiswAX9lqWDa&_nc_ht=scontent.fhan4-3.fna&oh=00_AfBChqyybAjtXPyfnLXj9NgPSKzpMMrQDrO5wJjtsUdkzA&oe=658F45C8" />
          </Tooltip>
          <Tooltip title='chanpunu'>
            <Avatar
              alt="Xp"
              src="https://scontent.fhan4-3.fna.fbcdn.net/v/t1.6435-9/122693594_146878467136914_7219505183091615041_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7a1959&_nc_ohc=oeyXZshOiswAX9lqWDa&_nc_ht=scontent.fhan4-3.fna&oh=00_AfBChqyybAjtXPyfnLXj9NgPSKzpMMrQDrO5wJjtsUdkzA&oe=658F45C8" />
          </Tooltip>
          <Tooltip title='chanpunu'>
            <Avatar
              alt="Xp"
              src="https://scontent.fhan4-3.fna.fbcdn.net/v/t1.6435-9/122693594_146878467136914_7219505183091615041_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7a1959&_nc_ohc=oeyXZshOiswAX9lqWDa&_nc_ht=scontent.fhan4-3.fna&oh=00_AfBChqyybAjtXPyfnLXj9NgPSKzpMMrQDrO5wJjtsUdkzA&oe=658F45C8" />
          </Tooltip>
          <Tooltip title='chanpunu'>
            <Avatar
              alt="Xp"
              src="https://scontent.fhan4-3.fna.fbcdn.net/v/t1.6435-9/122693594_146878467136914_7219505183091615041_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7a1959&_nc_ohc=oeyXZshOiswAX9lqWDa&_nc_ht=scontent.fhan4-3.fna&oh=00_AfBChqyybAjtXPyfnLXj9NgPSKzpMMrQDrO5wJjtsUdkzA&oe=658F45C8" />
          </Tooltip>
          <Tooltip title='chanpunu'>
            <Avatar
              alt="Xp"
              src="https://scontent.fhan4-3.fna.fbcdn.net/v/t1.6435-9/122693594_146878467136914_7219505183091615041_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7a1959&_nc_ohc=oeyXZshOiswAX9lqWDa&_nc_ht=scontent.fhan4-3.fna&oh=00_AfBChqyybAjtXPyfnLXj9NgPSKzpMMrQDrO5wJjtsUdkzA&oe=658F45C8" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
