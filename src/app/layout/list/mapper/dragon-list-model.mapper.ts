import {DragonListResponse} from '../integration/dragon-list.response';
import {DragonListModel} from '../model/dragon-list.model';

export class DragonListModelMapper {
  public static mapFrom(dragon: DragonListResponse): DragonListModel {
    return new DragonListModel(
      dragon.id,
      dragon.createdAt,
      dragon.name,
      dragon.type,
      dragon.histories);
  }

  public static mapFromList(response: DragonListResponse[]): DragonListModel[] {
    return response.map(dragon => DragonListModelMapper.mapFrom(dragon));
  }
}
