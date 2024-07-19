class Board {

    board;
    currentPlayer; 
    winner;
    flag; // false if game hasnt finished yet

    constructor() {
        // -1=empty, 0=nought, 1=cross
        this.board = [
            [-1, -1, -1],
            [-1, -1, -1],
            [-1, -1, -1]
        ];
        this.currentPlayer = 0;
        this.winner = -1; // -1=game not over, 0=nought, 1=cross, 2=draw
        this.flag = false; 
    }

    makemove(pos) {
        if(this.flag) {
            return;
        }
        var column = pos%3;
        var row = Math.floor(pos/3);
        if(this.board[row][column] != -1) {
            return;
        }
        if(this.currentPlayer == 0) {
            this.board[row][column] = 0;
            document.getElementById((row*3 + column).toString()).textContent = "O";
        } else {
            this.board[row][column] = 1;
            // Make computer move
        }
        this.currentPlayer = (this.currentPlayer + 1) % 2;
        
        if(this.hasGameFinished()) {
            
        }
    }

    hasGameFinished() {
        
        return false;

    }

    getBinaryString(player) {
        var str = "";
        var currentBoard = this.board.toString().split(",");
        for(let i=0; i<= currentBoard.length; i++) {
            if(currentBoard[i] === player) {
                str += "1";
            } else {
                str += "0";
            }
        }
        return str;
    }

    reset() {
        this.board = [
            [-1, -1, -1],
            [-1, -1, -1],
            [-1, -1, -1]
        ];
        this.currentPlayer = 0;
        this.winner = -1; 
        this.flag = false;
        for(let row=0; row<3; row++) {
            for(let col=0; col<3; col++) {
                document.getElementById((row*3 + col).toString()).textContent = " ";
            }
        }
    }
}