<template>
  <div class="card col-lg-4 col-md-6">
    <img
      :src="require(`../../assets/${imageUrl}`)"
      :alt="name"
      class="authorImage"
    />
    <blockquote class="testimony my-5">
      <em>"{{ testimonial }}"</em>
    </blockquote>
    <span class="authorName">{{ name }}</span>
  </div>
</template>

<script>
export default {
  name: "Testimonial",
  props: {
    name: { type: String },
    imageUrl: { type: String },
    testimonial: { type: String },
  },
};
</script>

<style scoped src="./Testimonial.css"></style>
