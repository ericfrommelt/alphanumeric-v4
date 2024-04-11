<template>
  <section class="grid__wrapper projects">
    <div class="section__block"></div>
    <div class="projects__head__wrap">
      <h2 id=projects__head>Projects—</h2>
    </div>
    <!-- 01 Sports Mode -->
    <div class="project__number">
      <div id="p1">01</div>
    </div>
    <div class="project__details">
      <h3 class="project__title">Sports Mode</h3>
      <h4 class="project__subhead">Prototype</h4>
      <p class="project__role">Interaction Design + Development</p>
      <p class="project__description">Sports Mode is a product feature that allows sports fans the option of tailoring their experience for watching multiple sports programs that are airing simultaneously. I worked on the interaction design and prototype build while partnering with my peers in Research to conduct user testing.</p>

      <div class="project__button">
        <s>
          View project
        </s>
      </div>
      <div class="tools">
        <div class="subsection__block"></div>
        <h5>Tools + technogy</h5>
        <ul class="tools__list">
          <li>Unity</li>
          <li>C#</li>
        </ul>
      </div>
    </div>
    <div class="project__video">
      <video src="~/assets/SportsMode.mp4" loop muted autoplay></video>
    </div>
    <div class="project__footer"></div>
    <!-- 02 HPE -->
    <div class="project__number">
      <div id="p2">02</div>
    </div>
    <div class="project__details">
      <h3 class="project__title">HPE</h3>
      <h4 class="project__subhead">Prototype</h4>
      <p class="project__role">Design + Development</p>
      <p class="project__description">Editorial experience design and development.</p>
      <div class="project__button">
        <a href="https://blissful-lichterman-3559c0.netlify.app/">View project</a>
      </div>
      <div class="tools">
        <div class="subsection__block"></div>
        <h5>Tools + technogy</h5>
        <ul class="tools__list">
          <li>React</li>
          <li>Gatsby</li>
          <li>CSS Modules</li>
          <li>GSAP</li>
          <li>D3</li>
        </ul>
      </div>
    </div>
    <div class="project__video">
      <video src="~/assets/hpe.mp4" loop muted autoplay></video>
    </div>
    <div class="project__footer"></div>

    <!-- 03 Terminal Index -->
    <div class="project__number">
      <div id="p3">03</div>
    </div>  
    <div class="project__details">
      <h3 class="project__title">Terminal Index</h3>
      <h4 class="project__subhead">Interaction sketchbook</h4>
      <p class="project__role">Design + Development</p>
      <p class="project__description">I wanted to build a space where I could post small, isolated interaction design experiments on an ongoing basis.</p>
      <div class="project__button">
        <a href="https://terminalindex.vercel.app/">View project</a>
      </div>  
      <div class="tools">
        <div class="subsection__block"></div>
        <h5>Tools + technogy</h5>
        <ul class="tools__list">
          <li>Nuxt</li>
          <li>CSS</li>
          <li>GSAP</li>
        </ul>  
      </div>  
    </div>  
    <div class="project__video">
      <video src="~/assets/TerminalIndex.mp4" loop muted autoplay></video>
    </div>  
    <div class="project__footer"></div>

    <!-- 04 Vaporized Claims -->
    <div class="project__number">
      <div id="p4">04</div>
    </div>
    <div class="project__details">
      <h3 class="project__title">Vaporized Claims</h3>
      <h4 class="project__subhead">CSS Art</h4>
      <p class="project__role">Design + Development</p>
      <p class="project__description">I've been enamored with collage since childhood and saw an opportunity to experiment with the process utiliziing CSS grid, clip-path and simple animation. So much fun.</p>
      <div class="project__button">
        <a href="https://www.vaporized.claims/">View project</a>
      </div>
      <div class="tools">
        <div class="subsection__block"></div>
        <h5>Tools + technogy</h5>
        <ul class="tools__list">
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </div>
    </div>
    <div class="project__video">
      <video src="~/assets/VaporizedClaims.mp4" loop muted autoplay></video>
    </div>
    <div class="project__footer"></div>
  </section>
</template>

<script>
  export default {
    mounted() {
      this.projectsMotion()
    },

    methods: {
      projectsMotion() {
        const SplitText = this.$SplitText
        const CustomEase = this.$CustomEase
        const projectsTypeSplit = new SplitText("#projects__head", { type: "chars", charsClass: "phead++" })
        const projectsType = projectsTypeSplit.chars.slice()

        CustomEase.create("lineEase", "M0,0 C0.362,0 0.152,1 1,1")

        this.$gsap.set(projectsType, { y: +200, opacity: 1 })

        const tl0 = this.$gsap.timeline({
          scrollTrigger: {
            trigger: "#projects__head",
            start: "center bottom",
            end: "+=500",
            scrub: true
          }
        })
        
        const tl = this.$gsap.timeline({
          scrollTrigger: {
            trigger: "#p1",
            start: "top bottom",
            toggleClass: "active"
          }
        })


        const tl2 = this.$gsap.timeline({
          scrollTrigger: {
            trigger: "#p2",
            start: "top bottom",
            toggleClass: "active"
          }
        })

        const tl3 = this.$gsap.timeline({
          scrollTrigger: {
            trigger: "#p3",
            start: "top bottom",
            toggleClass: "active"
          }
        })
        
        const tl4 = this.$gsap.timeline({
          scrollTrigger: {
            trigger: "#p4",
            start: "top bottom",
            toggleClass: "active"
          }
        })

        tl0.to(projectsType, { duration: 1, y: 0, opacity: 1, stagger: 0.01 })
        tl.to("#p1", { duration: 2, scrambleText: { text: "01", chars: "ALPHANUMERIC01234567898"}})
        tl2.to("#p2", { duration: 2, scrambleText: { text: "02", chars: "ALPHANUMERIC0123456789"}})
        tl3.to("#p3", { duration: 2, scrambleText: { text: "03", chars: "ALPHANUMERIC0123456789"}})
        tl4.to("#p4", { duration: 2, scrambleText: { text: "04", chars: "ALPHANUMERIC0123456789"}})
      }
    }
  } 
</script>

<style scoped>
  h2 {
    font-style: italic;
    font-size: 1.4rem;
    font-weight: 400;
  }

  h3 {
    margin-top: 0;
    margin-bottom: .4rem;
    font-size: 1.8rem;
  }

  h4 {
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
  }

  .projects {
    margin-top: 6rem;
  }

  .projects a {
    color: #FF0005;
  }

  .projects__head__wrap {
    grid-column: 2 / span 10;
    display: inline-block;
    overflow: hidden;
  }

  .project__description {
    padding: 0 4rem 0 0;
  }

  .project__details {
    grid-column: 2 / span 10;
  }

  .project__image, .project__video {
    grid-column: 2 / span 10;
    margin: 2rem 0;
  }

  .project__footer {
    grid-column: 2 / span 10;
    padding-bottom: 4rem;
  }

  .project__number {
    grid-column: 2 / span 10;
    font-family: 'TTForsRegular';
    font-size: .6rem;
    font-weight: 200;
    padding-right: 1rem;
    color: hsl(0, 0%, 70%);
  }

  #p1, #p2, #p3, #p4{
    display: inline-block;
    clip-path: polygon(0 120%, 100% 100%, 100% 100%, 0% 100%);
    transition: all 1s cubic-bezier(.43,.01,.39,.99);
  }

  #p1.active, #p2.active, #p3.active, #p4.active {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }

  .project__role {
    color: hsl(0, 0%, 70%);
  }

  .project__subhead {
    font-weight: 400;
    font-size: 1.2rem;
  }

  .tools__list li {
    padding-right: 1rem;
  }
  
  .mini__folio {
      grid-column: 1 / span 12;
      display: grid;
      grid-template-columns: repeat(12, 1fr);
    }

  .gametheory, .styleshifters, .rift {
      grid-column: 2 / span 10;
    }


  @media (min-width: 900px) {
    h2 {
      font-size: 3.125rem;
    }

    .gametheory {
      grid-column: 7 / span 6;
    }
  
    .styleshifters {
      grid-column: 1 / span 4;
      padding: 8rem 0;
    }
  
    .rift {
      grid-column: 2 / span 6;
      padding: 8rem 0;
    }   

    .project__details {
      grid-column: 2 / span 5;
    }

    .project__footer {
      padding-bottom: 8rem;
    }

    .project__image, .project__video {
      grid-column: 7 / span 5;
    }

    .project__number {
      grid-column: 1;
      justify-self: end;
      font-size: 1.2rem;
    }

    .half_left {
      grid-column: 1 / span 6;
    }

    .half_right {
      grid-column: 7 / span 6;
    }
  }
</style>