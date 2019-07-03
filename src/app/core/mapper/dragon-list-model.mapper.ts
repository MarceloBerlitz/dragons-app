import * as moment from 'moment';

import { DragonListResponse } from '../integration/dragon-list.response';
import { DragonListModel } from '../model/dragon-list.model';

export class DragonListModelMapper {
  public static mapFrom(dragon: DragonListResponse): DragonListModel {
    return new DragonListModel(
      dragon.name,
      dragon.type,
      dragon.id,
      DragonListModelMapper.formatDate(dragon.createdAt),
      dragon.histories);
  }

  public static mapFromList(response: DragonListResponse[]): DragonListModel[] {
    return response.map(dragon => DragonListModelMapper.mapFrom(dragon));
  }

  private static formatDate(date: string): string {
    return moment(date, 'YYYY-MM-DDThh:mm:ss.SSSZ')
      .format('DD/MM/YYYY');
  }

}
