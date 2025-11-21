import { create } from 'zustand';

const STATUS = {
    IDLE: 'idle',
    LOADING: 'loading',
    SUCCESS: 'success',
    ERROR: 'error',
};

export const useUserSearch = create((set) => ({
    // --- STATE ---
    searchStatus: STATUS.IDLE,
    userData: null,

    STATUS, // Export status constants

    // --- ACTIONS ---

    startSearch: () => set({
        searchStatus: STATUS.LOADING,
        userData: null
    }),

    searchSuccess: (data) => set({
        searchStatus: STATUS.SUCCESS,
        userData: data
    }),

    searchError: () => set({
        searchStatus: STATUS.ERROR,
        userData: null
    }),
}));