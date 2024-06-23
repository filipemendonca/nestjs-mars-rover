import { Test, TestingModule } from "@nestjs/testing";
import { AppService } from "../services/app.service";
import { AppController } from "./app.controller";
import { PlateauDTO } from "../dto/PlateauDto";
import { RoverDTO, Rovers } from "../dto/RoverDto";
import { Directions } from "../types/types";
import { OrientationModule } from "../modules/orientation.module";
import { RoverModule } from "../modules/rover.module";

describe("AppController", () => {
  let appController: AppController;

  let plateauMock = new PlateauDTO();
  plateauMock.x = 10;
  plateauMock.y = 10;

  let roversMock = new Rovers();
  roversMock.rovers = new Array<RoverDTO>();
  roversMock.rovers.push(
    {
      instruction: "LMLMLMLMM",
      landingPosition: "1 2 N",
    },
    {
      instruction: "MRRMMRMRRM",
      landingPosition: "3 3 E",
    }
  );

  const directionsExpected: Directions[] = [
    { x: 1, y: 3, orientation: "N" },
    { x: 2, y: 3, orientation: "S" },
  ];

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
      imports: [OrientationModule, RoverModule],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  it("should make rover walk into plateau", async () => {
    const execution = await appController.post(plateauMock, roversMock);
    expect(execution).toStrictEqual(directionsExpected);
  });
});
