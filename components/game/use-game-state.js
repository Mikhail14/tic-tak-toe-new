import { useState } from "react";
import { SYMBOL_O, SYMBOL_X } from "./constants";

// Расчет победителя
const computeWinner = (cells) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return [a, b, c];
    }
  }
};

export function useGameState() {
  // Ячейки, текущий ход, победитель и определение ничьи
  const [cells, setCells] = useState(new Array(9).fill(null));
  const [currentStep, setCurrentStep] = useState(SYMBOL_O);
  const [winnerSequence, setWinnerSequence] = useState();
  const [isDraw, setIsDraw] = useState(false);

  // Символ победителя
  const winnerSymbol = winnerSequence ? cells[winnerSequence[0]] : undefined;

  // Обработка клика по ячейке
  const handleCellClick = (index) => {
    if (cells[index] || winnerSequence) {
      return;
    }
    const cellsCopy = cells.slice();
    cellsCopy[index] = currentStep;
    const winner = computeWinner(cellsCopy);

    setCells(cellsCopy);
    setCurrentStep(currentStep === SYMBOL_O ? SYMBOL_X : SYMBOL_O);
    setWinnerSequence(winner);
    const findNullCell = cellsCopy.find((c) => c === null);
    setIsDraw(findNullCell !== null && !winner);
  };

  const handleResetClick = () => {
    setCells(new Array(9).fill(null));
    setWinnerSequence(null);
    setIsDraw(false);
  };

  return {
    cells,
    currentStep,
    winnerSequence,
    isDraw,
    winnerSymbol,
    handleCellClick,
    handleResetClick,
  };
}
