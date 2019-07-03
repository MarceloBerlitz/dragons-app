import {DragonCreationRequest} from '../integration/dragon-creation.request';
import {DragonListModel} from '../model/dragon-list.model';

export class DragonCreationRequestMapper {
  public static mapFrom(dragon: DragonListModel): DragonCreationRequest {
    return new DragonCreationRequest(dragon.name, dragon.type);
  }
}
