# 🚀 Groupix Spinner

![NPM Downloads](https://img.shields.io/npm/dm/%40groupix%2Fgroupix-spinner?color=blue&label=Downloads)  
![NPM Type Definitions](https://img.shields.io/npm/types/%40groupix%2Fgroupix-spinner?color=green&label=Type%20Definitions)  
![NPM License](https://img.shields.io/npm/l/%40groupix%2Fgroupix-spinner?color=orange&label=License)  
![Bundle Size](https://img.shields.io/bundlephobia/min/%40groupix%2Fgroupix-spinner?color=red&label=Bundle%20Size)  

### ⚡ A lightweight Angular spinner library for seamless loading animations

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
| `size` | `'sm' \| 'm' \| 'l' \| 'xl' \| 'xxl'` | `'l'` | Size of the balls |

---

## 📏 Size Options

Choose the perfect size for your spinner! Each size is optimized for different use cases:

### 🔸 Available Sizes

| Size | Dimensions | Best For | Example |
|------|------------|----------|---------|
| `sm` | 20×20px | Small buttons, inline loading | `<groupix-spinner size="sm"></groupix-spinner>` |
| `m` | 30×30px | Form inputs, compact spaces | `<groupix-spinner size="m"></groupix-spinner>` |
| `l` | 40×40px | **Default** - General purpose | `<groupix-spinner size="l"></groupix-spinner>` |
| `xl` | 50×50px | Page loading, prominent areas | `<groupix-spinner size="xl"></groupix-spinner>` |
| `xxl` | 60×60px | Full-screen loading, hero sections | `<groupix-spinner size="xxl"></groupix-spinner>` |

### 🎨 Size Examples

```html
<!-- Tiny spinner for buttons -->
<button [disabled]="loading">
  <groupix-spinner *ngIf="loading" size="sm" [ballCount]="3"></groupix-spinner>
  {{ loading ? 'Loading...' : 'Submit' }}
</button>

<!-- Medium spinner for cards -->
<div class="card-loading">
  <groupix-spinner size="m" [ballCount]="5"></groupix-spinner>
</div>

<!-- Large spinner for page loading -->
<div class="page-loader">
  <groupix-spinner size="xl" [ballCount]="7"></groupix-spinner>
  <p>Loading your content...</p>
</div>

<!-- Extra large for splash screens -->
<div class="splash-screen">
  <groupix-spinner size="xxl" [ballCount]="9"></groupix-spinner>
</div>
```

### 💡 Size Tips

- **Responsive Design**: Use CSS media queries to change sizes on different screens
- **Performance**: Smaller sizes with fewer balls load faster
- **Accessibility**: Larger sizes are easier to see for users with visual impairments
- **Context**: Match the spinner size to the content it's loading

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

## 👨‍💻 Created by

# **Arshdeep Singh**

📧 <arsh199820@gmail.com>  
💼 [LinkedIn](https://linkedin.com/in/arshdeepgrover)  
🌐 [Personal Website](https://arshdeepsingh.info)

---

## 📄 License

This project is licensed under the **MIT License**.
