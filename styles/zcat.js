
let illo = new Zdog.Illustration({
    // set canvas with selector
    element: '.zdog-canvas',
    zoom: 1,
});

// right ear
new Zdog.Shape({
    addTo: illo,
    path: [
        { x: -10, y:  10 },
        { x:   10, y: -20 },
        { x:  10, y:  20 }
    ],
    translate: {y:-100,x:50},
    closed: false, // unclosed
    stroke: 20,
    color: '#706858'
});

// left ear
new Zdog.Shape({
    addTo: illo,
    path: [
        { x: -10, y:  10 },
        { x:   -10, y: -20 },
        { x:  10, y:  5 }
    ],
    translate: {x:-40,y:-100},
    closed: false, // unclosed
    stroke: 20,
    color: '#706858'
  });

// create face
let circle = new Zdog.Ellipse({
    addTo: illo,
    diameter: 190,
    stroke: 30,
    color: '#706858',
    fill: true
});

// add eye
let eye = new Zdog.Ellipse({
    addTo: illo,
    diameter: 50,
    stroke: 20,
    translate: { y: 10},
    translate: { x: -40 },
    color: '#096530',
    fill: true
});

eye.copy({
    translate: { x: 45 },
    color: '#096530',
});

// create pupil 1
let pupil = new Zdog.Ellipse({
    addTo: illo,
    diameter: 20,
    stroke: 5,
    translate: { y: 10},
    translate: { x: -40 },
    color: '#081309',
    fill: true
});

// create pupil 2
let pupil2 = new Zdog.Ellipse({
    addTo: illo,
    diameter: 20,
    stroke: 5,
    translate: { x: 45 },
    color: '#081309',
    fill: true
});

// create nose 
let circle2 = new Zdog.Ellipse({
    addTo: illo,
    diameter: 15,
    translate: {y:30},
    stroke: 10,
    color: '#352B24',
});

// create left whisker 1
let whisker = new Zdog.Shape({
    addTo: illo,
    translate: { x: -40,y: 30 },
    path: [
        { x: 30, y: 5 },   // start
        { arc: [
          { x:  0, y: 15 }, // corner
          { x:  -50, y:  20 }, // end point
        ]},
        // { arc: [ // start next arc from last end point
        //   { x:  20, y:  60 }, // corner
        //   { x:  60, y:  60 }, // end point
        // ]},
      ],
    closed: false,
    stroke: 5,
    color: '#21201B'
    
})

// create left whisker 2

let whisker2 = new Zdog.Shape({
    addTo: illo,
    translate: { x: -41,y: 20 },
    path: [
        { x: 30, y: 5 },   // start
        { arc: [
          { x:  0, y: 15 }, // corner
          { x:  -50, y:  10 }, // end point
        ]},
        // { arc: [ // start next arc from last end point
        //   { x:  20, y:  60 }, // corner
        //   { x:  60, y:  60 }, // end point
        // ]},
      ],
    closed: false,
    stroke: 5,
    color: '#21201B'
    
})

// create right whisker 1

let whisker3 = new Zdog.Shape({
    addTo: illo,
    translate: { x: 50,y: 15 },
    path: [
        { x: 50, y: 10 },   // start
        { arc: [
          { x:  0, y: 15 }, // corner
          { x:  -40, y:  10 }, // end point
        ]},
        // { arc: [ // start next arc from last end point
        //   { x:  20, y:  60 }, // corner
        //   { x:  60, y:  60 }, // end point
        // ]},
      ],
    closed: false,
    stroke: 5,
    color: '#21201B'
    
})

// create right whisker 2
let whisker4 = new Zdog.Shape({
    addTo: illo,
    translate: { x: 50,y: 25 },
    path: [
        { x: 50, y: 20 },   // start
        { arc: [
          { x:  0, y: 15 }, // corner
          { x:  -40, y:  10 }, // end point
        ]},
        // { arc: [ // start next arc from last end point
        //   { x:  20, y:  60 }, // corner
        //   { x:  60, y:  60 }, // end point
        // ]},
      ],
    closed: false,
    stroke: 5,
    color: '#21201B'
    
})

// create cheeck one
new Zdog.Shape({
    addTo: illo,
    path: [
      //{ x: -60, y: -60 },   // start
      { arc: [
        //{ x:  20, y: -60 }, // corner
        { x:  15, y:  20 }, // end point
      ]},
      { arc: [ // start next arc from last end point
        { x:  10, y:  50 }, // corner
        { x:  50, y:  50 }, // end point
      ]},
    ],
    translate: {x:-15,y:20},
    closed: false,
    stroke: 5,
    color: '#21201B'
});

// create cheeck two
new Zdog.Shape({
    addTo: illo,
    path: [
      //{ x: -60, y: -60 },   // start
      { arc: [
        //{ x:  20, y: -60 }, // corner
        { x:  15, y:  20 }, // end point
      ]},
      { arc: [ // start next arc from last end point
        { x:  20, y:  50 }, // corner
        { x:  -17, y:  50 }, // end point
      ]},
    ],
    translate: {x:-15,y:20},
    closed: false,
    stroke: 5,
    color: '#21201B'
  });


function animate() {
    // rotate illo each frame
    illo.rotate.x += 0.03;
    illo.updateRenderGraph();
    // animate next frame
    requestAnimationFrame( animate );
  }

// start animation
animate();

// update & render
illo.updateRenderGraph();




