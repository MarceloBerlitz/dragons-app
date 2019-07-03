import { DragonCreationRequest } from '../integration/dragon-creation.request';
import { DragonModel } from '../model/dragon.model';

export class DragonCreationRequestMapper {
  public static mapFrom(dragon: DragonModel): DragonCreationRequest {
    return new DragonCreationRequest(dragon.name, dragon.type);
  }
}
