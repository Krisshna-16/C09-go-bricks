# GO-BRICS Video Ad Script & Storyboard

A premium, interactive single-page React web application designed for **GO-BRICS Business Lab** under task code **TASK_C09**. This platform showcases a complete 75-second video ad script and scene-by-scene storyboard for the **Shungite Shield EMF Protection** brand.

---

## What is in the Project

The project is structured as a modern React application utilizing Vite, TypeScript, and Tailwind CSS v4. It features a creative-agency style layout with a premium dark theme and is fully print-optimized for physical sign-offs.

### Key Sections (4 Tabs)

1. **🎬 Script View (Default)**:
   - Screenplay-style presentation of the 75-second advertising script divided into 7 distinct scenes.
   - Comprehensive metadata card detailing target audiences (Indian wellness buyers, Ayurvedic practitioners, corporate wellness), format sizes, and brand voice.
   - Features a **"Copy Full Script"** button which captures and formats the screenplay directly to the clipboard with visual success indicators.
   - Distinct typographic formatting: *Italic, gray text* for visual setups, **bold, white text** for on-screen text, `green text` for spoken voiceovers, and *italic, muted text* for audio/music directions.

2. **🎨 Storyboard**:
   - 8-frame scene-by-scene storyboard arranged in a responsive grid.
   - **Hand-drawn style vector SVG graphics** for each frame depicting actions (rotating pyramid, device fields, bed exposure, Russian Karelia mapping coordinates, C60 fullerene structures, complete product ranges, client proof ratings, and shield brand logos).
   - Clear camera movement instructions, timelines, overlays, and description breakdowns.
   - **"Download Storyboard PDF"** button triggering automated print styling.

3. **📋 Production Notes**:
   - Filming checklists including equipment recommendations (iPhone 4K ProRes configs, turntables, stabilizers, velvet backdrops, Rode wireless audio).
   - Suggested scheduling table mapping scene locations, durations, and dependencies.
   - Specific editing guides, color grading notes (moody shadows + gold warm accents), transition speeds, and music selection tips (BPM 60-70 ambient wellness, tablas, volume mixes).

4. **🖋️ Approval Document**:
   - Formally styled Content Department Approval Form.
   - Contains task details (TASK_C09, GBP 150 evaluation value, status reports).
   - Pre-checked compliance checklists validating all scenes, visual directions, audio keys, and CTA criteria.
   - Styled print form with physical name, signature, date, and comments fields for Lead sign-off.
   - **"Download Approval Form PDF"** button to print the sheet directly.

---

## Technology Stack

- **Framework**: React 19 + Vite 8 + TypeScript
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`) + Custom Glassmorphic CSS variables
- **Icons**: Lucide React
- **Typography**: Playfair Display (Headings) + Inter (Body) via Google Fonts
- **Responsive Layout**: Tailwind container grids supporting mobile screens up to A4 paper bounds.

---

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Navigate to the project directory:
   ```bash
   cd go-brics-video-ad-script-storyboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Run the local dev server:
```bash
npm run dev
```

### Production Build

Verify compilation correctness:
```bash
npm run build
```
The output bundle will be generated under the `dist/` directory.

---

## Print Optimization

A key feature of this application is its high-fidelity print stylesheet. When printing (`Ctrl+P` or clicking download buttons), the stylesheet:
- Hides non-essential UI elements (navigation tabs, footers, and download buttons).
- Translates the dark black theme into a high-contrast white-background sheet with dark charcoal text.
- Formats signature blocks and review grids into a structured layout matching standard A4 dimensions.
