import { create } from "zustand";

export type IAppState = "unlogged" | "loading" | "logged";

export type SessionState = {
  appState: IAppState;

  setAppState: (appState: SessionState["appState"]) => void;
};

const useApp = create<SessionState>((set) => ({
  appState: "loading",
  setAppState: (appState: SessionState["appState"]) => set({ appState }),
}));

export default useApp;
