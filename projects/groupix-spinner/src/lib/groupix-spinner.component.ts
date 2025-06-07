import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'groupix-spinner',
  template: ` <div class="loader-container">
    <div class="ball ball-1" [ngStyle]="ball1Style"></div>
    <div class="ball ball-2" [ngStyle]="ball2Style"></div>
    <div class="ball ball-3" [ngStyle]="ball3Style"></div>
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
  border-radius: 50%;
  animation: bounce 1.5s infinite ease-in-out;
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
export class GroupixSpinnerComponent implements OnInit {
  @Input() size: string = '40px';
  @Input() color!: string;

  ball1Style: any;
  ball2Style: any;
  ball3Style: any;

  ngOnInit(): void {
    const baseStyle = {
      width: this.size,
      height: this.size,
    };

    if (this.color) {
      (baseStyle as any).background = this.color;
    }

    this.ball1Style = { ...baseStyle };
    this.ball2Style = { ...baseStyle };
    this.ball3Style = { ...baseStyle };
  }
}
