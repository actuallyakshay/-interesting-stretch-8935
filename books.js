
let arr=[
    {
        image:"https://assets.website-files.com/5d91c7db124e07c84b1f4686/5e8497d3e2c9cc6121e8218b_book_front_new-p-500.jpeg",
        title:"How to work from home",
        para:"Adjusting to remote working can be daunting, especially when you have to figure it all out by yourself. This blueprint helps to bridge that anxiety — with practical advice on how to work from home from those who already do.",

         more:"→ Learn More"
    },

    {
        image:"https://assets.website-files.com/5d91c7db124e07c84b1f4686/5e1c696b19c05c4c509c9634_timely%20cover-p-500.png",
        title:"Track employee time the right way",
        para:"No matter how you value effort and output, no work exists outside of time. This handbook lays out exactly how to implement employee time tracking to get more from the single resource we all share.",

         more:"→ Learn More"
    },

    {
        image:"https://assets.website-files.com/5d91c7db124e07c84b1f4686/5e183bf4d27bcf4cde000f1b_dewo%20cover-p-500.png",
        title:"Master the world’s ultimate job skill",
        para:"We can’t solve complex problems or create new value without having space for undisturbed deep thinking. This guide lays out how to get started with — and ultimately master — cognitively superlative “deep work”.",

         more:"→ Learn More"
    }
]

  function display(arr){
      arr[0].forEach(function(elem){
           let images=document.createElement('img');
             images.src=elem.image
      })
  }