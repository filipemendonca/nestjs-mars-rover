import { Test, TestingModule } from "@nestjs/testing";
import { Orientation, OrientationService } from "./orientation.service.mock";

describe("OrientationService", () => {
  let service: OrientationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrientationService],
    }).compile();

    service = module.get<OrientationService>(OrientationService);
  });

  it("should return EAST for NORTH when getting next clockwise", () => {
    expect(service.getNextClockwise(Orientation.NORTH)).toBe(Orientation.EAST);
  });

  it("should return SOUTH for EAST when getting next clockwise", () => {
    expect(service.getNextClockwise(Orientation.EAST)).toBe(Orientation.SOUTH);
  });

  it("should return WEST for SOUTH when getting next clockwise", () => {
    expect(service.getNextClockwise(Orientation.SOUTH)).toBe(Orientation.WEST);
  });

  it("should return NORTH for WEST when getting next clockwise", () => {
    expect(service.getNextClockwise(Orientation.WEST)).toBe(Orientation.NORTH);
  });

  it("should return WEST for NORTH when getting next counterclockwise", () => {
    expect(service.getNextCounterClockwise(Orientation.NORTH)).toBe(
      Orientation.WEST
    );
  });

  it("should return SOUTH for WEST when getting next counterclockwise", () => {
    expect(service.getNextCounterClockwise(Orientation.WEST)).toBe(
      Orientation.SOUTH
    );
  });

  it("should return EAST for SOUTH when getting next counterclockwise", () => {
    expect(service.getNextCounterClockwise(Orientation.SOUTH)).toBe(
      Orientation.EAST
    );
  });

  it("should return NORTH for EAST when getting next counterclockwise", () => {
    expect(service.getNextCounterClockwise(Orientation.EAST)).toBe(
      Orientation.NORTH
    );
  });
});
