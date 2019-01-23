import { HomeTheaterFacade } from './facade';

class TryFacade {

  static run(): void {

    let homeTheater = new HomeTheaterFacade();

    homeTheater.on();
    console.log('Home theater is ready');
    homeTheater.off();

  }

}

TryFacade.run();
