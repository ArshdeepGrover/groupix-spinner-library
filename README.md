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
<groupix-spinner></groupix-spinner>
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

---

## 🤝 Contributing

We ❤️ contributions! If you have any suggestions or want to improve this library, feel free to open an issue or submit a PR.

---

## 📄 License

This project is licensed under the **MIT License**.