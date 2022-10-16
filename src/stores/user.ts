import { reactive } from 'vue'
import { defineStore } from 'pinia'

import type { IUser } from '@/types'

export const useUserStore = defineStore('user', () => {
	const state = reactive({
		user: {} as IUser,
		isOpenUserModal: false,
	})

	const setUser = (user: IUser) => {
		state.user !== user && (state.user = user)
		toggleUserModal()
	}

	const toggleUserModal = () => {
		state.isOpenUserModal = !state.isOpenUserModal
	}

	return {
		state,
		actions: { setUser, toggleUserModal },
	}
})
