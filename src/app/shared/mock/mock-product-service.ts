import { Observable, of } from "rxjs";
import { ProductModel } from "../interfaces/product-model";
import { products } from "./product";

export class MockProductService {

    //mock data
    public tableData: ProductModel[] = JSON.parse(JSON.stringify(products)) //** deep clone */

    constructor(){}
    
    getTableData() {
        return of(this.tableData);
    }
    
    getTableDataById(id: number){
      return of([]);
    }
    
    search(searchKey: string){
        this.tableData = this.tableData.filter(d => d.productName.toLowerCase().includes(searchKey.toLowerCase()));
        return of(this.tableData);
    }
    
    addProduct({ data }: any) {
        this.tableData.push(data);
        return of(this.tableData);
    }
    
    editProduct({ data }: any){
        return of([]);
    }
    
    deleteProduct(id: number) {
        this.tableData = this.tableData.filter(d => d.id != id);
        return of(this.tableData);
    }
};