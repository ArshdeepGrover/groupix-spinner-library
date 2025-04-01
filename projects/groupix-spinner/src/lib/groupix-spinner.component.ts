import { Component } from '@angular/core';

@Component({
  selector: 'groupix-spinner',
  template: ` <div class="loader-container">
    <div class="ball ball-1"></div>
    <div class="ball ball-2"></div>
    <div class="ball ball-3"></div>
  </div>`,
  styles: `
  .loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 8px;
}

.ball {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  animation: bounce 1.5s infinite ease-in-out;
  transition: transform 0.3s ease-in-out;
}

.ball-1 {
  background: linear-gradient(to right, #6366f1, #ec4899);
  animation-delay: -0.3s;
}

.ball-2 {
  background: linear-gradient(to right, #facc15, #dc2626);
  animation-delay: -0.15s;
}

.ball-3 {
  background: linear-gradient(to right, #a855f7, #2563eb);
}

.ball:hover {
  transform: scale(1.25);
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}
`,
})
export class GroupixSpinnerComponent {}
