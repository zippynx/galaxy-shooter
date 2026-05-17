# GALAXY SHOOTER — Engine Architecture

## Implemented Engine Capabilities

### Phase 1: Core Engine Foundation

* **Project Bootstrapping:** Configured with Vite and ES6 Modules for native ESM development and optimized production bundling.
* **Deterministic Game Loop:** Implemented a high-precision `requestAnimationFrame` ticker with `deltaTime` threshold capping to maintain consistent gameplay physics across varying display refresh rates (60Hz–144Hz+).
* **Input Management:** Engineered a memory-efficient, stateful input polling matrix to minimize asynchronous browser event latency.
* **Rendering Pipeline & Viewport Constraints:** Established a decoupled rendering pipeline with mathematical viewport boundary enforcement for stable entity containment.

### Phase 2: Memory & Weapon Systems

* **Object Pooling Infrastructure:** Developed a custom generic `ObjectPool` utility to eliminate Garbage Collection (GC) micro-stutters during runtime.
* **Projectile Lifecycle Management:** Implemented pre-allocated projectile entities using active/inactive state cycling for zero-allocation bullet spawning.
* **Time-Sliced Weapon Cooldowns:** Built hardware-independent fire-rate clocks and deterministic cooldown systems for stable weapon behavior.

### Phase 3: AI & Entity Spawning

* **Procedural Wave Generation:** Designed automated, clock-driven enemy spawning systems for continuous combat scaling.
* **Trajectory Mathematics:** Implemented vector-based movement paths with architecture prepared for sinusoidal and advanced movement pattern expansion.
* **Entity State Decoupling:** Structured enemy lifecycle management to support extensible alien variants and future behavioral AI systems.

### Phase 4: High-Performance Collision Systems

* **AABB Collision Verification:** Integrated Axis-Aligned Bounding Box collision mathematics for precise hitbox detection.
* **Collision Middleware Architecture:** Decoupled collision handling into an isolated subsystem prepared for future spatial partitioning optimizations such as Quadtrees and Uniform Grids.

### Phase 5: FX & Visual Rendering

* **Zero-Allocation Particle Engine:** Built radial explosion emitters utilizing pre-allocated particle pools with alpha decay physics and lightweight update cycles.
* **Game State Recovery System:** Implemented a custom `reset()` protocol capable of restoring runtime state without requiring browser-level reloads.

---

# Local Development Setup

Ensure Node.js is installed on your workstation.

## 1. Clone the Repository

```bash
git clone https://github.com/zippynx/galaxy-shooter.git
cd galaxy-shooter
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Run Development Server

```bash
npm run dev
```

Navigate to:

```txt
http://localhost:5173
```

to access the local development environment.

## 4. Production Build

```bash
npm run build
```

This generates a minified, tree-shaken production build inside the `/dist` directory.
