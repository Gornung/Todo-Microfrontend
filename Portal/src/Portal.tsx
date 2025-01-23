import React from 'react';
import ReactDOM from 'react-dom/client';
import './Portal.module.scss';

import {
  Button,
  Input,
  ErrorBoundary,
  Container,
  Textarea,
  Footer,
  Header,
} from 'elements/Elements';
import placeSidebar from 'sidebar/placeSidebar';

const Portal = () => {
  const addSidebar = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  useEffect(() => {
    if (addSidebar.current) {
      placeSidebar(addSidebar.current, {
        isOpen: isSidebarOpen,
        setIsOpen: setIsSidebarOpen,
        items: [
          {
            id: 1,
            active: true,
            title: 'tutel',
            description: 'beschreibung',
            done: false,
          },
        ] as Todo[],
      });
    }
  }, [isSidebarOpen]);

  return (
    <>
      <Header />
      <Container>
        <Input />
        <Textarea />
        <Button />
        <ErrorBoundary />
        <div ref={addSidebar} />
      </Container>
      <Footer />
    </>
  );
};

const rootElement = document.getElementById('portal');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<Portal />);
