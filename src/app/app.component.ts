import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { User } from './model/user.model';
import { UserService } from './services/user.service';
import * as fromStore from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public displayedColumns: string[] = ['name', 'age', 'email', 'action'];
  public dataSource!: MatTableDataSource<User>; 

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private store: Store<fromStore.appState>, private _service: UserService){
    // this.store.select('users').subscribe(res =>{
    //   this.dataSource = new MatTableDataSource(res.data);
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;
    // });

    this._service.getRecords().subscribe( res => {
      this.dataSource = new MatTableDataSource(res);
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;
    })
  }

 filter(event: Event){
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  
  if(this.dataSource.paginator){
    this.dataSource.paginator.firstPage();
  }
 }
}
