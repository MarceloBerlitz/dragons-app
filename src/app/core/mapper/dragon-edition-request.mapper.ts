import { DragonModel } from '../model/dragon.model';
import { DragonEditionRequest } from '../integration/dragon-edition.request';

export class DragonEditionRequestMapper {
  public static mapFrom(dragon: DragonModel): DragonEditionRequest {
    return new DragonEditionRequest(dragon.name, dragon.type);
  }
}
