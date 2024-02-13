import { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
import { fetchBoardDetailsAPI, createNewColumnAPI, createNewCardAPI } from '~/apis'
// import { mockData } from '~/apis/mock-data'
import { generatePlaceholderCard } from '~/utils/formatter'
import { isEmpty } from 'lodash'

function Board() {
  const [board, setBoard] = useState(null)

  useEffect(() => {
    const boardId = '65b71f59778130202edf265c'
    // Call API
    fetchBoardDetailsAPI(boardId).then(board => {
      // Cần xử lí vấn đề kéo thả vào một column rỗng
      board.columns.forEach(column => {
        if (isEmpty(column.cards)) {
          column.cards = [generatePlaceholderCard(column)]
          column.cardOrderIds = [generatePlaceholderCard(column)._id]
        }
      })
      setBoard(board)
    })
  }, [])

  // Func này có nhiệm vụ gọi API để tạo mới Column và làm lại data State của Board
  const createNewColumn = async (newColumnData) => {
    const createdColumn = await createNewColumnAPI({
      ...newColumnData,
      boardId: board._id
    })

    // Khi tạo Column mới thì nó sẽ chưa có card, cần xử lí vấn đề kéo thả vào một Column rỗng
    createdColumn.cards = [generatePlaceholderCard(createdColumn)]
    createdColumn.cardOrderIds = [generatePlaceholderCard(createdColumn)._id]

    // Cập nhật lại State Board
    // Phía FE mình tự làm đúng lại state data board(thay vì gọi lại fetchBoardDetailsAPI)
    // Cách này phụ thuộc vào tuỳ project, có nơi thì BE sẽ hỗ trợ trả về luôn toàn bộ
    //Board dù đây có là API tạo Column hay Card đi chăng nữa => Lúc này FE sẽ nhàn hơn
    const newBoard = { ...board }
    newBoard.columns.push(createdColumn)
    newBoard.columnOrderIds.push(createdColumn._id)
    setBoard(newBoard)
  }

  // Func này có nhiệm vụ gọi API để tạo mới Card và làm lại data State của Board
  const createNewCard = async (newCardData) => {
    const createdCard = await createNewCardAPI({
      ...newCardData,
      boardId: board._id
    })

    // Cập nhật lại State Board
    // Phía FE mình tự làm đúng lại state data board(thay vì gọi lại fetchBoardDetailsAPI)
    // Cách này phụ thuộc vào tuỳ project, có nơi thì BE sẽ hỗ trợ trả về luôn toàn bộ
    //Board dù đây có là API tạo Column hay Card đi chăng nữa => Lúc này FE sẽ nhàn hơn
    const newBoard = { ...board }
    const columnToUpdate = newBoard.columns.find(column => column._id === createdCard.columnId)
    if (columnToUpdate) {
      columnToUpdate.cards.push(createdCard)
      columnToUpdate.cardOrderIds.push(createdCard._id)
    }
    setBoard(newBoard)
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
