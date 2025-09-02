import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'groupix-spinner',
  template: `
    <div class="loader-container">
      <div
        *ngFor="let ball of balls; let i = index"
        class="ball"
        [ngClass]="['ball-' + (i + 1), sizeClass]"
        [ngStyle]="{ 'animation-delay': -0.3 + i * 0.05 + 's' }"
      ></div>
    </div>
  `,
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
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
      animation: bounce 1.5s infinite ease-in-out;
      transition: transform 0.3s ease-in-out;
    }

    .ball-sm {
      width: 20px;
      height: 20px;
    }

    .ball-m {
      width: 30px;
      height: 30px;
    }

    .ball-l {
      width: 40px;
      height: 40px;
    }

    .ball-xl {
      width: 50px;
      height: 50px;
    }

    .ball-xxl {
      width: 60px;
      height: 60px;
    }

    .ball-1 { background: linear-gradient(to right, #6366f1, #ec4899); }
    .ball-2 { background: linear-gradient(to right, #facc15, #dc2626); }
    .ball-3 { background: linear-gradient(to right, #a855f7, #2563eb); }
    .ball-4 { background: linear-gradient(to right, #10b981, #3b82f6); }
    .ball-5 { background: linear-gradient(to right, #f97316, #8b5cf6); }
    .ball-6 { background: linear-gradient(to right, #06b6d4, #f43f5e); }
    .ball-7 { background: linear-gradient(to right, #84cc16, #d946ef); }
    .ball-8 { background: linear-gradient(to right, #14b8a6, #f59e0b); }
    .ball-9 { background: linear-gradient(to right, #6366f1, #84cc16); }

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
export class GroupixSpinnerComponent implements OnChanges, OnInit {
  @Input() ballCount = 3;
  @Input() size: 'sm' | 'm' | 'l' | 'xl' | 'xxl' = 'l';

  balls: number[] = [];
  sizeClass = 'ball-l';

  ngOnInit(): void {
    this.updateBallCount();
    this.updateSizeClass();
  }

  ngOnChanges(): void {
    this.updateBallCount();
    this.updateSizeClass();
  }

  private updateBallCount(): void {
    const count = Math.min(Math.max(this.ballCount, 3), 9);
    this.balls = Array.from({ length: count }, (_, i) => i);
  }

  private updateSizeClass(): void {
    const allowedSizes = ['sm', 'm', 'l', 'xl', 'xxl'];
    this.sizeClass = allowedSizes.includes(this.size)
      ? `ball-${this.size}`
      : 'ball-l';
  }
}
