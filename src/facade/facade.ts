import { Amplifier, Projector, Tuner } from './subsystem';

export class HomeTheaterFacade {

  private amplifier: Amplifier = new Amplifier();
  private projector: Projector = new Projector();
  private tuner: Tuner = new Tuner();

  on(): void {
    this.amplifier.on();
    this.amplifier.setStereoSound();
    this.amplifier.setVolume(10);
    this.projector.on();
    this.tuner.on();
  }

  off(): void {
    this.amplifier.off();
    this.projector.off();
    this.tuner.off();
  }

}
