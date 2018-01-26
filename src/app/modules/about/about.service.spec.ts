import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AboutService } from './about.service';

describe('modules.about.about.service.spec', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AboutService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be truthy',
    inject([AboutService],
      (aboutService: AboutService) => {
        expect(aboutService).toBeTruthy();
      }
    )
  );

  it('should_get_exactly_two_customers',
    inject([AboutService, HttpTestingController],
      (aboutService: AboutService, httpMock: HttpTestingController) => {

        let dummy = ['hello', 'world'];
        let _data = null;

        let result = aboutService.getCustomerById(45).subscribe(data => {
          _data = data;
        });

        httpMock.expectOne({
          url: 'Customer/GetCustomerById/${id}',
          method: 'GET'
        }).flush(dummy, { status: 200, statusText: 'OK' });

        expect(_data).toBe(dummy);
      }
    )
  );
});
