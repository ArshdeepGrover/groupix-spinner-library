# Groupix Spinner

<div align="center">
  
![NPM Version](https://img.shields.io/npm/v/%40groupix%2Fgroupix-spinner)
![NPM Type Definitions](https://img.shields.io/npm/types/%40groupix%2Fgroupix-spinner?color=green&label=Type%20Definitions)  
![License](https://img.shields.io/badge/license-MIT-green.svg)
![npm bundle size](https://img.shields.io/bundlephobia/min/%40groupix%2Fgroupix-spinner)
</div>

A lightweight, customizable spinner component for Angular applications.

## ✨ Features

- 🚀 Simple integration
- 🎨 Colorful bouncing ball animation
- 🔢 Customizable ball count (3-9)
- 🪶 Lightweight with minimal dependencies

## 📦 Installation

```bash
npm install @groupix/groupix-spinner --save
```

## 🔧 Usage

### Import the module

```typescript
// In your module (for non-standalone components)
import { GroupixSpinnerModule } from '@groupix/groupix-spinner';

@NgModule({
  imports: [GroupixSpinnerModule],
  // ...
})
export class AppModule {}

// OR in standalone component
import { GroupixSpinnerModule } from '@groupix/groupix-spinner';

@Component({
  // ...
  imports: [GroupixSpinnerModule],
  // ...
})
```

### Add to template

```html
<!-- Default: 3 balls -->
<groupix-spinner></groupix-spinner>

<!-- Custom: 5 balls -->
<groupix-spinner [ballCount]="5"></groupix-spinner>
```

## 🎮 Live Demo
Check out the live demo: [Groupix Spinner Demo](https://groupix-spinner.vercel.app/)   

## 🎬 Examples

### Basic usage

```html
<groupix-spinner></groupix-spinner>
```

### With loading state

```html
<groupix-spinner *ngIf="isLoading"></groupix-spinner>
<button (click)="isLoading = !isLoading">Toggle Spinner</button>
```

### Custom ball count

```html
<groupix-spinner [ballCount]="7"></groupix-spinner>
```

## 📄 License

MIT © [Arshdeep Singh](https://github.com/ArshdeepGrover)