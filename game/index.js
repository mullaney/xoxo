import {Map} from 'immutable'

const MOVE = 'MOVE'

const initialState = {
  turn: 'X',
  board: Map()
}

/* action creator */

export const move = (player, position) => {
  return {
    type: MOVE,
    player,
    position
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case MOVE:
      return {
        turn: state.turn === 'X' ? 'O' : 'X',
        board: state.board.setIn(action.position, action.player)
      }
    default:
      return state
  }
}
