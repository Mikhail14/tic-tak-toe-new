import { GameSymbol } from "./game-symbol"
import styles from "./game.module.css"

// Игровые ячейки
export function GameCell({ isWinner, onClick, symbol }) {
    return (
        <button
            className={`${styles['cell']} ${isWinner ? styles['cell--win'] : ''}`}
            onClick={onClick}>{symbol ? <GameSymbol symbol={symbol} /> : null}
        </button>
    )
}