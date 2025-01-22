import styles from './Sidebar.module.scss';
import { createSignal } from 'solid-js';

export default function Sidebar({ items = [] }) {
  const [isOpen, setIsOpen] = createSignal(false);

  const doneCount = items.filter((todo) => todo.active && todo.done).length;
  const activeCount = items.filter((todo) => todo.active && !todo.done).length;
  const deletedCount = items.filter((todo) => !todo.active).length;
  const totalCount = items.length;

  const handleSidebarClick = () => {
    setIsOpen(!isOpen());
  };

  return (
    <div onClick={handleSidebarClick}>
      <div className={`${styles.sidebar} ${isOpen() ? styles.open : ''}`}>
        <div>
          <div className={styles.rotatedText}>Statistik</div>
        </div>
        <div>
          <h3>Aufgaben insgesamt</h3>
          <h1 id="total-count">{totalCount}</h1>
          <h3>Aufgaben Offen</h3>
          <h1 id="active-count">{activeCount}</h1>
          <h3>Aufgaben erledigt</h3>
          <h1 id="done-count">{doneCount}</h1>
          <h3>Aufgaben gelöscht</h3>
          <h1 id="deleted-count">{deletedCount}</h1>
        </div>
      </div>
    </div>
  );
}
