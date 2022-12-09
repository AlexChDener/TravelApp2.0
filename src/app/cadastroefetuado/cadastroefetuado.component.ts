import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-cadastroefetuado',
  templateUrl: './cadastroefetuado.component.html',
  styleUrls: ['./cadastroefetuado.component.css']
})
export class CadastroefetuadoComponent implements OnInit {

  constructor(private router:Router){}

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }

  ngOnInit(): void {
  }

}
