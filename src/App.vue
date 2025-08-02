<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import NavBar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import SalesConsultancy from './components/SalesConsultancy.vue'
import RtMStrategy from './components/RouteToMarket.vue'
import SalesTraining from './components/SalesTraining.vue'
import TheTeam from './components/TheTeam.vue'

// Only track active section for styling - no scroll logic needed
const activeSection = ref('about-us')

// Lightweight intersection observer for active state tracking
const updateActiveSection = () => {
  const sections = ['about-us', 'sales-consultancy', 'rtm-strategy', 'sales-training', 'the-team']
  
  sections.forEach(sectionId => {
    const element = document.getElementById(sectionId)
    if (element) {
      const rect = element.getBoundingClientRect()
      // Check if section is in the center of viewport
      if (rect.top <= 200 && rect.bottom >= 200) {
        activeSection.value = sectionId
      }
    }
  })
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection)
  updateActiveSection()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
})
</script>

<template>
  <div class="relative min-h-screen text-body">
    <!-- Background Video -->
    <div class="fixed inset-0 w-full h-full z-0">
      <video
        autoplay
        muted
        loop
        playsinline
        class="absolute inset-0 w-full h-full object-cover"
      >
        <source src="@/assets/background.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div class="absolute inset-0 bg-black/20"></div>
    </div>

    <!-- Content with native anchor navigation -->
    <div class="relative z-10">
      <NavBar :active-section="activeSection" />
      
      <!-- Hero section with proper top padding to clear the navbar -->
      <section id="about-us" class="scroll-mt-12 pt-[10px]">
        <Hero />
      </section>
      
      <section id="sales-consultancy" class="min-h-screen scroll-mt-[10px]">
        <SalesConsultancy />
      </section>
      
      <section id="rtm-strategy" class="min-h-screen scroll-mt-[10px]">
        <RtMStrategy />
      </section>
      
      <section id="sales-training" class="min-h-screen scroll-mt-16 pt-[20px]">
        <SalesTraining />
      </section>
      
      <section id="the-team" class="min-h-screen scroll-mt-16 pt-[20px]">
        <TheTeam />
      </section>
    </div>
  </div>
</template>
