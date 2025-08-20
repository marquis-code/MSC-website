<template>
  <section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="bg-white rounded-lg border-[0.5px] border-gray-100 shadow-sm p-8">
          <h2 class="text-2xl font-semibold text-primary-gray mb-2">Send us a message</h2>
          <p class="text-sm text-muted-foreground mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>
          
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-primary-gray mb-2">
                  Full Name <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="form.fullName"
                  type="text"
                  placeholder="John Doe"
                  class="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gray focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-primary-gray mb-2">
                  Email <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="form.email"
                  type="email"
                  placeholder="john@example.com"
                  class="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gray focus:border-transparent"
                  required
                />
              </div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-primary-gray mb-2">Phone Number</label>
                <input
                  v-model="form.phone"
                  type="tel"
                  placeholder="+234 123 456 7890"
                  class="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gray focus:border-transparent"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-primary-gray mb-2">Company</label>
                <input
                  v-model="form.company"
                  type="text"
                  placeholder="Your Company Name"
                  class="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gray focus:border-transparent"
                />
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-primary-gray mb-2">
                Subject <span class="text-red-500">*</span>
              </label>
              <select
                v-model="form.subject"
                class="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gray focus:border-transparent"
                required
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="partnership">Partnership</option>
                <option value="support">Support</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-primary-gray mb-2">
                Message <span class="text-red-500">*</span>
              </label>
              <textarea
                v-model="form.message"
                rows="4"
                placeholder="Tell us how we can help you..."
                class="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gray focus:border-transparent resize-none"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              class="w-full bg-primary text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
        
        <!-- Contact Info -->
        <div class="space-y-8">
          <div class="border-[0.5px] border-gray-100 rounded-lg p-6">
            <h2 class="text-2xl font-semibold text-gray-900 mb-2">Get in touch</h2>
            <p class="text-sm text-muted-foreground mb-8">Reach out to us through any of these channels</p>
            
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-6 h-6 text-teal-500 mt-1">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium text-gray-900">Address</h3>
                  <p class="text-primary-gray2">123 Pharmaceutical Boulevard</p>
                  <p class="text-primary-gray2">Lagos, Nigeria</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-6 h-6 text-teal-500 mt-1">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium text-gray-900">Phone</h3>
                  <p class="text-primary-gray2">+234 123 456 7890</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-6 h-6 text-teal-500 mt-1">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium text-gray-900">Email</h3>
                  <p class="text-primary-gray2">contact@msc.africa</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Map Section -->
          <div class="border-[0.5px] border-gray-100 rounded-lg p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Our Location</h3>
            <div class="bg-gray-200 rounded-lg overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7708!2d3.3792057!3d6.5243793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1635959542145!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface ContactForm {
  fullName: string
  email: string
  phone: string
  company: string
  subject: string
  message: string
}

const form = ref<ContactForm>({
  fullName: '',
  email: '',
  phone: '',
  company: '',
  subject: '',
  message: ''
})

const submitForm = () => {
  // Handle form submission
  console.log('Form submitted:', form.value)
  // Add your form submission logic here
}
</script>