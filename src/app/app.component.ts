import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
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
export class AppComponent implements OnInit {

  public displayedColumns: string[] = ['name', 'age', 'email', 'action'];
  public dataSource!: MatTableDataSource<User>; 

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private store: Store<fromStore.appState>, private _service: UserService){
    this.store.select(fromStore.selectUsersData).subscribe(res =>{
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    this.store.select(fromStore.getUserById(2))
      .subscribe(res => console.log(res));
  }

  ngOnInit(){
    this.store.dispatch(fromStore.loadUsers())
  }

 filter(event: Event){
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  
  if(this.dataSource.paginator){
    this.dataSource.paginator.firstPage();
  }
 }
}
