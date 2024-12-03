import { Component, signal } from '@angular/core';

//Interfaces
import { IExperiences } from '../../interface/iExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'FRONT-END ESPECIALISTA',
        p: 'ESPECIALIDADES',
      },
      text: 'HTML5 | CSS3 | JAVASCRIPT | TYPESCRIPT | ANGULAR | ANGULAR MATERIAL | SQL | MYSQL | PHP | FRONTEND | BACKEND',
    },
    {
      summary: {
        strong: 'CURSOS',
        p: 'HABILIDADES',
      },
      text: `<p> UDEMY: ANGULAR V17 FRAMEWORK |
UDEMY: HTML5, CSS3 E JAVASCRIPT, TYPESCRIPT, REACT+ |
UDEMY: CRUD DE USUÁRIOS DESENVOLVIDO EM ANGULAR COM FIREBASE |
UDEMY: TYPESCRIPT DO BÁSICO AO AVANÇADO (C/ REACT, EXPRESS) |
UDEMY: BANCO DE DADOS PHP, MYSQL E SQL |
ANHANGUERA EDUCACIONAL: CURSO DE PYTHON DE 40 HORAS |
ANHANGUERA EDUCACIONAL:  CURSO DE LÍNGUA INGLESA DE 120 HORAS.
.</p>`,
    },
    {
      summary: {
        strong: 'RESUMO',
        p: '',
      },
      text: '<p>Estou cursando Análise e Desenvolvimento de Sistemas há 02 anos, durante a maior parte da minha trajetória, tenho trabalhado em grandes aplicações Web pessoais. Front-end com projetos de SPAs, em uma diversidade de frameworks, como Angular e React. Back-end atuando com, SQL, MySQL, Workbench, SGBD e PHP. Sempre utilizando TypeScrypt, como linguagem de programação principal.</p>',
    },
    {
      summary: {
        strong: 'FORMAÇÃO ACADEMICA',
        p: 'GRADUAÇÃO',
      },
      text: `<p>
GRADUAÇÃO: Superior em Análise e Desenvolvimento de Sistemas - CENTRO UNIVERSITÁRIO ANHANGUERA DE SÃO PAULO - Anhanguera SP (Incompleto Início Fevereiro de 2023 e Término Junho de 2025).
</p>`,
    },
    {
      summary: {
        strong: 'IDIOMAS',
        p: '',
      },
      text: '<p>INGLÊS B1 INTERMEDIÁRIO.</p>',
    },
   
  ]);
}

