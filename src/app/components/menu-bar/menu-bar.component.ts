import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {
  navlinks: string[] = ["Engineering", "Product", "Security", "Open Source", "Enterprise", "Policy", "Education", "Community", "Company"]
}
