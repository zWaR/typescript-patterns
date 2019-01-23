
export class Amplifier {

  on(): void {
    console.log('Amplifier on');
  }

  off(): void {
    console.log('Amplifier off');
  }

  setVolume(volume: number = 5): void {
    console.log(`Volume set to ${volume}.`);
  }

  setStereoSound(): void {
    console.log('Stereo sound set');
  }

  setSurroundSound(): void {
    console.log('Surround sound set');
  }

}
