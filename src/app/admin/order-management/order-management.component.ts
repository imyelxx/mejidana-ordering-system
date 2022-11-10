import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.scss']
})
export class OrderManagementComponent implements OnInit, AfterViewInit  {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  displayedColumns: string[] = ['id', 'customerName', 'orderStatus', 'items', 'totalPrice'];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

const ELEMENT_DATA: any[] = [
  {id: 1, customerName: 'A. Mejidana', orderStatus: 'Pending_Payment', items: 1, totalPrice: 4},
  {id: 2, customerName: 'B. Mejidana', orderStatus: 'For_Shipment', items: 5, totalPrice: 1050},
  {id: 3, customerName: 'C. Mejidana', orderStatus: 'Order_Received', items: 115, totalPrice: 53},
  {id: 4, customerName: 'D. Mejidana', orderStatus: 'Active', items: 15, totalPrice: 53},
  {id: 5, customerName: 'E. Mejidana', orderStatus: 'Active', items: 42, totalPrice: 599},
  {id: 6, customerName: 'F. Mejidana', orderStatus: 'Active', items: 5, totalPrice: 100},
  {id: 7, customerName: 'G. Mejidana', orderStatus: 'For_Shipment', items: 8, totalPrice: 66},
];