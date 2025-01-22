import React, { useEffect, useRef, useState } from 'react';
import placeSidebar from 'sidebar/placeSidebar';
import { useTodos } from 'elements/TodoContext';

export const Sidebar = () => {
  const addSidebar = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const { todos } = useTodos();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    try {
      if (addSidebar.current) {
        placeSidebar(addSidebar.current, {
          isOpen: isSidebarOpen,
          setIsOpen: setIsSidebarOpen,
          items: todos,
        });
      }
    } catch (error) {
      console.error('Fehler beim Laden der Sidebar:', error);
      setHasError(true);
    }
  }, [todos, isSidebarOpen]);

  if (hasError) {
    return <h2>Die Sidebar ist momentan nicht verfügbar</h2>;
  }

  return <div ref={addSidebar} id="sidebar" />;
};
