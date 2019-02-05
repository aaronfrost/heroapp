import { HerodetailModule } from './herodetail.module';

describe('HerodetailModule', () => {
    let herodetailModule: HerodetailModule;

    beforeEach(() => {
        herodetailModule = new HerodetailModule();
    });

    it('should create an instance', () => {
        expect(herodetailModule).toBeTruthy();
    });
});
