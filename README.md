# groupix-spinner

A lightweight Angular spinner library to show loading indicators in your application.

## 📌 Features  
- Simple and easy to use  
- Lightweight and efficient  

---  

## 🚀 Installation  

Install the package via NPM:  

```sh
npm install @groupix/groupix-spinner --save
```  

---  

## 📞 Usage  

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

---  

## 🎮 Live Demo  

Check out the live demo: [Groupix Spinner Demo](https://groupix-spinner.vercel.app/)  

---  

## ❓ FAQ  

### 1️⃣ How do I show/hide the spinner dynamically?  
You can use Angular binding:  

```html
<groupix-spinner *ngIf="isLoading"></groupix-spinner>
<button (click)="isLoading = !isLoading">Toggle Spinner</button>
```  

---  

## 🤝 Contributing  
We welcome contributions! Feel free to submit a pull request or report issues.  

---  

## 📝 License  
This project is licensed under the **MIT License**.