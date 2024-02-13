import { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
import { fetchBoardDetailsAPI, createNewColumnAPI, createNewCardAPI } from '~/apis'
// import { mockData } from '~/apis/mock-data'

function Board() {
  const [board, setBoard] = useState(null)

  useEffect(() => {
    const boardId = '65b71f59778130202edf265c'
    // Call API
    fetchBoardDetailsAPI(boardId).then(board => {
      setBoard(board)
    })
  }, [])

  // Func này có nhiệm vụ gọi API để tạo mới Column và làm lại data State của Board
  const createNewColumn = async (newColumnData) => {
    const createdColumn = await createNewColumnAPI({
      ...newColumnData,
      boardId: board._id
    })
    console.log('createdColumn: ', createdColumn)

    // Cập nhật lại State Board
  }

  // Func này có nhiệm vụ gọi API để tạo mới Card và làm lại data State của Board
  const createNewCard = async (newCardData) => {
    const createdCard = await createNewCardAPI({
      ...newCardData,
      boardId: board._id
    })
    console.log('createdCard: ', createdCard)

    // Cập nhật lại State Board
  }

  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />
      <BoardBar board={board} />
      <BoardContent
        board={board}
        createNewColumn={createNewColumn}
        createNewCard={createNewCard}
      />
    </Container>
  )
}

export default Board
