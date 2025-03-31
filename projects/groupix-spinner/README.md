# groupix-spinner

A lightweight Angular spinner library to show loading indicators in your application.

## 📌 Features
- Simple and easy to use
<!-- - Customizable styles and animations -->
- Lightweight and efficient

---

## 🚀 Installation

Install the package via NPM:
```sh
npm install @groupix/groupix-spinner --save
```

---

## 📦 Usage

### 1️⃣ Import the module in `app.module.ts`

```typescript
import { GroupixSpinnerModule } from '@groupix/groupix-spinner';

@NgModule({
  declarations: [AppComponent],
  imports: [GroupixSpinnerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### 2️⃣ Use the `<groupix-spinner>` component in your templates

```html
<groupix-spinner></groupix-spinner>
```

<!-- 
By default, this will show a simple spinner.

---
## 🎨 Customization

You can customize the spinner using CSS:

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
<!-- 
---

## ⚙️ API Options

| Input Property | Type    | Default | Description |
|---------------|--------|---------|-------------|
| `size`        | string | `50px`  | Size of the spinner |
| `color`       | string | `#3498db` | Color of the spinner |
| `speed`       | string | `1s`   | Animation speed |

Example:

```html
<groupix-spinner [size]="'80px'" [color]="'red'" [speed]="'0.5s'"></groupix-spinner>
```
-->
--- 


## ❓ FAQ

### 1️⃣ How do I show/hide the spinner dynamically?
You can use Angular binding:

```html
<groupix-spinner *ngIf="isLoading"></groupix-spinner>
<button (click)="isLoading = !isLoading">Toggle Spinner</button>
```

<!-- ### 2️⃣ How do I change the default styles?
Override the styles in your `styles.css` or `styles.scss` file. -->

---

## 🤝 Contributing
We welcome contributions! Feel free to submit a pull request or report issues.

---

## 📄 License
This project is licensed under the **MIT License**.

