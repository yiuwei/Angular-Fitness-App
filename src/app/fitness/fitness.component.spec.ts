/* Import testing module */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FitnessComponent } from './fitness.component';

/* Define the testing service */
describe('FitnessComponent', () => {
  let component: FitnessComponent;
  let fixture: ComponentFixture<FitnessComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FitnessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
   /* Determine when the app is created */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});