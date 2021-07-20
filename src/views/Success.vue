<template>
    <div class='container'>
      <div class="success-container">
        <h2>Thanks for getting in touch!</h2>
        <p>If you provided an email address I'll get back to you soon.</p>
      </div>
    </div>
</template>

<script>
export default {
  mounted () {
    window.scrollTo(0,0)
  }    
}

</script>

<style lang="scss" scoped>

@use '@/scss/_colors.scss' as *;

  .success-container {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        padding: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgba($highlightFont, 0.15);
        border: 2px solid rgba($highlightFont, 0.8);
        border-top-left-radius: 20px;
        border-bottom-right-radius: 20px;

        h2 {
            margin: 0;
            margin-bottom: 2rem;
        }
    }
</style>