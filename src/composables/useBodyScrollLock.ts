import { watch, type Ref } from 'vue'
import { useScrollLock } from '@vueuse/core'

export const useBodyScrollLock = (value: Ref<boolean>) => {
	const isLocked = useScrollLock(document.body)

	watch(value, (newValue) => {
		isLocked.value = newValue
	})
}
