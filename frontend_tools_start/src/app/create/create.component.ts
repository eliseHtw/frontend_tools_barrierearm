import { Component, TemplateRef, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { BackendService } from '../shared/backend.service';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ NgbDatepickerModule, ReactiveFormsModule, RouterLink ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})

export class CreateComponent {
  kategorieFC = new FormControl('', [Validators.required]);
  artikelFC = new FormControl('', [Validators.required]);
  detailsFC = new FormControl('', [Validators.required]);
  statusFC = new FormControl('', [Validators.required]);

  private bs = inject(BackendService);
  private router = inject(Router);
  private modalService = inject(NgbModal);
  closeResult = '';

  private formValid() {
    return this.kategorieFC.valid && this.artikelFC.valid && this.detailsFC.valid && this.statusFC.valid;
  }

  cancel(): void {
    this.kategorieFC.reset();
    this.artikelFC.reset();
    this.detailsFC.reset();
    this.statusFC.reset();
  }

  create(content: TemplateRef<any>): void {
    if (this.formValid()) {
      let tool = {
        id: '',
        kategorie: this.kategorieFC.value!,
        artikel: this.artikelFC.value!,
        details: this.detailsFC.value!,
        status: this.statusFC.value!
      };

      this.bs.postOneTool(tool).subscribe({
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

      console.log('new tool: ', tool)
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
