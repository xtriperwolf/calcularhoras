import { Component, OnInit } from '@angular/core';
import { ExcelService }   from  './../services/excel.service';  
import {FormControl, Validators} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table'; 

export interface PeriodicElement {  
  name: string;
  fecha: string;
  hora1: number;
  hora2: number;
  hora3: number;
  hora4: number;
  suma: number;  
  permisos: number;
  total: number;
};

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Jeffersn Vinueza', fecha : '15/03/20', hora1: 500, hora2: 700 , hora3: 1000, hora4: 1500, suma: 0, permisos: 400, total: 0},
  {name: 'Juan Armendia', fecha : '15/03/20', hora1: 700, hora2: 1232 , hora3: 1310, hora4: 1800, suma: 0, permisos:0, total: 0},
  {name: 'Lili Arco', fecha : '15/03/20', hora1: 700, hora2: 1300 , hora3: 1440, hora4: 1700, suma: 0, permisos:0, total: 0},

];

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})

export class ReporteComponent implements OnInit {
  
  constructor(private excelService:ExcelService) { }

  displayedColumns: string[] = ['index','name', 'fecha', 'hora1', 'hora2', 'hora3', 'hora4', 'suma', 'permisos', 'total'];
 
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngOnInit() { }
  
  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.dataSource.data, 'Biometrico');
  }
  
  exportAsXLSXfiltered():void {
    this.excelService.exportAsExcelFile(this.dataSource.filteredData, 'Biometrico');
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getTotalCost() {
  }
}
