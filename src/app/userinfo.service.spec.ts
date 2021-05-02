/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserinfoService } from './userinfo.service';

describe('Service: Userinfo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserinfoService]
    });
  });

  it('should ...', inject([UserinfoService], (service: UserinfoService) => {
    expect(service).toBeTruthy();
  }));
});
