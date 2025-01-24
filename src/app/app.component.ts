import { Component } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ArticlesComponent } from './articles/articles.component'; 
import { CertificatesComponent } from './certificates/certificates.component';
import { NgClass } from '@angular/common';


@Component({
    selector: 'app-root',
    imports: [
      ProjectsComponent,
      EducationComponent,
      AchievementsComponent,
      ArticlesComponent,
      CertificatesComponent,
      NgClass
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'alexander-kosorukov-portfolio';
  private m_projectsActive = false;
  private m_educationActive = false;
  private m_certificatesActive = false;
  private m_achievementsActive = false;
  private m_articlesActive = false;

  public Projects(): void {
    this.m_projectsActive = !this.m_projectsActive;
  }

  public get projectsActive(): boolean {
    return this.m_projectsActive;
  }

  public Education(): void {
    this.m_educationActive = !this.m_educationActive;
  }

  public get educationActive(): boolean {
    return this.m_educationActive;
  }

  public Certificates(): void {
    this.m_certificatesActive = !this.m_certificatesActive;
  }

  public get certificatesActive(): boolean {
    return this.m_certificatesActive;
  }

  public Achievements(): void {
    this.m_achievementsActive = !this.m_achievementsActive;
  }

  public get achievementsActive(): boolean {
    return this.m_achievementsActive;
  }

  public Articles(): void {
    this.m_articlesActive = !this.m_articlesActive;
  }

  public get articlesActive(): boolean {
    return this.m_articlesActive;
  }

  public CollapseAll(): void {
    this.m_projectsActive = false;
    this.m_educationActive = false;
    this.m_certificatesActive = false;
    this.m_achievementsActive = false;
    this.m_articlesActive = false;
  }

  public ExpandAll(): void {
    this.m_projectsActive = true;
    this.m_educationActive = true;
    this.m_certificatesActive = true;
    this.m_achievementsActive = true;
    this.m_articlesActive = true;
  }  
}
