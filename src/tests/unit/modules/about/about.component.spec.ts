import { inject, TestBed } from '@angular/core/testing';
import { Fixture } from '../../../fixture/fixture.core';
import { Times, It, Mock } from '../../../setup/extensions';
import { IAboutService } from '../../../../app/modules/about/iabout.service';
import { AboutComponent } from '../../../../app/modules/about/about.component';

describe('modules.about.about.component.spec', () => {

    // MOQ way of testing angular components
    it('should_mock_about_service_email', () => {

        let _testData = Fixture.createString();

        const mockAboutService = new Mock<IAboutService>()
            .setup(x => x.getContactEmail)
            .returns(() => {
                return _testData;
            });

        let cut = new AboutComponent(mockAboutService.object());

        cut.ngOnInit();

        expect(cut.email).toEqual(_testData);
        mockAboutService.verify(x => x.getContactEmail, Times.Exactly(1));
    });
});
