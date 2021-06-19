import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfildetalhesComponent } from './perfildetalhes.component';

describe('PerfildetalhesComponent', () => {
  let component: PerfildetalhesComponent;
  let fixture: ComponentFixture<PerfildetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfildetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfildetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
