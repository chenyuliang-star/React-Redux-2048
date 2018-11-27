import createStore from "redux";

const initState = {
    currentScore: 0,
    bestScore: 0,
    gameMapState: [
        [1024,1024,512,256],
        [128,64,32,16],
        [8,4,2,4],
        [1,8,4,2]
    ]
}

const gameReducer =  ( state = initState, action ) => {
    switch (action.type) {
        case "new-game-action": {
            const pos1_x = Math.floor(Math.random()*4) % 4;
            const pos1_y = Math.floor(Math.random()*4) % 4;
            const pos2_x = (pos1_x + 2) % 4;
            const pos2_y = (pos1_y + 2) % 4
            const isTowOrFour1 = Boolean((Math.random() - 0.5) > 0);
            const isTowOrFour2 = Boolean((Math.random() - 0.5) > 0);
            const newState = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
            if (isTowOrFour1) newState[pos1_x][pos1_y] = 4;
            else newState[pos1_x][pos1_y] = 2;
            if (isTowOrFour2) newState[pos2_x][pos2_y] = 4;
            else newState[pos2_x][pos2_y] = 2;
            return {
                currentScore: 0,
                bestScore: state.bestScore,
                gameMapState: newState
            }
        }
        case "random-action" : {
            let flag = true;
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 4; j++) {
                    if (state.gameMapState[i][j] == 0 ) {
                        flag = false;
                    }
                }
            }
            if (flag) {
               let con =  window.confirm("Game Over！Try Again?");
               if (con) {  
                    const pos1_x = Math.floor(Math.random()*4) % 4;
                    const pos1_y = Math.floor(Math.random()*4) % 4;
                    const pos2_x = (pos1_x + 2) % 4;
                    const pos2_y = (pos1_y + 2) % 4;
                    const isTowOrFour1 = Boolean((Math.random() - 0.5) > 0);
                    const isTowOrFour2 = Boolean((Math.random() - 0.5) > 0);
                    const newState = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
                    if (isTowOrFour1) newState[pos1_x][pos1_y] = 4;
                    else newState[pos1_x][pos1_y] = 2;
                    if (isTowOrFour2) newState[pos2_x][pos2_y] = 4;
                    else newState[pos2_x][pos2_y] = 2;
                    return {
                        currentScore: 0,
                        bestScore: state.bestScore,
                        gameMapState: newState
                    }
               }
               else return {
                    currentScore: state.currentScore,
                    bestScore: Math.max(state.bestScore, state.currentScore),
                    gameMapState: state.gameMapState
               }
            }
            while (true) {
                const map = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
                for (let i = 0; i < 4; i++) {
                    for (let j = 0; j < 4; j++) {
                        map[i][j] = state.gameMapState[i][j];
                    }
                }
                const pos1_x = Math.floor(Math.random()*4) % 4;
                const pos1_y = Math.floor(Math.random()*4) % 4;
                if (map[pos1_x][pos1_y] == 0) {
                    const isTowOrFour1 = Boolean((Math.random() - 0.5) > 0);
                    if (isTowOrFour1) map[pos1_x][pos1_y] = 4;
                    else map[pos1_x][pos1_y] = 2;
                    console.log(map);
                    return {
                        currentScore: state.currentScore,
                        bestScore: Math.max(state.bestScore, state.currentScore),
                        gameMapState: map
                    }
                }
            }
        }
        case "move-up-action": {
            const map = state.gameMapState;
            let addSorce = 0;
            let newMapState = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
            for (let j = 0; j < 4; j++) {
                let curArr = [];
                for (let i = 0; i < 4; i++) {
                    if (map[i][j] != 0) curArr.push(map[i][j]);
                }
                let cnt = 4;
                while ((cnt--)>0) {
                    for (let k = 0; k < curArr.length - 1; k++ ) {
                        if (curArr[k] == curArr[k+1]) {
                            curArr[k] = 2*curArr[k];
                            addSorce += curArr[k];
                            curArr.splice(k+1, 1);
                        }
                    }
                }
                cnt = 0;
                for (let k = 0; k < curArr.length; k++) {
                    newMapState[cnt++][j] = curArr[k];
                }
            }
            return {
                currentScore: state.currentScore + addSorce,
                bestScore: state.bestScore,
                gameMapState: newMapState
            }
        }
        case "move-down-action": {
            const map = state.gameMapState;
            let addSorce = 0;
            let newMapState = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
            for (let j = 0; j < 4; j++) {
                let curArr = [];
                for (let i = 0; i < 4; i++) {
                    if (map[i][j] != 0) curArr.push(map[i][j]);
                }
                let cnt = 4;
                while ((cnt--)>0) {
                    for (let k = curArr.length - 1; k > 0; k-- ) {
                        if (curArr[k] == curArr[k-1]) {
                            curArr[k] = 2*curArr[k];
                            addSorce += curArr[k];
                            curArr.splice(k-1, 1);
                            k--;
                        }
                    }
                }
                cnt = 3;
                for (let k = curArr.length - 1; k >= 0; k--) {
                    newMapState[cnt--][j] = curArr[k];
                }
            }
            return {
                currentScore: state.currentScore + addSorce,
                bestScore: Math.max(state.bestScore, state.currentScore),
                gameMapState: newMapState
            }
        }
        case "move-left-action": {
            const map = state.gameMapState;
            let addSorce = 0;
            let newMapState = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
            for (let i = 0; i < 4; i++) {
                let curArr = [];
                for (let j = 0; j < 4; j++) {
                    if (map[i][j] != 0) curArr.push(map[i][j]);
                }
                let cnt = 4;
                while ((cnt--)>0) {
                    for (let k = 0; k < curArr.length - 1; k++ ) {
                        if (curArr[k] == curArr[k+1]) {
                            curArr[k] = 2*curArr[k];
                            addSorce += curArr[k];
                            curArr.splice(k+1, 1);
                        }
                    }
                }
                cnt = 0;
                for (let k = 0; k < curArr.length; k++) {
                    newMapState[i][cnt++]=curArr[k];
                }
            }
            return {
                currentScore: state.currentScore + addSorce,
                bestScore: Math.max(state.bestScore, state.currentScore),
                gameMapState: newMapState
            }
        }
        case "move-right-action": {
            const map = state.gameMapState;
            let addSorce = 0;
            let newMapState = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
            for (let i = 0; i < 4; i++) {
                let curArr = [];
                for (let j = 0; j < 4; j++) {
                    if (map[i][j] != 0) curArr.push(map[i][j]);
                }
                let cnt = 4;
                while ((cnt--)>0) {
                    for (let k = curArr.length - 1; k > 0; k-- ) {
                        if (curArr[k] == curArr[k-1]) {
                            curArr[k] = 2*curArr[k];
                            addSorce += curArr[k];
                            curArr.splice(k-1, 1);
                            k--;
                        }
                    }
                }
                cnt = 3;
                for (let k = curArr.length - 1; k >= 0; k--) {
                    newMapState[i][cnt--] = curArr[k];
                }
            }
            return {
                currentScore: state.currentScore + addSorce,
                bestScore: Math.max(state.bestScore, state.currentScore),
                gameMapState: newMapState
            }
        }
        case "game-success-action": {
            let isSuccess = false;
            const map = state.gameMapState;
            for (let  i = 0; i < 4; i++) {
                for (let j = 0; j < 4; j++) {
                    if (map[i][j] == 2048) {
                        isSuccess = true;
                    }
                }
            }
            if (isSuccess) alert("Best of best! Congratulations!!!");
            return {
                currentScore: state.currentScore,
                bestScore: state.bestScore,
                gameMapState: state.gameMapState
            }
        }
        default : break;
    }
    return state;
}
export default gameReducer;