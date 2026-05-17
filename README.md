### GALAXY-SHOOTER

✅ Stage 1: Foundation Engine (Current)
[x] Project Bootstrapping via Vite & ES6 Modules.

[x] High-precision requestAnimationFrame game loop with deltaTime capping.

[x] Memory-efficient stateful InputManager.

[x] Primitive/Placeholder rendering setup (Player geometry).

[x] Hard viewport boundaries injection.

⏳ Stage 2: Weapon Systems & Object Pooling
[x] Custom Generic ObjectPool utility implementation.

[x] Bullet entities allocation & cycling mechanics.

[x] Cooldown & weapon fire rate clocks.

⏳ Stage 3: Enemy Systems & Spawning
[x] Automated wave-generation triggers.

[x] Complex linear and sinusoidal vector paths.

[x] Extensible state management for diverse alien variants.

⏳ Stage 4: High-Performance Collision Systems
[x] AABB (Axis-Aligned Bounding Box) mathematical resolution.

[x] Multi-tier spatial partitioning exploration (Uniform Grids/Quadtree ready).

⏳ Stage 5: FX & Visual Juiciness
[x] Particle System emitting pooled glowing sparks.

[x] Camera matrix screen-shake implementation on high-impact states.

[x] Parallax neon stardust layered background rendering.

🛠️ Local Development Setup
Ensure you have Node.js installed on your machine.

Clone the Repository

Bash
git clone 
cd galaxy-shooter
Install Dependencies

Bash
npm install
Run Development Server

Bash
npm run dev
Open http://localhost:5173 in your browser.

Production Compile

Bash
npm run build

👨‍💻 Engineering Standard
This project adheres to professional game development principles:

High Cohesion / Low Coupling: Systems communicate via direct dependency injection or clean parameters.

No Magic Numbers: All values are centralized inside constants.js.

Deterministic State: Game state progresses strictly according to time slices, making it easily adaptable for future features like rewind mechanics, replays, or networking.
