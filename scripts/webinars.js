
let arr= [
    {
       image:"https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a399559a28b0355_tasks.svg",
       title:"Tasks: the foundation of advanced planning in Timely",
       para:"We’re building a new breed of planning tool powered by automatic time tracking! To get there, we’ve started with planning’s smallest unit: Learn how Tasks can empower your people to create effective schedules that align with team priorities and capacity.",
       btn:"Watch on-demand" 
    },

    {
        
    image:"https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a399513868af319_60b773d26388126d9a926615_webinar_pic_new-p-500.png",
    title:"Connecting Timely with Zapier",
    para:"Watch this 15-minute demo on-demand to explore how to connect Timely with Zapier.",
    btn:"Watch on-demand" 
         },  
    

         {
        
    image:"https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a39953c4e8af41e_60b773d2638812e39e926636_quickbooks_header-p-800.jpeg",
    title:"Seamless Invoicing with Quickbooks + Timely",
    para:"Learn how to streamline your accounting and billing workflow. Timely’s QuickBooks Online integration lets you harness the power of automatic time tracking and produce accurate, professional invoices with minimal effort.",
    btn:"Watch on-demand" 
                 }, 



]

   display(arr);

  function display(arr){
       arr.forEach(function(elem){
          let div=document.createElement('div');
          let images=document.createElement('img');
            images.src=elem.image;
          let titles=document.createElement('h2');
            titles.innerText=elem.title;
        let detail=document.createElement('p');
          detail.innerText=elem.para;
        let btn=document.createElement('button');
           btn.innerText=elem.btn;

           div.append(images,titles,detail,btn);

           document.querySelector('#middle').append(div);
       })
  }

 
   