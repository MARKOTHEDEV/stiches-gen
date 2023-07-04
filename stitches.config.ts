import { createStitches } from '@stitches/react';



export const {
    styled,
    
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
  } = createStitches({
    theme: {
      colors: {
        green50:'#daefe3',
        green100:'#3fbd91',
        green200:'#0c513f',
        green300:'#0c513f',
        gray50:'#f3f4f6',
      gray51:'#9ca3af',
        gray100:'#e5e7eb',
      
      },
      
    //   conditions:{
    //     bp1:'@media (min-width:400px)',
    //   }
    },
    media: {
      bp1: '(min-width: 400px)',
      bp2: '(min-width: 500px)',
      bp3: '(min-width: 1000px)',
      bp4: '(min-width: 1300px)',
      bp5: '(min-width: 1500px)',
      bp300:'(min-width: 300px)',
      bp900:'(min-width: 900px)',
      bp600:'(min-width: 600px)',
      bp700:'(min-width: 700px)',
    },  
    utils: {
      marginX: (value:any) => ({ marginLeft: value, marginRight: value }),
      paddingX: (value:any) => ({ paddingLeft: value, paddingRight: value }),
    },
    
  });
  

 export const globalStyles = globalCss({
  '@font-face':[

  ],
  '@import':[
    "url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,900&family=Ubuntu:ital,wght@0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap')",
    "url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,900&family=Rubik:wght@400;500;600&family=Ubuntu:ital,wght@0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap')"
  ],
    '*':{
      // 'color':'$white',
      'listStyleType':'none',
      fontFamily: 'Rubik',
      'margin':'0',
      'padding':'0',
      'boxSizing':'border-box',
      fontStyle: 'normal',
    },
    'body':{
    },
   
  })