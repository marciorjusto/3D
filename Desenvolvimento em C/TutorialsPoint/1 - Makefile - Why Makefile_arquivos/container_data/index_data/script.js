var animations = [
  [
    {
      id: '#i01',
      duration: 400,
      delayBefore: 200,
      delayAfter: 0,
      animations: {opacity:1}
    }, 
    {
      id: '#i07',
      duration: 750,
      delayBefore: 200,
      delayAfter: 750,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, blur:[0,2]}
    },
    {
      id: '#i02',
      duration: 850,
      delayBefore: 250,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0}
    },
    {
      id: '#i03',
      duration: 850,
      delayBefore: 250,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0}
    },
    {
      id: '#i04',
      duration: 800,
      delayBefore: 500,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0}
    },
    {
      id: '#i04-1',
      duration: 800,
      delayBefore: 600,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0}
    },
    {
      id: '#i04-2',
      duration: 800,
      delayBefore: 700,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0}
    },
    {
      id: '#i04-3',
      duration: 800,
      delayBefore: 800,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0}
    },
    {
      id: '#i05',
      duration: 900,
      delayBefore: 1100,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0}
    },
    {
      id: '#i06',
      duration: 900,
      delayBefore: 1100,
      delayAfter: 750,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0}
    },
  ],
  [
    {
      id: '#i02',
      duration: 850,
      delayBefore: 0,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:"50px"}
    },
    {
      id: '#i03',
      duration: 850,
      delayBefore: 200,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:"10px"}
    },
  ],
  [
    {
      id: '#i03',
      duration: 850,
      delayBefore: 0,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i02',
      duration: 850,
      delayBefore: 200,
      delayAfter: 2500,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0}
    },
  ]
 ]
 new WAnimation(animations, {
     loop: 3,
     clearAfterEnd: false,
   }).startAnimation();      