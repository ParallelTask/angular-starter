import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Fixture } from '../../../../lib/test_framework/fixture/fixture.core';
import { Times, It, Mock } from '../../../../lib/test_framework/setup/extensions';
import { IAboutService } from '../../../../app/modules/about/iabout.service';
import { AboutComponent } from '../../../../app/modules/about/about.component';
import { AboutConfig } from '../../../../app/modules/about/setup/about.config';
import { By } from '@angular/platform-browser';

describe('modules.about.about.component.spec', () => {

    /**
     * MOQ way of testing angular component methods which dont have DOM manipulations
     */

    it('should_mock_about_service_email_using_Mock', () => {

        // Use the following moq testcases when you dont need to verify the dom manipulations
        // These Moq test cases verify only the component properties and not the component template 

        let _testData = Fixture.createString();

        const mockAboutService = new Mock<IAboutService>()
            .setup(x => x.getContactEmail())
            .returns(_testData);

        // OR Mock this way
        // const mockAboutService = new Mock<IAboutService>()
        // .setup(x => x.getContactEmail)
        // .returns(() => {
        //     return _testData;
        // });
        // And Verify this way
        // mockAboutService.verify(x => x.getContactEmail, Times.Exactly(1));

        let cut = new AboutComponent(mockAboutService.object());

        cut.ngOnInit();

        expect(cut.email).toEqual(_testData);
        mockAboutService.verify(x => x.getContactEmail(), Times.Exactly(1));
    });

    /**
     * Angular way of testing angular component methods when they have DOM manipulations
     */

    it('should_mock_dom_query_using_Testbed', () => {

        let _testData = Fixture.createString();

        const mockAboutService = new Mock<IAboutService>()
            .setup(x => x.getContactEmail())
            .returns(_testData);

        // configure the AboutModule first before creating component instance
        TestBed.configureTestingModule(AboutConfig);

        // Mock the AboutComponent injectable services into its constructor
        TestBed.overrideComponent(AboutComponent, {
            set: {
                providers: [{ provide: IAboutService, useValue: mockAboutService.object() }]
            }
        });

        let fixture = TestBed.createComponent(AboutComponent);
        let cut = fixture.componentInstance;
        let element: Document = fixture.nativeElement;

        // Run the changes
        fixture.detectChanges();
        let emailEle = element.querySelector('.email');

        expect(emailEle.innerHTML).toEqual(_testData);
        mockAboutService.verify(x => x.getContactEmail(), Times.Exactly(1));
    });

    it('should_mock_click_event_using_Testbed', () => {

        let _testData = Fixture.createString();

        const mockAboutService = new Mock<IAboutService>()
            .setup(x => x.getContactEmail())
            .returns(_testData);

        // configure the AboutModule first before creating component instance
        TestBed.configureTestingModule(AboutConfig);

        // Mock the AboutComponent injectable services into its constructor
        TestBed.overrideComponent(AboutComponent, {
            set: {
                providers: [{ provide: IAboutService, useValue: mockAboutService.object() }]
            }
        });

        let fixture = TestBed.createComponent(AboutComponent);
        let cut = fixture.componentInstance;
        let element: Document = fixture.nativeElement;

        let btn = fixture.debugElement.query(By.css('.runMe'));
        let email = element.querySelector('.email');

        // stable the DOM changes
        fixture.detectChanges();

        // Trigger the event
        btn.triggerEventHandler('click', null);

        // stable the DOM changes
        fixture.detectChanges();

        expect(email.innerHTML).toEqual('dummy@example.com');
        mockAboutService.verify(x => x.getContactEmail(), Times.Exactly(1));

    });
});
