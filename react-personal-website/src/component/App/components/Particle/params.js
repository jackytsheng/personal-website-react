export const params = {
         detectRetina: true,
         fpsLimit: 30,
         interactivity: {
           detectsOn: "canvas",
           events: {
             onClick: {
               enable: true,
               mode: "push",
             },
             onHover: {
               enable: true,
               mode: "grab",
               parallax: {
                 enable: true,
                 force: 60,
                 smooth: 10,
               },
             },
             resize: true,
           },
           modes: {
             push: {
               quantity: 4,
             },
             grab: {
               distance: 200,
               links: {
                 opacity: 0.6,
               },
             },
           },
         },
         particles: {
           color: {
             value: "#2E3D66",
           },
           links: {
             color: "#2E3D66",
             distance: 100,
             enable: true,
             opacity: 0.5,
             width: 1,
           },
           move: {
             attract: {
               enable: false,
               rotate: {
                 x: 600,
                 y: 1200,
               },
             },
             enable: true,
             outMode: "out",
           },
           number: {
             density: {
               enable: true,
               area: 400,
             },
             limit: 80,
             value: 10,
           },
           opacity:{
            random:{
              enable:true,
              minimumValue:0.3,
            },
            value: 0.7,
           },

           shape: {
             type: "circle",
           },
           size: {
             random: {
               enable: true,
               minimumValue: 1,
             },
             value: 4,
           },
           stroke: {
             color: {
               value: "#2E3D66",
             },
             width: 0,
             opacity: 1,
           },
         },
         pauseOnBlur: true,
       };
