import { computed, ref } from 'vue'
import { useQuery } from 'vue-query'

import { getUsers } from '@/api'

export const useUsers = async () => {
	const searchValue = ref('')
	const {
		data: users,
		suspense,
		...rest
	} = useQuery(['users', searchValue], ({ queryKey }) => {
		const [, term] = queryKey
		return getUsers(term as string)
	})
	await suspense()

	return {
		users,
		searchValue,
		hasUsers: computed(() => Boolean(users.value?.length)),
		...rest,
	}
}
