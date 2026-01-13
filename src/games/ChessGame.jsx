import React, { useState, useEffect } from "react";
import "../styles/ChessGame.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useHomeEffects from "../utils/useHomeEffects";

const ChessGame = () => {
  useHomeEffects();
  const [gameMode, setGameMode] = useState(null); // null, 'human', 'computer'
  const [board, setBoard] = useState(initializeBoard());
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [validMoves, setValidMoves] = useState([]);
  const [isWhiteTurn, setIsWhiteTurn] = useState(true);
  const [gameStatus, setGameStatus] = useState("White to move");
  const [moveHistory, setMoveHistory] = useState([]);
  const [capturedPieces, setCapturedPieces] = useState({ white: [], black: [] });
  const [isComputerThinking, setIsComputerThinking] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  function initializeBoard() {
    const newBoard = Array(8)
      .fill(null)
      .map(() => Array(8).fill(null));

    // Set up pawns
    for (let i = 0; i < 8; i++) {
      newBoard[1][i] = { type: "pawn", color: "black" };
      newBoard[6][i] = { type: "pawn", color: "white" };
    }

    // Set up other pieces
    const pieces = ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"];
    for (let i = 0; i < 8; i++) {
      newBoard[0][i] = { type: pieces[i], color: "black" };
      newBoard[7][i] = { type: pieces[i], color: "white" };
    }

    return newBoard;
  }

  function getValidMoves(row, col, piece, boardState = board) {
    const moves = [];

    if (!piece) return moves;

    const { type, color } = piece;

    if (type === "pawn") {
      const direction = color === "white" ? -1 : 1;
      const startRow = color === "white" ? 6 : 1;

      // Move forward
      const nextRow = row + direction;
      if (nextRow >= 0 && nextRow < 8 && !boardState[nextRow][col]) {
        moves.push([nextRow, col]);

        // Double move from start
        if (row === startRow && !boardState[row + 2 * direction][col]) {
          moves.push([row + 2 * direction, col]);
        }
      }

      // Captures
      for (let dc of [-1, 1]) {
        const nc = col + dc;
        const nr = nextRow;
        if (nr >= 0 && nr < 8 && nc >= 0 && nc < 8 && boardState[nr][nc]) {
          if (boardState[nr][nc].color !== color) {
            moves.push([nr, nc]);
          }
        }
      }
    } else if (type === "knight") {
      const knightMoves = [
        [-2, -1],
        [-2, 1],
        [-1, -2],
        [-1, 2],
        [1, -2],
        [1, 2],
        [2, -1],
        [2, 1],
      ];
      for (let [dr, dc] of knightMoves) {
        const nr = row + dr;
        const nc = col + dc;
        if (nr >= 0 && nr < 8 && nc >= 0 && nc < 8) {
          if (!boardState[nr][nc] || boardState[nr][nc].color !== color) {
            moves.push([nr, nc]);
          }
        }
      }
    } else if (type === "bishop") {
      const directions = [
        [-1, -1],
        [-1, 1],
        [1, -1],
        [1, 1],
      ];
      for (let [dr, dc] of directions) {
        for (let i = 1; i < 8; i++) {
          const nr = row + dr * i;
          const nc = col + dc * i;
          if (nr < 0 || nr >= 8 || nc < 0 || nc >= 8) break;
          if (!boardState[nr][nc]) {
            moves.push([nr, nc]);
          } else {
            if (boardState[nr][nc].color !== color) {
              moves.push([nr, nc]);
            }
            break;
          }
        }
      }
    } else if (type === "rook") {
      const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
      ];
      for (let [dr, dc] of directions) {
        for (let i = 1; i < 8; i++) {
          const nr = row + dr * i;
          const nc = col + dc * i;
          if (nr < 0 || nr >= 8 || nc < 0 || nc >= 8) break;
          if (!boardState[nr][nc]) {
            moves.push([nr, nc]);
          } else {
            if (boardState[nr][nc].color !== color) {
              moves.push([nr, nc]);
            }
            break;
          }
        }
      }
    } else if (type === "queen") {
      const directions = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1],
      ];
      for (let [dr, dc] of directions) {
        for (let i = 1; i < 8; i++) {
          const nr = row + dr * i;
          const nc = col + dc * i;
          if (nr < 0 || nr >= 8 || nc < 0 || nc >= 8) break;
          if (!boardState[nr][nc]) {
            moves.push([nr, nc]);
          } else {
            if (boardState[nr][nc].color !== color) {
              moves.push([nr, nc]);
            }
            break;
          }
        }
      }
    } else if (type === "king") {
      const directions = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1],
      ];
      for (let [dr, dc] of directions) {
        const nr = row + dr;
        const nc = col + dc;
        if (nr >= 0 && nr < 8 && nc >= 0 && nc < 8) {
          if (!boardState[nr][nc] || boardState[nr][nc].color !== color) {
            moves.push([nr, nc]);
          }
        }
      }
    }

    return moves;
  }

  function handleSquareClick(row, col) {
    // Block clicks if game is over, computer is thinking, or if it's computer's turn in computer mode
    if (gameOver || isComputerThinking) return;
    if (gameMode === "computer" && !isWhiteTurn) return;

    const piece = board[row][col];

    // If clicking a valid move, make the move
    if (validMoves.some((move) => move[0] === row && move[1] === col)) {
      const newBoard = board.map((r) => [...r]);
      const capturedPiece = newBoard[row][col];
      newBoard[row][col] = newBoard[selectedSquare[0]][selectedSquare[1]];
      newBoard[selectedSquare[0]][selectedSquare[1]] = null;

      if (capturedPiece) {
        setCapturedPieces((prev) => ({
          ...prev,
          [isWhiteTurn ? "black" : "white"]: [
            ...prev[isWhiteTurn ? "black" : "white"],
            capturedPiece,
          ],
        }));

        // Check if the captured piece is a king - if so, game is over
        if (capturedPiece.type === "king") {
          setBoard(newBoard);
          setSelectedSquare(null);
          setValidMoves([]);
          const winner = isWhiteTurn ? "White" : "Black";
          setGameStatus(`🏆 ${winner} wins! King captured! Please restart the game.`);
          setGameOver(true);
          return;
        }
      }

      const moveNotation = `${String.fromCharCode(97 + selectedSquare[1])}${8 - selectedSquare[0]} → ${String.fromCharCode(97 + col)}${8 - row}`;
      setMoveHistory((prev) => [...prev, moveNotation]);

      setBoard(newBoard);
      setSelectedSquare(null);
      setValidMoves([]);
      setIsWhiteTurn(!isWhiteTurn);
      setGameStatus(`${!isWhiteTurn ? "White" : "Black"} to move`);

      // If playing against computer and it's now computer's turn
      if (gameMode === "computer" && !isWhiteTurn) {
        setTimeout(() => {
          makeComputerMove(newBoard);
        }, 300);

      }
      return;
    }

    // If clicking own piece, select it
    if (piece && piece.color === (isWhiteTurn ? "white" : "black")) {
      setSelectedSquare([row, col]);
      const moves = getValidMoves(row, col, piece);
      setValidMoves(moves);
    } else {
      setSelectedSquare(null);
      setValidMoves([]);
    }
  }

  function resetGame() {
    setBoard(initializeBoard());
    setSelectedSquare(null);
    setValidMoves([]);
    setIsWhiteTurn(true);
    setGameStatus("White to move");
    setMoveHistory([]);
    setCapturedPieces({ white: [], black: [] });
    setGameMode(null);
    setIsComputerThinking(false);
    setGameOver(false);
  }

  function makeComputerMove(currentBoard) {
    setIsComputerThinking(true);
    setTimeout(() => {
      const allBlackMoves = [];
      for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
          if (currentBoard[row][col] && currentBoard[row][col].color === "black") {
            const moves = getValidMoves(row, col, currentBoard[row][col], currentBoard);
            moves.forEach((move) => {
              allBlackMoves.push({ 
                from: [row, col], 
                to: move,
                piece: currentBoard[row][col],
                capturedPiece: currentBoard[move[0]][move[1]]
              });
            });
          }
        }
      }

      if (allBlackMoves.length === 0) {
        setGameStatus("Checkmate! White wins!");
        setIsComputerThinking(false);
        return;
      }

      // Easy AI: Prioritize capturing pieces, then threatening pieces, then random safe moves
      let selectedMove = null;

      // 1. Look for pieces to capture (prioritize high-value pieces)
      const captureMoves = allBlackMoves.filter(m => m.capturedPiece);
      if (captureMoves.length > 0) {
        // Prioritize capturing queen, then rook, then bishop/knight, then pawn
        const pieceValues = { queen: 9, rook: 5, bishop: 3, knight: 3, pawn: 1 };
        captureMoves.sort((a, b) => (pieceValues[b.capturedPiece.type] || 0) - (pieceValues[a.capturedPiece.type] || 0));
        selectedMove = captureMoves[0];
      }

      // 2. If no captures, look for attacking moves (moving forward, attacking pawns)
      if (!selectedMove) {
        const aggressiveMoves = allBlackMoves.filter(m => {
          // Prioritize pawn moves forward and knight/bishop moves to center
          if (m.piece.type === "pawn" && m.to[0] > m.from[0]) return true;
          if ((m.piece.type === "knight" || m.piece.type === "bishop") && 
              m.to[0] > 2 && m.to[0] < 6 && m.to[1] > 1 && m.to[1] < 7) return true;
          return false;
        });
        selectedMove = aggressiveMoves.length > 0 ? aggressiveMoves[Math.floor(Math.random() * aggressiveMoves.length)] : null;
      }

      // 3. Otherwise, pick a random move
      if (!selectedMove) {
        selectedMove = allBlackMoves[Math.floor(Math.random() * allBlackMoves.length)];
      }

      const newBoard = currentBoard.map((r) => [...r]);
      const capturedPiece = newBoard[selectedMove.to[0]][selectedMove.to[1]];

      if (capturedPiece) {
        setCapturedPieces((prev) => ({
          ...prev,
          black: [...prev.black, capturedPiece],
        }));

        // Check if the captured piece is a king - if so, game is over
        if (capturedPiece.type === "king") {
          newBoard[selectedMove.to[0]][selectedMove.to[1]] = newBoard[selectedMove.from[0]][selectedMove.from[1]];
          newBoard[selectedMove.from[0]][selectedMove.from[1]] = null;
          const moveNotation = `${String.fromCharCode(97 + selectedMove.from[1])}${8 - selectedMove.from[0]} → ${String.fromCharCode(97 + selectedMove.to[1])}${8 - selectedMove.to[0]}`;
          setBoard(newBoard);
          setMoveHistory((prev) => [...prev, moveNotation]);
          setGameStatus("🏆 Computer wins! Your king has been captured! Please restart the game.");
          setGameOver(true);
          setIsComputerThinking(false);
          return;
        }
      }

      newBoard[selectedMove.to[0]][selectedMove.to[1]] = newBoard[selectedMove.from[0]][selectedMove.from[1]];
      newBoard[selectedMove.from[0]][selectedMove.from[1]] = null;

      const moveNotation = `${String.fromCharCode(97 + selectedMove.from[1])}${8 - selectedMove.from[0]} → ${String.fromCharCode(97 + selectedMove.to[1])}${8 - selectedMove.to[0]}`;
      setMoveHistory((prev) => [...prev, moveNotation]);

      setBoard(newBoard);
      setSelectedSquare(null);
      setValidMoves([]);
      setIsWhiteTurn(true);
      setGameStatus("White to move");
      setIsComputerThinking(false);
    }, 800);
  }

  function getPieceSymbol(piece) {
    if (!piece) return "";
    const symbols = {
      pawn: "♟",
      rook: "♜",
      knight: "♞",
      bishop: "♝",
      queen: "♛",
      king: "♚",
    };
    return symbols[piece.type];
  }

  return (
    <div className="chess-game-container">
      <div id="cursor" />
      <div className="noise-overlay" />
      <Navbar />

      {!gameMode ? (
        <main className="chess-main">
          <section className="chess-hero">
            <div className="hero-gradient-bg"></div>
            <div className="hero-content">
              <h1 className="chess-title">♟ Virtual Chess Game</h1>
              <p className="chess-subtitle">Challenge yourself in a classic battle of strategy and intellect</p>
            </div>
          </section>

          <section className="chess-section">
            <div className="mode-selector">
              <h2 className="mode-title">Choose Game Mode</h2>
              <div className="mode-buttons">
                <button
                  onClick={() => setGameMode("human")}
                  className="mode-button human-mode"
                >
                  <div className="mode-icon">👥</div>
                  <div className="mode-label">Play with Human</div>
                  <div className="mode-desc">Play against another player on this device</div>
                </button>
                <button
                  onClick={() => setGameMode("computer")}
                  className="mode-button computer-mode coming-soon-btn"
                  disabled
                >
                  <div className="coming-soon-overlay">Coming Soon</div>
                  <div className="mode-icon">🤖</div>
                  <div className="mode-label">Play with Computer</div>
                  <div className="mode-desc">Challenge the AI (you play as white)</div>
                </button>
              </div>
            </div>
          </section>
        </main>
      ) : (
        <main className="chess-main">
          <section className="chess-hero">
            <div className="hero-gradient-bg"></div>
            <div className="hero-content">
              <h1 className="chess-title">♟ Virtual Chess Game</h1>
              <p className="chess-subtitle">
                {gameMode === "human" ? "👥 Human vs Human" : "🤖 Human vs Computer (Easy Level)"}
              </p>
            </div>
          </section>

          <section className="chess-section">
            <div className="chess-container">
              <div className="chess-board-wrapper">
                <div className="chess-board">
                  {board.map((row, rowIndex) => (
                    row.map((piece, colIndex) => {
                      const isLight = (rowIndex + colIndex) % 2 === 0;
                      const isSelected =
                        selectedSquare && selectedSquare[0] === rowIndex && selectedSquare[1] === colIndex;
                      const isValidMove = validMoves.some(
                        (move) => move[0] === rowIndex && move[1] === colIndex
                      );

                      return (
                        <div
                          key={`${rowIndex}-${colIndex}`}
                          className={`chess-square ${isLight ? "light" : "dark"} ${isSelected ? "selected" : ""} ${isValidMove ? "valid-move" : ""}`}
                          onClick={() => handleSquareClick(rowIndex, colIndex)}
                        >
                          {piece && (
                            <span className={`piece ${piece.color}`}>{getPieceSymbol(piece)}</span>
                          )}
                          {isValidMove && <div className="move-indicator"></div>}
                        </div>
                      );
                    })
                  ))}
                </div>
                <div className="board-labels">
                  <div className="files">
                    {["a", "b", "c", "d", "e", "f", "g", "h"].map((file) => (
                      <div key={file}>{file}</div>
                    ))}
                  </div>
                  <div className="ranks">
                    {[8, 7, 6, 5, 4, 3, 2, 1].map((rank) => (
                      <div key={rank}>{rank}</div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="chess-sidebar">
                <div className="game-status glass-panel">
                  <h3>Game Status</h3>
                  {isComputerThinking ? (
                    <p className="status-text thinking">🤔 Computer is thinking...</p>
                  ) : (
                    <>
                      <p className={`status-text ${isWhiteTurn ? "white-turn" : "black-turn"}`}>
                        {gameStatus}
                      </p>
                      <div className="current-turn">
                        <span className={`turn-indicator ${isWhiteTurn ? "white" : "black"}`}></span>
                        {isWhiteTurn ? "White's Turn" : gameMode === "computer" ? "Computer's Turn" : "Black's Turn"}
                      </div>
                    </>
                  )}
                </div>

                <div className="captured-pieces glass-panel">
                  <h3>Captured Pieces</h3>
                  <div className="captured-section">
                    <div className="captured-color">
                      <span className="label">White captured:</span>
                      <div className="pieces-display">
                        {capturedPieces.black.map((piece, idx) => (
                          <span key={idx} className="captured-piece black">
                            {getPieceSymbol(piece)}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="captured-color">
                      <span className="label">Black captured:</span>
                      <div className="pieces-display">
                        {capturedPieces.white.map((piece, idx) => (
                          <span key={idx} className="captured-piece white">
                            {getPieceSymbol(piece)}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="move-history glass-panel">
                  <h3>Move History</h3>
                  <div className="moves-list">
                    {moveHistory.length === 0 ? (
                      <p className="no-moves">No moves yet...</p>
                    ) : (
                      moveHistory.map((move, idx) => (
                        <div key={idx} className="move-item">
                          <span className="move-number">{Math.floor(idx / 2) + 1}.</span>
                          <span className="move-notation">{move}</span>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                <button onClick={resetGame} className="reset-button">
                  🔄 New Game
                </button>
              </div>
            </div>
          </section>
        </main>
      )}

      <Footer />
    </div>
  );
};

export default ChessGame;
