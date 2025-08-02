<script setup lang="ts">
// Content for the boxes
const leftBoxContent = {
  title: "What We Will Do For You",
  content: "FLAME Sales Strategists is a leading expert in Route to Market (RtM) strategy, specialising in helping organisations identify, evaluate, select, and negotiate with the best distribution partners in Sri Lanka. With over 30 years of industry experience, we have built a reputation for excellence in the FMCG and Consumer Healthcare sectors, working with top-tier companies across the island. Whether you're expanding into Sri Lanka for the first time or seeking to optimise your existing distribution network, FLAME Sales Strategists offers the expertise and insights to deliver the best results in the dynamic and evolving FMCG and Consumer Healthcare markets."
}

const rightBoxContent = {
  title: "Why Us for RtM?",
  content: "Our deep understanding of the local market landscape, combined with our extensive network of trusted partners, allows us to offer our clients unparalleled access to the most suitable distributors and robust sales and marketing strategy, ensuring their products reach the right customers with maximum efficiency. We are dedicated to aligning your brand with distribution partners who possess the right capabilities, competencies, and market reach to accelerate growth and drive long-term success. Our strong relationships with local stakeholders provide a competitive edge, ensuring smooth and effective negotiations that result in mutually beneficial partnerships."
}
</script>

<template>
  <section class="min-h-screen py-16 px-8 relative z-10 mb-16">
    <div class="max-w-7xl mx-auto">
      <!-- Section Title -->
      <h2 class="text-6xl cal-sans-regular text-white text-center mb-5">
        Route to Market Strategy
      </h2>
      
      <!-- Three Equal Boxes -->
      <div class="flex items-center justify-center gap-8">
        <!-- Left Box -->
        <div class="group w-[450px] h-[610px] bg-white/30 backdrop-blur-lg rounded-3xl border-2 border-white/20 p-8 overflow-hidden">
          <div class="h-full flex flex-col">
            <h3 class="text-3xl cal-sans-regular text-neutral-900 mb-6 transition-all duration-300 ease-in-out group-hover:text-4xl">
              {{ leftBoxContent.title }}
            </h3>
            <p class="text-base text-neutral-800 funnel-display-light leading-relaxed overflow-y-auto">
              {{ leftBoxContent.content }}
            </p>
          </div>
        </div>

        <!-- Center Video Box -->
        <div class="w-[450px] h-[610px] rounded-3xl border-2 border-white/50 overflow-hidden">
          <video
            class="w-full h-full rounded-2xl object-cover"
            muted
            loop
            autoplay
          >
            <source src="@/assets/RTM/video.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>

        <!-- Right Box -->
        <div class="group w-[450px] h-[610px] bg-white/30 backdrop-blur-lg rounded-3xl border-2 border-white/20 p-8 overflow-hidden">
          <div class="h-full flex flex-col">
            <h3 class="text-3xl cal-sans-regular text-neutral-900 mb-6 transition-all duration-300 ease-in-out group-hover:text-4xl">
              {{ rightBoxContent.title }}
            </h3>
            <p class="text-base text-neutral-800 funnel-display-light leading-relaxed overflow-y-auto">
              {{ rightBoxContent.content }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Custom scrollbar for content boxes */
.overflow-y-auto::-webkit-scrollbar {
  width: 4px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}
</style>
