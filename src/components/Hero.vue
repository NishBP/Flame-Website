<script setup lang="ts">
// Content data for each container
import { ref } from 'vue'

const containerContent = {
  3: {
    title: "Our Mission",
    icon: "rocket",
    body: "At FLAME Sales Strategists, our mission is to empower businesses to achieve sustainable growth through our sales and marketing consulting services. We are committed to providing tailored sales and marketing strategy solutions that align with your unique business goals. "
  },
  4: {
    title: "Our Core Values",
    icon: "diversity_1", 
    body: "Our success is built on a foundation of core values that guide our actions and shape our interactions with clients, colleagues, and partners. These values form the heart of our sales and marketing consulting business and reflect our commitment to excellence in all aspects of our work."
  },
  5: {
    title: "Why Work With Us?",
    icon: "partner_exchange",
    body: "We are a dynamic team with a wealth of knowledge, experience and proven expertise in sales and marketing strategy, retail consultancy and sales data analytics. We are the best at what we do because we are passionately driven by a greater cause. Our mission is to uplift the sales profession by building and nurturing respected high-performing  sales teams."
  }
}
const values = [
  {value: "Teamwork"},
  {value: "Value Delivery"},
  {value: "Integrity"},
  {value: "Human Capital"},
  {value: "Technological Advancement"},
  {value: "Confidentiality"},
  {value: "Passionate Company-Building"}
]

// For DRYness, define container classes
const tileBase = "flex-1 hover:flex-[3] relative rounded-3xl backdrop-blur-lg shadow-lg h-80 cursor-pointer overflow-hidden transition-all duration-700 ease-in-out"
const collapsedBase = "flex flex-col items-center justify-center absolute inset-0 p-6 transition-all duration-700 ease-in-out"
const expandedBase = "absolute inset-0 p-6 flex items-center opacity-0 -translate-x-4 transition-all delay-300 duration-100 ease-in-out"
const tileConfigs = [
  {
    key: 'mission',
    bg: "bg-orange-100/50 border-2 border-orange-200/30",
    iconColor: "text-orange-600",
    iconColorExpanded: "text-orange-500",
    content: containerContent[3],
    hoverCollapsed: "group-hover/mission:opacity-0 group-hover/mission:scale-0",
    hoverExpanded: "group-hover/mission:opacity-100 group-hover/mission:translate-x-0"
  },
  {
    key: 'values',
    bg: "bg-blue-100/50 border-2 border-blue-500/30",
    iconColor: "text-blue-600",
    iconColorExpanded: "text-blue-600",
    content: containerContent[4],
    hoverCollapsed: "group-hover/values:opacity-0 group-hover/values:scale-95",
    hoverExpanded: "group-hover/values:opacity-100 group-hover/values:translate-x-0"
  },
  {
    key: 'work',
    bg: "bg-green-50/50 border-2 border-green-500/30",
    iconColor: "text-green-700",
    iconColorExpanded: "text-green-700",
    content: containerContent[5],
    hoverCollapsed: "group-hover/work:opacity-0 group-hover/work:scale-95",
    hoverExpanded: "group-hover/work:opacity-100 group-hover/work:translate-x-0"
  }
]

// List of phone numbers
const phoneNumbers = ['0710 6264 624', '0710 6264 624']

// Copy handler
const copyToClipboard = (phone: string) => {
  navigator.clipboard.writeText(phone)
}

</script>

<template>
  <!-- Remove the top padding from Hero component since it's now handled by the section -->
  <div class="w-full px-8 py-12 relative z-10">
    <!-- Row 1: Container 1 & 2 -->
    <div class="flex gap-6 mb-10">
      <div class="flex-1 flex flex-col justify-center text-left py-2 px-10 rounded-3xl bg-neutral-900/60 backdrop-blur-lg border-4 border-neutral-100/20 h-80">
        <div class="flex items-center justify-start gap-10 py-2">
          <img src="@/assets/images/logo.png" alt="Flame Logo" class="h-[150px] w-auto" draggable="false"/>
          <div class="bg-neutral-50 h-[100px] w-[1px]"></div>
          <div class="text-2xl py-1 px-2 inline-block rounded-md funnel-display-light text-neutral-orange-700 text-amber-400 text-shadow">
            Transforming organisations,<br> one at a time.
          </div>
        </div>
        <div class="text-5xl text-neutral-50 cal-sans-regular mb-2">
          We are sales strategists
        </div>
        <div class="mt-1 text-lg text-neutral-50 funnel-display-light mb-3">
          providing specialised consultancy services for impactful results in Selling and Distribution.
        </div>
      </div>
      <div class="flex flex-col items-start justify-center rounded-3xl overflow-hidden h-80 bg-neutral-50/30 backdrop-blur-xl p-8 border-4 border-neutral-300/30">
        <div class="text-xl text-neutral-50 funnel-display-light mb-3">
          Book a meeting with us to discuss the future of your company!
        </div>
        <div class="inline-flex px-4 py-1 text-lg ease-in-out text-neutral-50 border-orange-400/80 rounded-full 
            border-2 transition-all duration-200 hover:tracking-wider hover:cursor-pointer hover:bg-orange-400/80 active:bg-neutral-300 funnel-display-light">
          Book now
        </div>
        <div class="text-xl text-neutral-50 funnel-display-light mt-6">
          Prefer to call? Simply dial,
        </div>
          <div class="flex flex-col gap-2 mt-4">
            <div
              v-for="(phone, i) in phoneNumbers"
              :key="i"
              class="inline-flex items-center rounded-full border border-neutral-50 overflow-hidden"
            >
              <!-- Number -->
              <div class="px-3 py-1 text-xl text-neutral-50 funnel-display-light">
                {{ phone }}
              </div>
              <!-- Copy icon -->
              <div
                @click="copyToClipboard(phone)"
                class="px-3 py-1 bg-neutral-50 text-neutral-900 cursor-pointer h-full
                      hover:bg-orange-400 hover:text-neutral-50 transition-colors duration-200"
              >
                <span class="material-symbols-outlined">content_copy</span>
              </div>
            </div>
        </div>
        
      </div>
    </div>

    <!-- Row 2: Interactive Tiles -->
    <div class="flex gap-6 w-full mt-15">
      <template v-for="tile in tileConfigs" :key="tile.key">
        <div :class="[tileBase, tile.bg, `group/${tile.key}`]">
          <!-- Collapsed State -->
          <div :class="[collapsedBase, tile.hoverCollapsed]">
            <span class="material-symbols-outlined hero-icon-medium mb-3" :class="tile.iconColor">
              {{ tile.content.icon }}
            </span>
            <span class="text-neutral-800 text-4xl funnel-display-bold text-center">
              {{ tile.content.title }}
            </span>
          </div>
          <!-- Expanded State -->
          <div :class="[expandedBase, tile.hoverExpanded]">
            <div class="flex items-center gap-8 w-full">
              <div class="flex-shrink-0">
                <span class="material-symbols-outlined hero-icon-medium" :class="tile.iconColorExpanded">
                  {{ tile.content.icon }}
                </span>
              </div>
              <div class="flex-1">
                <h3 class="text-5xl cal-sans-regular mb-3 text-neutral-900 text-shadow">
                  {{ tile.content.title }}
                </h3>
                <p class="funnel-display-light leading-relaxed text-neutral-800">
                  {{ tile.content.body }}
                </p>
                <!-- Values tags for Core Values tile -->
                <div v-if="tile.key === 'values'" class="mt-5">
                  <span v-for="item in values" :key="item.value"
                        class="inline-block bg-blue-200 text-blue-800 hover:bg-blue-800 hover:text-neutral-50 hover:tracking-wider hover:funnel-display-semibold transition-all duration-600 rounded-md px-3 py-1 mr-2 mb-2 text-sm funnel-display-light">
                    {{ item.value }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>