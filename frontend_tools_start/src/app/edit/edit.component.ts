import { Component, inject } from '@angular/core';
import { BackendService } from '../shared/backend.service';
import { FormControl } from '@angular/forms';
import { Tool } from '../shared/tool';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  ngOnInit(): void {
    this.readAllTools();
    this.filterArray = this.tools;
    console.log('in table --> allTools', this.tools)
  }

  bs = inject(BackendService);
  tools: Tool[] = [];
  filterArray: Tool [] = [];
  search = new FormControl('');

  readAllTools(): void {
    this.bs.getAllTools().subscribe({
      next: (response) => {
        this.tools = response;
        console.log(this.tools);
        return this.tools;
      },
      error: (err) => console.log(err),
      complete: () => console.log('getAllTools() completed')
    })
  }

  filterTools() {
    console.log(this.search.value)
    let searchString = this.search.value ? this.search.value : '';
    console.log('in table --> searchString', searchString);

    this.filterArray = this.tools.filter( (tool)  => {
      return (
        tool.kategorie.toLowerCase().includes(searchString) ||
        tool.artikel.toLowerCase().includes(searchString) ||
        tool.details.toLowerCase().includes(searchString)
      );
    });
  }

  deleteOneTool(id: string): void {
    console.log('id', id)
    this.bs.deleteOneTool(id).subscribe(
        {
          next: (response) => {
                console.log(response);
                this.readAllTools();
              },
          error: (err) => console.log(err),
          complete: () => console.log('deleting completed')
        })
  }
}
