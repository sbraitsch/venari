<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import IconEcosystem from './icons/IconEcosystem.vue'
</script>

<template>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Hunt for Treasure</template>

    Build elaborate scavenger hunts with various types of riddles and tasks.
    Image and audio clues, geolocation, master-riddles and more planned!
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Sharing is Caring</template>

    Complete scavenger hunts created by others or share your own. Sync your progress online
    to let others know how you're doing.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Tell a Story</template>

    Add flavour and breathe live into your hunt by adding story-elements before/after each task.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <IconEcosystem />
    </template>
    <template #heading>Companion App</template>

    There will be a companion app for Android devices to provide a smooth experience when out and about, completing your search for treasure.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Help Me Out</template>

    Let me know if you have suggestions!
  </WelcomeItem>
</template>
