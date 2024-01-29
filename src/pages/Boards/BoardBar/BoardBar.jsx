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
import { capitalizeFirstLetter } from '~/utils/formatter'

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

function BoardBar({ board }) {
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
        <Tooltip title={board?.description}>
          <Chip
            sx={MENU_STYLES}
            icon={<DashboardIcon />}
            label={board?.title}
            clickable
          />
        </Tooltip>
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label={capitalizeFirstLetter(board?.type)}
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
              src="https://img.freepik.com/free-photo/3d-illustration-cute-cartoon-boy-with-backpack-his-back_1142-40542.jpg?t=st=1706343237~exp=1706346837~hmac=32a3ed73c2cb02099cfb469266430beada20f21bb61f11ea6b0e8fe8d22c770d&w=1380" />
          </Tooltip>
          <Tooltip title='chanpunu'>
            <Avatar
              alt="Xp"
              src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100179.jpg?t=st=1706343266~exp=1706346866~hmac=82bb775f1ba3bd647d8503fb1c69b390ac2859b8476e347201ed1b93c8088929&w=826" />
          </Tooltip>
          <Tooltip title='person1'>
            <Avatar
              alt="Xp"
              src="https://img.freepik.com/free-psd/3d-illustration-person_23-2149436179.jpg?w=826&t=st=1703216278~exp=1703216878~hmac=ea2fde7042dd4bd65dae4c151155befe596a15d643ca8f9ae3d49c0dff03b36f" />
          </Tooltip>
          <Tooltip title='person2'>
            <Avatar
              alt="Xp"
              src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?w=826&t=st=1703216368~exp=1703216968~hmac=be48722c9eb616db624d9e3c5e1c1134992c87f4bf317cbfc4e1d05c5ad55c66" />
          </Tooltip>
          <Tooltip title='chanpunu'>
            <Avatar
              alt="Xp"
              src="https://farm66.staticflickr.com/65535/51787457781_d356acb798_o.jpg" />
          </Tooltip>
          <Tooltip title='person3'>
            <Avatar
              alt="Xp"
              src="https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611737.jpg?w=826&t=st=1703216426~exp=1703217026~hmac=dced3c61d101b98bb310888975982b70fa677b97c511dc8761541493d82373d2" />
          </Tooltip>
          <Tooltip title='chanpunu'>
            <Avatar
              alt="Xp"
              src="https://scontent.fhan4-3.fna.fbcdn.net/v/t1.6435-9/122693594_146878467136914_7219505183091615041_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7a1959&_nc_ohc=oeyXZshOiswAX9lqWDa&_nc_ht=scontent.fhan4-3.fna&oh=00_AfBChqyybAjtXPyfnLXj9NgPSKzpMMrQDrO5wJjtsUdkzA&oe=658F45C8" />
          </Tooltip>
          <Tooltip title='chanpunu'>
            <Avatar
              alt="Xp"
              src="https://img.freepik.com/free-photo/3d-illustration-cute-cartoon-girl-blue-jacket-glasses_1142-41044.jpg?t=st=1706343322~exp=1706346922~hmac=de12ae303f8a2d229bf0becf1f2610b72232c09e62bd16177e73f4f4dddc3d96&w=1380" />
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
