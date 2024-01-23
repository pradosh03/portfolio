import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NzDrawerModule} from 'ng-zorro-antd/drawer';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NzDrawerModule,NzIconModule,NgbModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public isCollapsed = true;

  title = 'portfolio-project';

  ngOnInit(): void {

  }



}
