import styles from "./game.module.css"
import { SYMBOL_O, SYMBOL_X } from './constants'

// Рендер символов
export function GameSymbol({ symbol }) {
    // Получить имя класса
    const getSymbolClassName = (symbol) => {
        if (symbol === SYMBOL_O) return styles['symbol--o']
        if (symbol === SYMBOL_X) return styles['symbol--x']
        return ''
    }
    return <span className={`${styles["symbol"]} ${getSymbolClassName(symbol)}`}>{symbol}</span>
}