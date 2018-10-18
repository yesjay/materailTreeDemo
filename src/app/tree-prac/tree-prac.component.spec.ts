import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreePracComponent } from './tree-prac.component';

describe('TreePracComponent', () => {
  let component: TreePracComponent;
  let fixture: ComponentFixture<TreePracComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreePracComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreePracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
