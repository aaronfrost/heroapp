import { HerolistModule } from './herolist.module';

describe('HerolistModule', () => {
    let herolistModule: HerolistModule;

    beforeEach(() => {
        herolistModule = new HerolistModule();
    });

    it('should create an instance', () => {
        expect(herolistModule).toBeTruthy();
    });
});
