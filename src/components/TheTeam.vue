<script setup>
import nishantha1 from '@/assets/The team/Nishantha/1.jpg'
import nishantha2 from '@/assets/The team/Nishantha/2.jpg'
import nishantha3 from '@/assets/The team/Nishantha/3.jpg'

const experience = [
    "Selling and distribution",
    "sales and marketing strategy",
    "Route to Market (RtM) strategy",
    "Business analytics",
    "Business development",
    "Retail category management",
    "Training need assessment via assessment centers",
    "Training & development",
    "Sales system design and implementation"
]

// Nishantha Paranagama's work experience
const nishantheExperience = [
    "Director Sales at Link Natural Products",
    "Sales Manager at Hemas Marketing",
    "Sales Force Development Manager at Hemas Marketing", 
    "Area Sales Manager at Hemas Marketing",
    "Sales Representative at Swadeshi, Kotmale Dairies, SmithKline Beecham"
]

// Romero R. Linden's work experience  
const romeroExperience = [
    "Head of Marketing at Link Natural Products",
    "Country Manager at Natures Only USA – Sri Lanka",
    "Head of Sales & Wellness at Hemas Pharmaceuticals",
    "National Sales Manager & Marketing Manager at GTECH Lanka",
    "Category Manager and National Sales Manager at GSK Pharmaceuticals"
]

// Nishantha's images array
const nishantheImages = [nishantha1, nishantha2, nishantha3]
</script>

<template>
    <div class="max-w-full mx-auto w-full px-8 py-0 text-shadow">
        <!-- Header -->
         <div class="text-center mb-4 text-neutral-50 text-6xl cal-sans">
            Meet The Team
         </div>

         <div class="w-full h-full rounded-3xl bg-white/10 backdrop-blur-lg border-[3px] border-neutral-300/50 text-center py-2 px-4">
            <div class="funnel-display-light text-neutral-50 text-shadow text-lg mb-2">
                We are a team of seasoned professionals spanning over 30 years of experience in diverse fields including FMCG, Consumer Healthcare Pharmaceuticals and Modern Retail. Our expertise include the following.
            </div>
            <div>
                <span v-for="element in experience" :key="element" class="inline-block bg-blue-200 text-blue-800 hover:bg-blue-800 hover:text-neutral-50 hover:tracking-wide hover:funnel-display-semibold transition-all duration-600 hover:cursor-pointer rounded-md px-2 py-1 mr-1 mb-1 text-md funnel-display-light">
                    {{ element }}
                </span>
            </div>    
         </div>

         <!-- Team Members -->
        <div class="grid grid-cols-2 justify-items-center gap-6 mt-4">
            <!-- Nishantha Paranagama -->
            <div class="bg-white/10 border-[3px] border-neutral-300/50 backdrop-blur-lg rounded-3xl h-[450px] w-full max-w-[800px] p-4 overflow-hidden">
                <!-- Images Grid - No gaps, no borders, fills to edges -->
                <div class="grid grid-cols-3 h-[190px] -m-4 mb-0">
                    <div 
                        v-for="(image, index) in nishantheImages" 
                        :key="index"
                        class="overflow-hidden cursor-pointer group relative"
                        :class="{
                            'rounded-tl-3xl': index === 0,
                            'rounded-tr-3xl': index === 2
                        }"
                    >
                        <img 
                            :src="image" 
                            :alt="`Nishantha Paranagama ${index + 1}`"
                            class="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                        />
                    </div>
                </div>
                
                <div class="text-neutral-50 text-shadow cal-sans text-5xl mt-2">
                    Nishantha Paranagama
                </div>
                <div class="inline-block bg-orange-100 text-orange-700 rounded-md py-1 px-3 text-sm funnel-display-light">
                    Co-founder & Director
                </div>
                <div class="text-neutral-50 text-shadow cal-sans text-2xl mt-4">
                    Experience
                </div>
                <div class="mt-2">
                    <span v-for="role in nishantheExperience" :key="role" class="inline-block bg-blue-200 text-blue-800 hover:bg-blue-800 hover:text-neutral-50 hover:tracking-wide hover:funnel-display-semibold transition-all duration-600 hover:cursor-pointer rounded-md px-1 py-1 mr-1 mb-1 text-sm funnel-display-light">
                        {{ role }}
                    </span>
                </div>
            </div>

            <!-- Romero R. Linden -->
            <div class="bg-white/10 border-[3px] border-neutral-300/50 backdrop-blur-lg rounded-3xl h-[450px] w-full max-w-[800px] p-4 overflow-hidden">
                <!-- Placeholder for Romero's images - same structure -->
                <div class="grid grid-cols-3 h-[150px] -m-4 mb-0">
                    <div class="bg-neutral-600/50 overflow-hidden cursor-pointer group rounded-tl-3xl">
                        <!-- Placeholder for future image -->
                        <div class="w-full h-full bg-gradient-to-br from-neutral-500 to-neutral-700 transition-transform duration-500 ease-in-out group-hover:scale-110"></div>
                    </div>
                    <div class="bg-neutral-600/50 overflow-hidden cursor-pointer group">
                        <!-- Placeholder for future image -->
                        <div class="w-full h-full bg-gradient-to-br from-neutral-500 to-neutral-700 transition-transform duration-500 ease-in-out group-hover:scale-110"></div>
                    </div>
                    <div class="bg-neutral-600/50 overflow-hidden cursor-pointer group rounded-tr-3xl">
                        <!-- Placeholder for future image -->
                        <div class="w-full h-full bg-gradient-to-br from-neutral-500 to-neutral-700 transition-transform duration-500 ease-in-out group-hover:scale-110"></div>
                    </div>
                </div>
                
                <div class="text-neutral-50 text-shadow cal-sans text-5xl mt-4">
                    Romero R. Linden 
                </div>
                <div class="inline-block bg-orange-100 text-orange-700 rounded-md py-1 px-3 text-sm funnel-display-light">
                    Co-founder & Director
                </div>
                <div class="text-neutral-50 text-shadow cal-sans text-2xl mt-4">
                    Experience
                </div>
                <div class="mt-2">
                    <span v-for="role in romeroExperience" :key="role" class="inline-block bg-blue-200 text-blue-800 hover:bg-blue-800 hover:text-neutral-50 hover:tracking-wide hover:funnel-display-semibold transition-all duration-600 hover:cursor-pointer rounded-md px-1 py-1 mr-1 mb-1 text-sm funnel-display-light">
                        {{ role }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
