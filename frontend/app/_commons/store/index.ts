import {create} from "zustand"

interface IGlobalState {
    loading: boolean,
    darkMode: boolean,
    setDarkMode: (value: boolean) => void
    setLoading: (value: boolean) => void
    minimizeSidebar: boolean,
    setMinimizeSidebar: (isMinimized: boolean) => void
}

export const useGlobalStore = create<IGlobalState>((set) => ({
    loading: false,
    minimizeSidebar: false,
    darkMode: false,
    setDarkMode: (value) => set((state) => ({darkMode: value})),
    setLoading: (value) => set((state) => ({loading: value})),
    setMinimizeSidebar: (isMinimized) => set((state) => ({minimizeSidebar: isMinimized})),

}))
