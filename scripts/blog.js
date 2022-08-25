
 
      let arr= [{image: src="https://assets-global.website-files.com/6257f2528a399501d48af28d/62ff5e656313aba88ce03544_How%20to%20take%20meeting%20notes%20blog%20header%20image-p-800.png",
           title:'How to take effective meeting notes: The ultimate guide ',
           para:'Save time and be more productive with these tips on the best ways to take, organize and share your meeting notes. ',
           Date:'August 15,2022'
                 },
            {
                image:'https://assets-global.website-files.com/6257f2528a399501d48af28d/62fa0c68c6b23e23e2058246_How%20to%20prioritize%20tasks%20blog%20header%20image-p-800.png',
                title:'How to prioritize your tasks for the greatest impact',
                para:'Being able to effectively prioritize tasks is key to keeping projects with lots of moving parts on track. See our tips to get started. ',
                Date:'August 8,2022'
            },
            {
                image:'https://assets-global.website-files.com/6257f2528a399501d48af28d/62e7e373809c494a94f8a2fb_2%20minute%20rule%20blog%20header%20image-p-500.png',
                title:'The two-minute rule: What it is and how it works',
               para:'Learn what the two-minute rule is and how you can use it to stop procrastinating - once and for all.',
               Date:'August 1,2022'
           },
           {
            image:'https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a39953a158b0503_6230a09d2921c720566e454c_622f69e00c9cf263773c74f4_612f49684576661d97abc058_time-blocking-p-800.jpeg',
             title:'Time blocking: What it is and how to do it',
             para:'An in-depth guide to time blocking, a time management method that helps you plan your day and be more productive.',
             Date:'July 25,2022'
           },
           {
            image:'https://assets-global.website-files.com/6257f2528a399501d48af28d/62e000253bc98d742ae3fdd3_plannin-p-1080.png',
            title:'Getting Things Done (GTD): What it is and how it works',
            para:"This guide will give you an overview of what Getting Things Done is, why it's so effective and how you can use it to be more productive at work. ",
            Date:'July 18,2022'
           },
           {
            image:"https://assets-global.website-files.com/6257f2528a399501d48af28d/62ceb65c448ae677eff5d3ea_62ceaeb2478f482bc621b739_project%2520management%2520kpis%2520blog-p-800.png",
            title:'16 project management KPIs you should be tracking',
            para:"Looking to improve your project's health and profitability? Here are some metrics that you should be measuring to gauge your performance.",
            Date:'July 11, 2022'
           },
           {
            image:'https://assets-global.website-files.com/6257f2528a399501d48af28d/62c448eaecd8aa7aa9e37230_eat%20the%20frog%20blog%20post%20header.svg',
            title:'Eat the Frog productivity method: What it is and how it works',
            para:"Learn everything you need to know about Eat the Frog, why it's effective, and how you can use it to tackle your most important tasks.",
            Date:'July 4, 2022'
           },
           {
            image:'https://assets-global.website-files.com/6257f2528a399501d48af28d/62ceb64d5b8e6dd33c5ac07a_62ba0639dc339b689c1956f8_Untitled-2-p-800.png',
            title:"Summer '22 brings more G2 awards to Timely 🥳☀️",
            para:"Timely was recognized in the G2 Summer 2022 report and awarded badges for usability, business results and more!",
            Date:'June 27, 2022'
           },
           {
            image:'https://assets-global.website-files.com/6257f2528a399501d48af28d/62ceb66a5b8e6d1d595ac197_62b9babcff3d6a1da232686f_Asset%252015%25402x-p-800.png',
            title:"The Pomodoro technique: What it is and how it works",
            para:"Here's an overview of the Pomodoro technique and how to make it work for you.",
            Date:'June 20, 2022'
           },
           {
            image:'https://assets-global.website-files.com/6257f2528a399501d48af28d/62ceb65da47f621471b1dbcc_62a9c65a26e92b50f41792f9_blog-img003-p-1080.jpeg',
            title:'How to do a time audit (step-by-step guide)',
            para:"Make planning and managing project tasks simple with this straightforward process.",
            Date:'June 13, 2022'
           },
           {
            image:"https://assets-global.website-files.com/6257f2528a399501d48af28d/62ceb664dadba9f7418e6136_62a0b40350ed6d4919dea109_time%2520audit%2520step%2520by%2520step%2520guide-p-500.jpeg",
            title:"How to do a time audit (step-by-step guide)",
            para:'Your step-by-step guide to running a time audit so you can better understand where your time goes at work. (Plus, a free template!)',
           Date:'June 6, 2022'
        },
        {
        image:'https://assets-global.website-files.com/6257f2528a399501d48af28d/62ceb649caee42eda6b27a9a_62a0b3420064ba38b09ee37f_Time%2520mapping%2520guide-p-800.png',
        title:"The complete guide to time mapping (+ template) ⏱️ 🗺️",
        para:"If your to-do list looks daunting, consider trying time mapping to gain control over your calendar and hectic work day.",
        Date:'May 30, 2022'
        }

    ]
      display(arr);
 
          function display(arr){
               arr.forEach(function(elem){
                let div=document.createElement('div');
                     let images=document.createElement('img');
                     images.src=elem.image;
                     let titles=document.createElement('h2');
                     titles.innerText=elem.title;
                     let paras=document.createElement('p');
                     paras.innerText=elem.para;
                     let date=document.createElement('p');
                       date.innerText=elem.Date;

                      div.append(images,titles,paras,date);
                      document.querySelector('#middle').append(div);
               })
          }
    