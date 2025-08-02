<script setup lang="ts">

// Services data extracted from the image
const services = [
  "Developing a results-driven sales and marketing strategy",
  "Mapping of outlets by category across geographies", 
  "Developing route plans",
  "Developing outlet reach and frequency plans",
  "Structuring the sales and distribution division for best focus including JD design, KPI setting considering core functional parameters, designing of incentives and excitement programmes that drive passion and performance",
  "Developing and managing coaching and customised training plans for each level in the sales team",
  "Developing monitoring and evaluation mechanisms, including dashboards, for easy decision-making across organisational hierarchy",
  "Aligning other key departments with the sales and marketing strategy and its implementation",
  "Developing sales meeting calendars and meeting agendas for best outcomes",
  "Automating the sales force with best in class information systems that support agile real-time monitoring and evaluation",
  "Providing talent acquisition services to bridge competency gaps in the sales team",
  "We can also help you with implementation over a period of 6 to 12 months depending on the requirement"
]
</script>

<template>
  <div class="w-full px-8 py-16">
    <div class="max-w-7xl mx-auto mt-4">
      <!-- Section Header with Animated Chart -->
      <div class="flex items-center justify-center gap-6">
        <!-- Animated Chart Icon -->
        <span class="material-symbols-outlined hero-icon-medium text-neutral-50">finance_mode</span>
        
        <!-- Header Text -->
        <div class="text-center">
          <h2 class="text-6xl cal-sans-regular text-white">Sales Consultancy</h2>
          <p class="text-xl text-white/80 funnel-display-light">
            What We Will Do For You
          </p>
        </div>
    </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="group relative bg-white/20 backdrop-blur-lg rounded-2xl p-6 
                 hover:bg-neutral-200/10 transition-all duration-500 ease-out cursor-pointer
                 border-2 border-white/10 hover:border-white/20"
        >
          <!-- Number Box -->
          <div class="absolute -top-3 -right-3 w-12 h-12 text-stroke text-orange-400
                      group-hover:w-16 group-hover:h-16 
                      bg-orange-500 group-hover:bg-neutral-900 rounded-[16px]
                      flex items-center justify-center
                      transition-all duration-300 ease-out
                      border-2 border-white/20 shadow-lg">
            <span class="text-white cal-sans text-lg
                         group-hover:text-5xl group-hover:overflow-visible
                         transition-all duration-140 ease-out
                         [-webkit-text-stroke:1px_rgba(255,255,255,0.3)]">
              {{ index + 1 }}
            </span>
          </div>

          <!-- Service Content -->
          <div class="pt-4">
            <p class="text-white funnel-display-light text-sm leading-relaxed text-shadow
                      group-hover:text-white group-hover:tracking-wider group-hover:text-lg transition-all duration-600">
              {{ service }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
