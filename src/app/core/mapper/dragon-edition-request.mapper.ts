import { DragonListModel } from '../model/dragon-list.model';
import { DragonEditionRequest } from '../integration/dragon-edition.request';

export class DragonEditionRequestMapper {
  public static mapFrom(dragon: DragonListModel): DragonEditionRequest {
    return new DragonEditionRequest(dragon.name, dragon.type);
  }
}
