import Enemy from './Enemy.js';
import Player from './Player.js';

class Creeper extends Enemy {
    constructor(data = null, gameEnv = null) {
        super(data, gameEnv);
        this.hasExploded = false; // Track explosion state
        this.isExploding = false; // Track if explosion animation is running
    }
   

    /**
     * Check for proximity of objects.
     * This method checks if any players are within a certain distance of the creeper.
     * If players are within the specified distance, their names are collected and a response is generated.
     */
    checkProximityToPlayer() {
        // Don't move if exploding or exploded
        if (this.hasExploded || this.isExploding) return;

        // Filter all Player objects from the game environment
        var players = this.gameEnv.gameObjects.filter(obj => obj instanceof Player);
        var creeper = this;

        if (players.length > 0 && creeper) {
            players.forEach(player => {
                if (player.spriteData && player.spriteData.name == 'mainplayer') {
                    // Calculate the distance between the creeper and the player
                    var deltax = player.position.x - this.position.x;
                    var deltay = player.position.y - this.position.y;

                    // The Euclidean distance between two points in a 2D space
                    var distance = Math.sqrt(
                        Math.pow(player.position.x - this.position.x, 2) + 
                        Math.pow(player.position.y - this.position.y, 2)
                    );

                    // Move towards player if distance > 10 pixels
                    if (distance > 10) {
                        if (deltax > 0) {
                            this.velocity.x = this.gameEnv.innerWidth * 0.0005;
                        } else {
                            this.velocity.x = this.gameEnv.innerWidth * -0.0005;
                        }
                        if (deltay > 0) {
                            this.velocity.y = this.gameEnv.innerHeight * 0.0005;
                        } else {
                            this.velocity.y = this.gameEnv.innerHeight * -0.0005;
                        }
                    }
                }
            });
        }
    }

    // Override the jump method for creeper
    jump() {
        // Implement creeper-specific jump logic here
        // console.log("creeper is jumping!");
    }

    handleCollisionEvent() {
        // Don't handle collision if already exploding/exploded
        if (this.hasExploded || this.isExploding) return;

        // Extract player object
        var player = this.gameEnv.gameObjects.find(obj => obj instanceof Player); 
        
        // Check if collided object is player
        if (player && player.id === this.collisionData.touchPoints.other.id) {
            console.log("Creeper collided with player - starting sequential explosion!");

            // Set explosion flags
            this.isExploding = true;
            this.hasExploded = true;

            // Stop movement immediately
            this.velocity.x = 0;
            this.velocity.y = 0;

            // Start the SEQUENTIAL explosion sequence (creeper first, then player)
            this.startSequentialExplosion();
        }
    }

    startSequentialExplosion() {
        console.log("Starting sequential explosion - CREEPER FIRST, then PLAYER");

        // Get the creeper and player elements
        const creeperElement = document.getElementById('Creeper');
        const playerElement = document.getElementById('Player');

        // Step 1: Start ONLY the creeper explosion animation first
        this.startCreeperExplosionAnimation(creeperElement, () => {
            // Step 2: After creeper animation completes, start player red particle explosion
            console.log("Creeper explosion complete - now starting player red particle explosion");
            this.startPlayerRedParticleExplosion(playerElement, () => {
                // Step 3: After both animations complete, show message and restart
                console.log("Both explosions complete - showing message");
                this.showExplosionMessageAndRestart();
            });
        });
    }

    startCreeperExplosionAnimation(spriteElement, onComplete) {
        if (!spriteElement) {
            console.warn("Creeper element not found");
            if (onComplete) onComplete();
            return;
        }

        console.log("Starting creeper explosion animation...");

        // Phase 1: Initial flash and scale (0.5s)
        spriteElement.style.transition = 'all 0.5s ease-out';
        spriteElement.style.filter = 'brightness(5) saturate(0) contrast(3)';
        spriteElement.style.transform = 'scale(1.5) rotate(10deg)';

        setTimeout(() => {
            // Phase 2: Pulsing effect (0.5s)
            spriteElement.style.filter = 'brightness(8) saturate(0) blur(3px)';
            spriteElement.style.transform = 'scale(2) rotate(-5deg)';
            
            setTimeout(() => {
                // Phase 3: Maximum explosion (0.5s)
                spriteElement.style.filter = 'brightness(10) saturate(0) blur(8px)';
                spriteElement.style.transform = 'scale(3) rotate(0deg)';
                spriteElement.style.opacity = '0.8';
                
                setTimeout(() => {
                    // Phase 4: Fade and shrink (0.5s)
                    spriteElement.style.filter = 'brightness(0) saturate(0) blur(15px)';
                    spriteElement.style.transform = 'scale(0.1) rotate(180deg)';
                    spriteElement.style.opacity = '0';
                    
                    // ONLY call onComplete AFTER creeper animation fully completes
                    setTimeout(() => {
                        console.log("Creeper explosion animation fully complete");
                        if (onComplete) onComplete();
                    }, 500); // Wait for final phase to complete
                    
                }, 500);
            }, 500);
        }, 500);
    }

    startPlayerRedParticleExplosion(playerElement, onComplete) {
        if (!playerElement) {
            console.warn("Player element not found");
            if (onComplete) onComplete();
            return;
        }

        console.log("Starting player red particle explosion...");

        // Get player position for particle spawn point
        const playerRect = playerElement.getBoundingClientRect();
        const playerCenterX = playerRect.left + playerRect.width / 2;
        const playerCenterY = playerRect.top + playerRect.height / 2;

        // Phase 1: Turn player RED with ONLY filter overlay - NO MOVEMENT (0.5s)
        playerElement.style.transition = 'filter 0.5s ease-out'; // Only animate filter, not transform
        playerElement.style.filter = 'brightness(1.2) saturate(3) hue-rotate(-20deg) contrast(1.5)';
        // Remove ALL box/glow effects - just pure filter overlay
        playerElement.style.boxShadow = 'none'; // Explicitly remove any box shadow
        playerElement.style.backgroundColor = 'transparent'; // Ensure no background
        playerElement.style.border = 'none'; // Ensure no border
        playerElement.style.outline = 'none'; // Ensure no outline
        // Remove transform - player stays still
        // playerElement.style.transform = 'scale(1.05)'; // REMOVED - no scaling

        setTimeout(() => {
            // Phase 2: Hide player and create particle explosion - NO SCALING
            playerElement.style.transition = 'opacity 0.1s ease-out'; // Quick fade only
            playerElement.style.opacity = '0';
            // Remove scaling transform - just fade out
            // playerElement.style.transform = 'scale(0.1)'; // REMOVED - no scaling

            // Create red particle explosion
            const particles = [];
            const particleCount = 25; // More particles for better effect

            // Create red particle elements
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.style.position = 'fixed';
                particle.style.left = `${playerCenterX}px`;
                particle.style.top = `${playerCenterY}px`;
                particle.style.width = `${6 + Math.random() * 4}px`; // Varied sizes
                particle.style.height = particle.style.width;
                particle.style.backgroundColor = `rgb(${255 - Math.random() * 80}, ${Math.random() * 60}, 0)`; // Red to red-orange
                particle.style.borderRadius = '50%';
                particle.style.zIndex = '9999';
                particle.style.pointerEvents = 'none';
                particle.style.transition = 'all 1.2s ease-out';
                particle.style.boxShadow = '0 0 4px rgba(255, 0, 0, 0.6)'; // Particle glow (particles can have glow)
                
                document.body.appendChild(particle);
                particles.push(particle);
            }

            // Animate particles exploding outward immediately
            setTimeout(() => {
                particles.forEach((particle, index) => {
                    const angle = (index / particleCount) * Math.PI * 2; // Spread particles in circle
                    const distance = 80 + Math.random() * 120; // Random distance 80-200px
                    const offsetX = Math.cos(angle) * distance;
                    const offsetY = Math.sin(angle) * distance + Math.random() * -60; // Slight upward bias
                    
                    // Animate particle movement and fade
                    particle.style.left = `${playerCenterX + offsetX}px`;
                    particle.style.top = `${playerCenterY + offsetY}px`;
                    particle.style.opacity = '0';
                    particle.style.transform = 'scale(0.2)';
                });
            }, 50);

            // Clean up particles and complete animation
            setTimeout(() => {
                particles.forEach(particle => {
                    if (particle.parentNode) {
                        particle.parentNode.removeChild(particle);
                    }
                });
                
                console.log("Player red particle explosion complete");
                if (onComplete) onComplete();
            }, 1300); // Wait for particle animation to finish

        }, 500); // Wait longer for red flash to be visible
    }

    showExplosionMessageAndRestart() {
        console.log("Showing explosion message and preparing restart");
        
        // Show explosion message ONLY after BOTH animations complete sequentially
        const explosionMessage = document.createElement('div');
        explosionMessage.innerHTML = 'BOOM! You got too close to the Creeper and blew up!<br>Restarting...';
        explosionMessage.id = 'creeperExplosionMessage';
        Object.assign(explosionMessage.style, {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(255, 0, 0, 0.9)',
            color: 'white',
            padding: '20px',
            fontSize: '24px',
            fontWeight: 'bold',
            textAlign: 'center',
            borderRadius: '10px',
            zIndex: '10000',
            fontFamily: 'Arial, sans-serif',
            animation: 'fadeInExplosion 0.5s ease-in'
        });
        
        // Add CSS animation for the message
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeInExplosion {
                from { 
                    opacity: 0; 
                    transform: translate(-50%, -50%) scale(0.5); 
                }
                to { 
                    opacity: 1; 
                    transform: translate(-50%, -50%) scale(1); 
                }
            }
        `;
        document.head.appendChild(style);
        
        // Remove any existing explosion message first
        const existingMessage = document.getElementById('creeperExplosionMessage');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        document.body.appendChild(explosionMessage);
        
        // Reload page after message shows for 2 seconds
        setTimeout(() => {
            console.log("Restarting game...");
            window.location.reload();
        }, 2000);
    }

    // Override destroy method to prevent default behavior during explosion
    destroy() {
        if (this.isExploding) {
            // Don't destroy during explosion animation
            return;
        }
        super.destroy();
    }
}

export default Creeper;