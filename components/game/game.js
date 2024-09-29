import { GameInfo } from './game-info'
import { GameCell } from './game-cell'
import { useGameState } from './use-game-state';
import { ResetButton } from './reset-button';

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

        <div className="flex flex-col items-center w-40 mx-auto my-24 border border-black p-5">
            <GameInfo
                winnerSymbol={winnerSymbol}
                isDraw={isDraw}
                currentStep={currentStep}
            />

            <div className="grid pt-px pl-px grid-cols-[repeat(3,_30px)] grid-rows-[repeat(3,_30px)]">
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
                <ResetButton onClick={handleResetClick}/>
            </div>
        </div>

    );
}