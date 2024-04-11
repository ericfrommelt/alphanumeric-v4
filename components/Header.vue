<template>
  <header>
    <div class="nameplate__wrap">
      <h1 id="nameplate">Eric Frommelt</h1>
    </div>
    <div class="jobtitle__wrap">
      <h1 id="job__title">Web Designer +</h1>
    </div>
    <div class="jobtitle__wrapB">
      <h1 id="job__titleB">Creative Technologist</h1>
    </div>
    <div class="arrow__down">
      <div id="arrow">
        <svg width="40" height="22" viewBox="0 0 40 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L20 20L39 1" stroke="white" stroke-width="2"/>
        </svg>
      </div>
    </div>
  </header>
</template>

<style scoped>
  #namplate, #job__title, #job__titleB {
    margin-left: 0;
    margin-right: 0;
  }
  .arrow__down {
    grid-column: 2 / span 10;
    margin: 4rem 0 4rem 0;
  }
  .nameplate__wrap {
    grid-column: 2 / span 10;
    display: inline-block;
    overflow: hidden;
  }

  #nameplate {
    color: white;
    font-family: 'TTForsBold', sans-serif;
    font-style: normal;
    padding: 2rem 0 0 0;
    line-height: 8rem;
  }

  .jobtitle__wrap {
    grid-column: 2 / span 10;
    display: inline-block;
    overflow: hidden;
    text-wrap: nowrap;
  }
  .jobtitle__wrapB {
    grid-column: 2 / span 10;
    display: inline-block;
    overflow: hidden;
  }

  #job__title {
    color: white;
    font-family: 'TTForsBold', sans-serif;
    font-style: normal;
    margin: 0;
    line-height: 10rem;
  }

  #job__titleB {
    color: white;
    font-family: 'TTForsBold', sans-serif;
    font-style: normal;
    line-height: 1rem
  }

  .portrait {
    grid-column: 10 / span 1;
    margin-top: -16rem;
    transform: rotateZ(43deg);
  }


  header {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }

  .contact {
    padding-right: 4rem;
  }

  .contact h4 { margin: 0; }
  .contact a { color: #FF0005 }

  .glyphs {
    grid-column: 1 / span 3;
    display: flex;
    justify-content: space-between;
    padding-top: 4rem;
  }

  .glyph-left {
    align-self: start;
    padding-left: 4rem;
  }

  @media (min-width: 540px) {
    #nameplate, #job__title, #job__titleB {
      font-size: 2.5rem;
      line-height: 2.8rem;
    }
  } 

  @media (min-width: 720px) {
    #nameplate, #job__title, #job__titleB {
      font-size: 5rem;
      line-height: 6rem;
    }
  } 

  @media (min-width: 960px) {
    #nameplate, #job__title, #job__titleB {
      font-size: 5rem;
    }
  } 

  @media (min-width: 1080px) {
    #nameplate, #job__title, #job__titleB {
      font-size: 5rem;
    }
  } 
</style>

<script>
  export default {
    mounted() {
      this.nameplateMotion()
      this.jobTitleMotion()
      this.arrowDownMotion()
    },

    methods: {

      nameplateMotion() {
        const tl = this.$gsap.timeline()
        const SplitText = this.$SplitText
        const EFTypeSplit = new SplitText("#nameplate", { type: "chars" })
        const EFType = EFTypeSplit.chars.slice()
        const CustomEase = this.$CustomEase

        CustomEase.create("lineEase", "M0,0 C0.362,0 0.152,1 1,1")
        this.$gsap.set(EFType, { y: +200} )

        tl.to(EFType, { duration: .4, y:0, stagger: 0.002 })
      },

      jobTitleMotion() {
        const tl = this.$gsap.timeline()
        const tl2 = this.$gsap.timeline()
        const SplitText = this.$SplitText
        const CustomEase = this.$CustomEase

        const DesignTypeSplit = new SplitText("#job__title", { type: "chars" })
        const DesignType = DesignTypeSplit.chars.slice()
        const TechTypeSplit = new SplitText("#job__titleB", { type: "chars" })
        const TechType = TechTypeSplit.chars.slice()

        CustomEase.create("lineEase", "M0,0 C0.362,0 0.152,1 1,1")
        this.$gsap.set(DesignType, { y: +200} )
        this.$gsap.set(TechType, { y: +200} )

        tl.to(DesignType, { duration: .5, y:0, stagger: 0.002 })
        tl2.to(TechType, { duration: .6, y:0, stagger: 0.002 })
      },

      arrowDownMotion() {
        const tl = this.$gsap.timeline({ repeat: -1})

        tl.to("#arrow", { duration: 1, ease: "power1.inOut", y:+20 })
        tl.to("#arrow", { duration: 1, ease: "power1.inOut", y:0 })
      }
    }
  }
</script>