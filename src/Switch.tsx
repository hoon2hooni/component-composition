import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";
const SwitchContext = createContext<{
  isOpen: boolean;
  toggle: () => void;
} | null>(null);

interface ComponentWithChildren {
  children: React.ReactNode;
}

function Switch({ children }: ComponentWithChildren) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const value = useMemo(
    () => ({
      isOpen,
      toggle,
    }),
    [isOpen]
  );
  return (
    <SwitchContext.Provider value={value}>{children}</SwitchContext.Provider>
  );
}

function useSwitch() {
  const value = useContext(SwitchContext);
  if (!value) {
    throw new Error("you used it wrong place");
  }
  return value;
}

function Trigger({ children }: ComponentWithChildren) {
  const { toggle } = useSwitch();
  return <div onClick={() => toggle()}>{children}</div>;
}

function on({ children }: ComponentWithChildren) {
  const { isOpen } = useSwitch();
  return isOpen ? <div>{children}</div> : null;
}

function off({ children }: ComponentWithChildren) {
  const { isOpen } = useSwitch();
  return !isOpen ? <div>{children}</div> : null;
}

Switch.Trigger = Trigger;
Switch.On = on;
Switch.Off = off;

export default Switch;
