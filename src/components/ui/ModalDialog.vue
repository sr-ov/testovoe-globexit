<script setup lang="ts">
import { FadeInOut } from 'vue3-transitions'
import { useBodyScrollLock } from '@/composables'

import { IconClose } from '@/components'
import { toRefs } from 'vue'

interface Emits {
	(e: 'close'): void
}
interface Props {
	isVisible: boolean
}

defineEmits<Emits>()

const props = defineProps<Props>()
const { isVisible } = toRefs(props)

useBodyScrollLock(isVisible)
</script>

<template>
	<Teleport to="body">
		<FadeInOut :duration="200">
			<div
				class="fixed left-0 top-0 w-screen h-screen bg-slate-500/40 pt-20"
				v-if="isVisible"
				v-bind="$attrs"
				@click="$emit('close')"
			>
				<div
					class="rounded-2xl shadow max-w-[460px] py-8 px-6 bg-white mx-auto relative"
					@click.stop
				>
					<button
						class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-500 h-10 w-10 rounded-full flex items-center justify-center hover:scale-110 transition"
						@click="$emit('close')"
					>
						<IconClose width="25" height="25" />
					</button>
					<slot />
				</div>
			</div>
		</FadeInOut>
	</Teleport>
</template>

<style scoped>
/*  */
</style>
