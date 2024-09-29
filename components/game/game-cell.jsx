import { GameSymbol } from "./game-symbol"
import { clsx } from "clsx"

// Игровые ячейки
export function GameCell({ isWinner, onClick, symbol }) {
    return (
        <button
            className={clsx(
                "border border-solid border-gray-400 -ml-px -mt-px flex items-center justify-center bg-transparent", 
                isWinner && "bg-red-100"
            )}
            onClick={onClick}>{symbol ? <GameSymbol symbol={symbol} /> : null}
        </button>
    )
}