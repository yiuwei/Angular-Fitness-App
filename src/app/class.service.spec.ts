/* Import testing module */
import { TestBed } from '@angular/core/testing';
import { AppService } from './class.service';

/* Define the testing service */
describe('AppService', () => {
  let service: AppService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppService);
  });
  /* Determine if the app is created */
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});