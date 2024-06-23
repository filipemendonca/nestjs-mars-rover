export const orientationForLeftCommand: { [key: string]: string } = {
  N: 'W',
  S: 'E',
  E: 'N',
  W: 'S',
};

export const orientationForRightCommand: { [key: string]: string } = {
  N: 'E',
  S: 'W',
  E: 'S',
  W: 'N',
};

export type PlateauMatrix = Array<string[]>;

export type Directions = {
  x: number;
  y: number;
  orientation: string;
  finalPosition?: string | null;
};
