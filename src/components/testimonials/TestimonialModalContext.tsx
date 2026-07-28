import { createContext, useContext, useState, type ReactNode } from 'react';

interface TestimonialModalContextValue {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const TestimonialModalContext = createContext<TestimonialModalContextValue | null>(null);

export function TestimonialModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <TestimonialModalContext.Provider
      value={{
        isOpen,
        openModal: () => setIsOpen(true),
        closeModal: () => setIsOpen(false),
      }}
    >
      {children}
    </TestimonialModalContext.Provider>
  );
}

export function useTestimonialModal() {
  const context = useContext(TestimonialModalContext);
  if (!context) throw new Error('useTestimonialModal must be used within a TestimonialModalProvider');
  return context;
}
