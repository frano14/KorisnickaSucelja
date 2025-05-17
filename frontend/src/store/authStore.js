import { create } from "zustand";
import axios from "axios";


axios.defaults.withCredentials = true;

export const useAuthStore = create((set) => ({
	user: null,
	isAuthenticated: false,
	error: null,
	isLoading: false,
	isCheckingAuth: true,
	message: null,

	signup: async (email, name, phoneNumber) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`http://localhost:3000/api/users/signup`, { email, name, phoneNumber });
			set({ user: response.data.user, isAuthenticated: false, isLoading: false });
		} catch (error) {
			set({ error: error.response.data.message || "Error signing up", isLoading: false });
			throw error;
		}
	},
	login: async (password) => {
        console.log(password);
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`http://localhost:3000/api/users/login`, { password });
			set({
				isAuthenticated: true,
				user: response.data.user,
				error: null,
				isLoading: false,
			});

			console.log("Login response:", response.data);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error logging in", isLoading: false });
			throw error;
		}
	},
	logout: async () => {
		set({ isLoading: true, error: null });
		try {
			await axios.post(`http://localhost:3000/api/users/logout`);
			set({ user: null, isAuthenticated: false, error: null, isLoading: false });
		} catch (error) {
			set({ error: "Error logging out", isLoading: false });
			throw error;
		}
    },
	checkAuth: async () => {
		console.log("Checking authentication status in stpre...");
		set({ isCheckingAuth: true, error: null });
		try {
			const response = await axios.get(`http://localhost:3000/api/users/check-auth`);
			set({ user: response.data.user, isAuthenticated: true, isCheckingAuth: false });

		} catch (error) {
			set({ error: null, isCheckingAuth: false, isAuthenticated: false });
		}
	},
    
}));