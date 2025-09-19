---
layout: base
title: Background with Object
description: Use JavaScript to have an in motion background.
sprite: images/chii.png
background: images/grassy.jpg
permalink: /background
---

<canvas id="world"></canvas>

<script>
  // get the canvas and its 2D drawing context
  const canvas = document.getElementById("world");
  const ctx = canvas.getContext('2d');

  // load background and sprite images
  const backgroundImg = new Image();
  const spriteImg = new Image();
  backgroundImg.src = '{{page.background}}'; // background path from front matter
  spriteImg.src = '{{page.sprite}}';         // sprite path from front matter

  // counter to track when images are ready
  let imagesLoaded = 0;

  // once background image loads, increment counter and try starting the game
  backgroundImg.onload = function() {
    imagesLoaded++;
    startGameWorld();
  };

  // once sprite image loads, increment counter and try starting the game
  spriteImg.onload = function() {
    imagesLoaded++;
    startGameWorld();
  };

  // called when both images are loaded
  function startGameWorld() {
    if (imagesLoaded < 2) return; // Wait until both are ready

    //  object that can be drawn on the canvas
    class GameObject {
      constructor(image, width, height, x = 0, y = 0, speedRatio = 0) {
        this.image = image;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.speedRatio = speedRatio;             
        this.speed = GameWorld.gameSpeed * this.speedRatio;
      }
      update() {} // placeholder for child classes
      draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      }
    }

    // background class that scrolls horizontally
    class Background extends GameObject {
      constructor(image, gameWorld) {
        // cover entire canvas, scrolls at 0.1 of game speed
        super(image, gameWorld.width, gameWorld.height, 0, 0, 0.1);
      }
      update() {
        // move background to the left, looping seamlessly
        this.x = (this.x - this.speed) % this.width;
      }
      draw(ctx) {
        // draw background twice for so there isnt a gap when ' scrolling ' 
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
      }
    }

    // player class with 'floating' animation
    class Player extends GameObject {
      constructor(image, gameWorld) {
        // scale sprite down by half
        const width = image.naturalWidth / 2;
        const height = image.naturalHeight / 2;
        // center player on the canvas
        const x = (gameWorld.width - width) / 2;
        const y = (gameWorld.height - height) / 2;
        super(image, width, height, x, y);
        this.baseY = y; // save original Y position
        this.frame = 0; // frame counter for sine wave animation
      }
      update() {
        // float up and down smoothly using sine wave
        this.y = this.baseY + Math.sin(this.frame * 0.05) * 20;
        this.frame++;
      }
    }

    // main game world class
    class GameWorld {
      static gameSpeed = 5; 
      constructor(backgroundImg, spriteImg) {
        // setup canvas dimensions to fit the window
        this.canvas = document.getElementById("world");
        this.ctx = this.canvas.getContext('2d');
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;

        // style canvas to cover full screen
        this.canvas.style.width = `${this.width}px`;
        this.canvas.style.height = `${this.height}px`;
        this.canvas.style.position = 'absolute';
        this.canvas.style.left = `0px`;
        this.canvas.style.top = `${(window.innerHeight - this.height) / 2}px`;

        // add game objects: background + player
        this.objects = [
         new Background(backgroundImg, this),
         new Player(spriteImg, this)
        ];
      }

      // main game loop: update and draw all objects
      gameLoop() {
        this.ctx.clearRect(0, 0, this.width, this.height); // clears canvas
        for (const obj of this.objects) {
          obj.update();   // update position/animation
          obj.draw(this.ctx); // draw to screen
        }
        requestAnimationFrame(this.gameLoop.bind(this)); // loop forever
      }

      // start the game loop
      start() {
        this.gameLoop();
      }
    }

    // create and start the game world
    const world = new GameWorld(backgroundImg, spriteImg);
    world.start();
  }
</script>

