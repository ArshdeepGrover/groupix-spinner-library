# 🚀 Groupix Spinner

![NPM Downloads](https://img.shields.io/npm/dm/%40groupix%2Fgroupix-spinner?color=blue&label=Downloads)  
![NPM Type Definitions](https://img.shields.io/npm/types/%40groupix%2Fgroupix-spinner?color=green&label=Type%20Definitions)  
![NPM License](https://img.shields.io/npm/l/%40groupix%2Fgroupix-spinner?color=orange&label=License)  
![Bundle Size](https://img.shields.io/bundlephobia/min/%40groupix%2Fgroupix-spinner?color=red&label=Bundle%20Size)  

### ⚡ A lightweight Angular spinner library for seamless loading animations!

---

## 🎯 Features
✔️ Easy to integrate  
✔️ Lightweight and fast performance  
✔️ Customizable ball count (3-9 balls)  
✔️ Multiple size options (sm, m, l, xl, xxl)  

---

## 📦 Installation

Install the package using NPM:

```sh
npm install @groupix/groupix-spinner --save
```

---

## 🚀 Usage

### 1️⃣ Import the module in `app.module.ts`  

```typescript
import { GroupixSpinnerModule } from '@groupix/groupix-spinner';

@NgModule({
  declarations: [AppComponent],
  imports: [GroupixSpinnerModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### 2️⃣ Add the spinner component to your template  

```html
<!-- Basic usage -->
<groupix-spinner></groupix-spinner>

<!-- With custom properties -->
<groupix-spinner 
  [ballCount]="5"
  size="xl">
</groupix-spinner>
```

<!-- 
---
## 🎨 Customization

Modify the styles using CSS:

```css
groupix-spinner {
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-top-color: #3498db;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
``` -->

---

## ⚙️ Configuration Options

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `ballCount` | `number` | `3` | Number of bouncing balls (3-9) |
| `size` | `'sm' \| 'm' \| 'l' \| 'xl' \| 'xxl'` | `'l'` | Size of the balls (sm=20px, m=30px, l=40px, xl=50px, xxl=60px) |

---

## 🎮 Live Demo

🚀 Check out the live demo: [Groupix Spinner Demo](https://groupix-spinner.vercel.app/)  

---

## ❓ FAQ

### 🔹 How do I show/hide the spinner dynamically?
Use Angular binding:

```html
<groupix-spinner *ngIf="isLoading"></groupix-spinner>
<button (click)="isLoading = !isLoading">Toggle Spinner</button>
```

### 🔹 How do I customize the spinner appearance?
You can customize ball count and size:

```html
<!-- Small spinner with 3 balls -->
<groupix-spinner 
  [ballCount]="3"
  size="sm">
</groupix-spinner>

<!-- Large spinner with 7 balls -->
<groupix-spinner 
  [ballCount]="7"
  size="xxl">
</groupix-spinner>
```

### 🔹 What's the valid range for ball count?
The ball count must be between 3 and 9. Values outside this range will be automatically clamped.

---

## 🤝 Contributing

We ❤️ contributions! If you have any suggestions or want to improve this library, feel free to open an issue or submit a PR.

---

## 📄 License

This project is licensed under the **MIT License**.