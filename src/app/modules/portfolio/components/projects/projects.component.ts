import { Component, inject, signal } from '@angular/core';

// Interface
import { IProjects } from '../../interface/IProjects.interface';

// Material
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

// Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/GitHub-Simbolo.png',
      alt: 'Projeto Vida FullStack',
      title: 'GitHub',
      with: '100px',
      height: '51px',
      description:
        '<p> Meu GitHub dedicado exclusivamente ao ecossistema Angular, Front-end, JavaScript e TypeScript.</p> <p>Aqui contém algumas de minhas habilidades de programação front-end e back-end, JavaScript e TypeScript.</p>',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://github.com/Wpunisher1',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}