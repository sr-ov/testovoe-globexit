<script setup lang="ts">
import { TheMain, UserInfoModal, UiAppSpinner } from '@/components'
</script>

<template>
	<Suspense>
		<TheMain />
		<template #fallback>
			<UiAppSpinner active />
		</template>
	</Suspense>
	<UserInfoModal />
</template>

<style scoped></style>
