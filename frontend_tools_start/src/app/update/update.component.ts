import { Component, OnInit, TemplateRef, inject } from '@angular/core';
import { Tool } from '../shared/tool';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BackendService } from '../shared/backend.service';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [ NgbDatepickerModule, ReactiveFormsModule, RouterLink ],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {
  id: string = '';
  tool!: Tool;
  closeResult = '';

  kategorieFC = new FormControl('', [Validators.required]);
  artikelFC = new FormControl('', [Validators.required]);
  detailsFC = new FormControl('', [Validators.required]);
  statusFC = new FormControl('', [Validators.required]);
  
  private route = inject(ActivatedRoute);
  private bs = inject(BackendService);
  private router = inject(Router);
  private modalService = inject(NgbModal);
  

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.readOneToolId(this.id);
  }

  readOneToolId(id: string): void {
    this.bs.getOneToolId(id).subscribe({
      next: (response: Tool) => {
        this.tool = response;
        console.log('tool', this.tool);
        this.kategorieFC.setValue(this.tool?.kategorie);
        this.artikelFC.setValue(this.tool?.artikel);
        this.detailsFC.setValue(this.tool?.details);
        this.statusFC.setValue(this.tool?.status);
        return this.tool;
      },
      error: (err) => console.log(err),
      complete: () => console.log('getOneToolId() completed')
    });
  }

  private formValid() {
    return this.kategorieFC.valid && this.artikelFC.valid && this.detailsFC.valid && this.statusFC.valid;
  }

  cancel(): void {
    this.kategorieFC.reset();
    this.artikelFC.reset();
    this.detailsFC.reset();
    this.statusFC.reset();
  }

  update(content: TemplateRef<any>): void {
    if (this.formValid()) {
      let tool = {
        id: '',
        kategorie: this.kategorieFC.value!,
        artikel: this.artikelFC.value!,
        details: this.detailsFC.value!,
        status: this.statusFC.value!
      };

      this.bs.updateOneTool(tool, this.id).subscribe({
        next: (response) => console.log('response', response),
        error: (err) => console.log(err),
        complete: () => console.log('update completed')
      });

      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result
      .then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
          this.router.navigate(['/edit']);
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        },
      );

      console.log('updated tool: ', tool)
    } else {
      console.warn('form still invalid!')
    }
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return 'by pressing ESC';
      case ModalDismissReasons.BACKDROP_CLICK:
        return 'by clicking on a backdrop';
      default:
        return `with: ${reason}`;
    }
  }
}
