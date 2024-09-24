import styles from './game.module.css'
import { GameInfo } from './game-info'
import { GameCell } from './game-cell'
import { useGameState } from './use-game-state';

// Рендер страницы
export function Game() {
    const {
        cells,
        currentStep,
        winnerSequence,
        isDraw,
        winnerSymbol,
        handleCellClick,
        handleResetClick
    } = useGameState();

    return (
        <div className="App">
            <div className={styles['game']}>
                <GameInfo
                    winnerSymbol={winnerSymbol}
                    isDraw={isDraw}
                    currentStep={currentStep}
                />

                <div className={styles['game-field']}>
                    {
                        cells.map((symbol, index) => {
                            // ? - не будет вызывать в случае underfined
                            const isWinner = winnerSequence?.includes(index)
                            return (
                                <GameCell
                                    key={index}
                                    isWinner={isWinner}
                                    onClick={() => handleCellClick(index)}
                                    symbol={symbol}
                                />
                            )
                        })
                    }
                </div>

                <div>
                    <button
                        onClick={() => handleResetClick()}
                        className={styles['reset']}>Начать заново</button>
                </div>
            </div>
        </div>
    );
}