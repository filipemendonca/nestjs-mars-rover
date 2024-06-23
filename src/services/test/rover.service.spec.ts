import { Test, TestingModule } from "@nestjs/testing";
import { Orientation, OrientationService } from "./orientation.service.mock";
import { RoverService, Position } from "./rover.service.mock";

describe("RoverService", () => {
  let rover: RoverService;
  let orientationService: OrientationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoverService, OrientationService],
    }).compile();

    orientationService = module.get<OrientationService>(OrientationService);
    rover = module.get<RoverService>(RoverService);
  });

  it("should start at position (0, 0)", () => {
    const position: Position = rover.getPosition();
    expect(position.x).toBe(0);
    expect(position.y).toBe(0);
  });

  it("should start facing NORTH", () => {
    const orientation: Orientation = rover.getOrientation();
    expect(orientation).toBe(Orientation.NORTH);
  });

  it("should move forward in the current orientation", () => {
    rover.moveForward();
    let position: Position = rover.getPosition();
    expect(position.y).toBe(1);
    expect(position.x).toBe(0);

    rover.turnClockwise();
    rover.moveForward();
    position = rover.getPosition();
    expect(position.y).toBe(1);
    expect(position.x).toBe(1);
  });

  it("should turn clockwise correctly", () => {
    rover.turnClockwise();
    expect(rover.getOrientation()).toBe(Orientation.EAST);

    rover.turnClockwise();
    expect(rover.getOrientation()).toBe(Orientation.SOUTH);

    rover.turnClockwise();
    expect(rover.getOrientation()).toBe(Orientation.WEST);

    rover.turnClockwise();
    expect(rover.getOrientation()).toBe(Orientation.NORTH);
  });

  it("should turn counterclockwise correctly", () => {
    rover.turnCounterClockwise();
    expect(rover.getOrientation()).toBe(Orientation.WEST);

    rover.turnCounterClockwise();
    expect(rover.getOrientation()).toBe(Orientation.SOUTH);

    rover.turnCounterClockwise();
    expect(rover.getOrientation()).toBe(Orientation.EAST);

    rover.turnCounterClockwise();
    expect(rover.getOrientation()).toBe(Orientation.NORTH);
  });
});
