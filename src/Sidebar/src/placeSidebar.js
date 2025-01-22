import { render } from 'solid-js/web';
import Sidebar from './components/Sidebar/Sidebar';

export default function placeSidebar(el, { isOpen, setIsOpen, items }) {
  render(
    () => <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} items={items} />,
    el,
  );
}
