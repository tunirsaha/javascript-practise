const drawBoard = (_boardDef) => {
    let size = _boardDef.sizeInPx
    let colors = _boardDef.colors
    let el = document.createElement('style')
    el.innerText = `#chess-board{width:${size}px;height:${size}px;}#chess-board .tile{width:${size / 8}px;height:${size / 8}px;}#chess-board .tile.black{background-color:${colors[0]};}#chess-board .tile.white{background-color:${colors[1]};}`
    document.head.appendChild(el)
    buildTiles(_boardDef)
}

const buildTiles = (_boardDef) => {
    let flag = true
    let tileHtmlArr = ''
    const whitePieces = ['', '♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖',
        '♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'];
    const blackPieces = ['', '♟︎', '♟︎', '♟︎', '♟︎', '♟︎', '♟︎', '♟︎', '♟︎',
        '♜', '♞', '♝', '♝', '♛', '♚', '♞', '♜'];

    for (let i = 1; i <= 64; i++) {
        let piece = ''
        flag = !flag
        if (i % 8 == 1) flag = !flag
        if (_boardDef.loadPieces) {
            if (i <= 16)
                piece = `<span class="piece" style="color:${_boardDef.pieceColors[0]}">${whitePieces[i]}</span>`
            else {
                let j = i - 48
                if (j > 0)
                    piece = `<span class="piece" style="color:${_boardDef.pieceColors[1]}">${blackPieces[j]}</span>`
            }
        }
        tileHtmlArr += `<div class="tile ${flag ? 'white' : 'black'}">${piece}</div>`
    }
    document.getElementById('chess-board').innerHTML = tileHtmlArr
}