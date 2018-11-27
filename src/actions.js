
  function newGameAction () {
      return {
          type: "new-game-action",
          text: "start a new game!"
      }
  }
  function moveUpAction () {
      return {
          type: "move-up-action",
          text: "move up"
      }
  }
  function moveRightAction ()  {
    return {
        type: "move-right-action",
        text: "move right"
    }
  }
  function moveDownAction ()  {
    return {
        type: "move-down-action",
        text: "move down"
    }
  }
  function moveLeftAction ()  {
    return {
        type: "move-left-action",
        text: "move left"
    }
  }

  function randomAction () {
      return {
          type: "random-action",
          text: "random a item"
      }
  }
  function gameSuccessAction () {
      return {
          type: "game-success-action",
          text: "congratulation"
      }
  }
export { newGameAction, moveUpAction, moveRightAction, moveDownAction, moveLeftAction, randomAction, gameSuccessAction };