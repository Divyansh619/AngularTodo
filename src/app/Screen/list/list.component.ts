import { Component, OnInit } from '@angular/core';
import { DummyapiService } from '../../Services/dummyapi.service';

@Component({
  selector: 'app-list', // Add a selector for the component
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'] // Correct the typo styleUrl -> styleUrls
})
export class ListComponent implements OnInit {
  products: any[] = [];
  loading: boolean = false;
  error: string | null = null;

  constructor(private dummyapiService: DummyapiService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.loading = true;
    this.dummyapiService.getList().subscribe(
      (data) => {
        console.log(data);
        
        this.products = data.products; // Assuming the response has a 'products' property
        this.loading = false;
      },
      (error) => {
        this.error = 'Failed to load products';
        this.loading = false;
      }
    );
  }
}
