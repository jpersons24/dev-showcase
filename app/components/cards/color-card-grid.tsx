import ColorCard from './color-card';
import { colorCardData } from './colorCardData';
import styles from './styles.module.css';

export default function ColorCardGrid() {
  const colorCards = colorCardData.map((card) => {
    return (
      <ColorCard
        key={card.color}
        columnStart={card.columnStart}
        columnEnd={card.columnEnd}
        row={card.row}
        color={card.color}
      >
        {card.children}
      </ColorCard>
    );
  });
  return <div className={styles.grid}>{colorCards}</div>;
}
