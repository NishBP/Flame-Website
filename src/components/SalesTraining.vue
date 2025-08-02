<script setup>
import caseStudiesGif from '@/assets/Sales/case studies.gif'
import realWorldGif from '@/assets/Sales/real world scenarios.gif'
import rolePlayingGif from '@/assets/Sales/role playing.gif'
import simulationsGif from '@/assets/Sales/simulations.gif'

const gifs = [
  {title: "Case Studies", image: caseStudiesGif},
  {title: "Real World Scenarios", image: realWorldGif},
  {title: "Role Playing", image:rolePlayingGif},
  {title: "Simulations", image: simulationsGif}
]
</script>

<template>
    <div class="max-w-full mx-auto w-full px-10 py-0 text-shadow">
        <!-- Section Header -->
        <div class="text-center mb-8">
            <h2 class="text-6xl cal-sans-regular text-white mb-6">Sales Team Training & Coaching</h2>
        </div>

        <!-- Content Flex Layout -->
        <div class="flex gap-8 h-[calc(100vh-15rem)]">
            <!-- Left: What We Will Do For You (takes more width on large screens) -->
            <div class="flex-1 bg-white/20 backdrop-blur-lg rounded-2xl p-5 border-2 border-neutral-300/50 shadow-lg h-full flex flex-col">
                <h3 class="text-3xl cal-sans-regular text-white mb-6">What We Will Do For You</h3>
                <p class="text-white/90 funnel-display-light text-lg leading-relaxed mb-8">
                    Our training methodology is highly interactive, practical, and learner-centered. We combine a variety of training techniques, including role plays, case studies, simulations, group discussions, and real-world scenarios. Our engaging sessions are conducted by industry experts with extensive sales experience, who provide real-life examples and actionable insights to enhance learning outcomes.
                </p>
                
                <!-- Icon-Text Cards Grid -->
                <div class="grid grid-cols-4 py-5 px-2 gap-4">
                    <div v-for="gif in gifs" :key="gif" class="bg-white/10 background-blur-lg rounded-2xl shadow-md h-[250px] flex flex-col justify-center items-center">
                        <div>
                            <img :src="gif.image" alt="Training service images" class="w-full h-[180px] object-cover"/>
                        </div>
                        <div class="text-center text-white text-shadow funnel-display-medium text-md mt-2">
                            {{ gif.title }}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right: GIF on top, Why Choose Us below -->
            <div class="flex flex-col flex-1 align-end gap-2 justify-start h-full">
                <!-- GIF (top right) -->
                <div class="bg-white/20 backdrop-blur-lg rounded-2xl py-0 px-10 border-2 border-neutral-300/50 shadow-lg flex items-center justify-center h-72 min-h-[100px]">
                    <img 
                    src="@/assets/Sales/sales.gif" 
                    alt="Sales Training Animation"
                    class="w-full h-full rounded-lg object-contain"
                    />
                </div>
                <!-- Why Choose Us Box (bottom right) -->
                <div class="bg-white/20 backdrop-blur-lg rounded-2xl py-5 px-8 border-2 border-neutral-300/50 shadow-lg flex flex-col h-full min-h-[220px]">
                    <h3 class="text-3xl cal-sans-regular text-white mb-6">Why choose us for training?</h3>
                    <p class="text-white/90 funnel-display-light text-lg leading-relaxed">
                    Our Sales Team Training Organisation is a leading provider of comprehensive and result-driven sales training programmes for businesses across various industries. We understand the importance of a highly skilled and motivated sales team in effectively executing sales and marketing strategy and driving revenue growth to achieving long-term success. That is why we offer tailored training solutions to equip sales professionals with the necessary skills, knowledge, and mindset to maximise their performance, increase customer satisfaction, and boost overall performance.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
