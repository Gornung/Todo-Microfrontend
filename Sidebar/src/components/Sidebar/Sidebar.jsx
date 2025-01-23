import styles from './Sidebar.module.scss';
import { createSignal } from 'solid-js';

export default function Sidebar({ items = [] }) {
  const [isOpen, setIsOpen] = createSignal(false);

  console.log(isOpen());

  const handleSidebarClick = () => {
    console.log('clicked', isOpen());
    setIsOpen(!isOpen());
  };

  return (
    <div onClick={handleSidebarClick}>
      <div className={`${styles.sidebar} ${isOpen() ? styles.open : ''}`}>
        <h3>Sidebar Inhalt</h3>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div
        className={`${styles.content} ${isOpen ? styles.shifted : ''}`}
      ></div>
    </div>
  );
}
