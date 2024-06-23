import { Test, TestingModule } from "@nestjs/testing";
import { AppService } from "./app.service.mock";
import { RoverService, Position } from "./rover.service.mock";
import { Orientation, OrientationService } from "./orientation.service.mock";

describe("AppService", () => {
  let appService: AppService;
  let roverService: RoverService;
  let orientationService: OrientationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService, RoverService, OrientationService],
    }).compile();

    orientationService = module.get<OrientationService>(OrientationService);
    roverService = module.get<RoverService>(RoverService);
    appService = module.get<AppService>(AppService);
  });

  it("should move rover forward", () => {
    appService.moveRoverForward();
    const position: Position = appService.getRoverPosition();
    expect(position.x).toBe(0);
    expect(position.y).toBe(1);
  });

  it("should turn rover clockwise", () => {
    appService.turnRoverClockwise();
    expect(appService.getRoverOrientation()).toBe(Orientation.EAST);
  });

  it("should turn rover counterclockwise", () => {
    appService.turnRoverCounterClockwise();
    expect(appService.getRoverOrientation()).toBe(Orientation.WEST);
  });

  it("should get rover position", () => {
    const position: Position = appService.getRoverPosition();
    expect(position.x).toBe(0);
    expect(position.y).toBe(0);
  });

  it("should get rover orientation", () => {
    const orientation: Orientation = appService.getRoverOrientation();
    expect(orientation).toBe(Orientation.NORTH);
  });
});
