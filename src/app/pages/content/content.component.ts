import { Component, OnInit } from '@angular/core';
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";
import { ActivatedRoute, RouterModule } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  standalone: true,
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
  imports: [MenuBarComponent, MenuTitleComponent, RouterModule]
})
export class ContentComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }

  cardImage: string = ""
  cardTitle: string = ""
  description: string = ""

  private id: string | null = "0"

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
    )
    this.setValuesToComponent(this.id)

  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter(article => article.id == id)[0]
    this.cardImage = result.photo
    this.cardTitle = result.title
    this.description = result.decritpion

  }
}
