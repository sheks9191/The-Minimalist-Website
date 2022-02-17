const menu = document.querySelector('.menu-bar'),
      navBar = document.querySelector('.nav'),
      lis = document.querySelectorAll('li'),
      scrolls = document.querySelectorAll('.scroll'),
      slides = document.querySelectorAll('.slide'),
      boxes = document.querySelectorAll('.box'),
      abouts = document.querySelectorAll('.about');

      menu.addEventListener('click',() => {
              navBar.classList.toggle('active')
              menu.classList.toggle('active')
      })

      lis.forEach(li => {
              li.addEventListener('click', () => {
                 navBar.classList.remove('active') 
                 menu.classList.remove('active')    
              })
      })

      window.addEventListener('scroll', displayContent)

      displayContent()

      function displayContent() {
              const displayPoint = window.innerHeight * 0.5
              


              scrolls.forEach(scroll => {
                      
                  let scrollPoint = scroll.getBoundingClientRect().top
                  
                  
                  if(scrollPoint > displayPoint) {
                        scroll.classList.remove('active')
                  }else {

                        slides.forEach(slide => {
                                slide.classList.add('active');
                        })

                        boxes.forEach(box => {
                                box.classList.add('active');
                        })

                        abouts.forEach(about => {
                                about.classList.add('active');
                        })
                  }
                  
              })
      }



