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

---

## 🎨 Customization

You can customize the spinner's appearance using the `size` and `color` input properties.

### `size`
The `size` input allows you to control the width and height of each ball in the spinner. It accepts any valid CSS size string. If not provided, it defaults to `'40px'`.

**Example:**
```html
<groupix-spinner [size]="'60px'"></groupix-spinner>
```

### `color`
The `color` input allows you to set a uniform background color for all balls in the spinner. It accepts any valid CSS color string (e.g., hex codes, color names). If not provided, the default multi-color gradient backgrounds will be used.

**Example:**
```html
<groupix-spinner [color]="'#3498db'"></groupix-spinner>
```

### Combining Inputs
You can use both inputs together:
```html
<groupix-spinner [size]="'50px'" [color]="'green'"></groupix-spinner>
```

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