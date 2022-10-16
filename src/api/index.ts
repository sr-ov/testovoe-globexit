import axios from 'axios'

import { API_URL } from '@/constants'
import type { IUser } from '@/types'

const api = axios.create({
	baseURL: API_URL,
})

export const getUsers = async (term?: string) => {
	const requestConfig = term ? { params: { term } } : undefined
	const { data } = await api.get<IUser[]>('', requestConfig)

	return data
}
