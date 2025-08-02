<script setup lang="ts">
// Props for active section styling only
const props = defineProps<{
  activeSection: string
}>()

// Navigation items with standard HTML anchor links
const navItems = [
  { label: 'About us', icon: 'emoji_people', href: '#about-us' },
  { label: 'Sales Consultancy', icon: 'sell', href: '#sales-consultancy' },
  { label: 'RtM Strategy Consultancy', icon: 'alt_route', href: '#rtm-strategy' },
  { label: 'Sales Team Training', icon: 'groups_2', href: '#sales-training' },
  { label: 'The Team', icon: 'bolt', href: '#the-team' },
]

// Function to get button classes based on active state
const getButtonClasses = (href: string) => {
  const sectionId = href.substring(1) // Remove # from href
  const baseClasses = "inline-flex items-center px-2 py-1 rounded-full text-base transition-all duration-200 ease-in-out text-neutral-800"
  const hoverClasses = "hover:bg-white/80 hover:cursor-pointer hover:tracking-wider hover:text-shadow-lg hover:text-lg"
  const activeClasses = "active:bg-neutral-300"
  const currentSectionClasses = "bg-white/80 cursor-pointer tracking-wider text-shadow-lg text-lg border-2 border-neutral-500"
  
  return props.activeSection === sectionId 
    ? `${baseClasses} ${currentSectionClasses} ${activeClasses}`
    : `${baseClasses} ${hoverClasses} ${activeClasses}`
}
</script>

<template> 
  <nav class="sticky top-5 z-50 w-fit h-12 rounded-full backdrop-blur-md bg-neutral-100/50 funnel-display-light mx-auto flex items-center justify-around px-8 py-1">
    <div class="flex-1 flex justify-center items-center gap-12">
      <div class="flex items-center gap-4">
        <!-- Native HTML anchor links - no custom JavaScript needed -->
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          :class="getButtonClasses(item.href)"
        >
          <span class="material-symbols-outlined mr-1">
            {{ item.icon }}
          </span>
          {{ item.label }}
        </a>
        <button
          class="inline-flex px-2 py-1 text-base ease-in-out text-neutral-800 border-orange-400/80 rounded-full 
            border-2 transition-all duration-200
            hover:text-neutral-100 hover:bg-orange-400/80 hover:text-lg
            active:bg-neutral-300"
        >
          Book now
        </button>
      </div>
    </div>
  </nav>
</template>
