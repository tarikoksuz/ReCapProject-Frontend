import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands: Brand[] = [];
  dataLoaded = false;
  title = 'Brand List';

  constructor(private brandSeervice:BrandService) { }

  ngOnInit(): void {
    this.getBrands();

  }

  getBrands() {
    this.brandSeervice.getBrands().subscribe(Response=>{
      this.brands=Response.data;
      this.dataLoaded = true;
    });
    
  }

}
