import * as moment from 'moment';

import { DragonResponse } from '../integration/dragon.response';
import { DragonModel } from '../model/dragon.model';

export class DragonModelMapper {
  public static mapFrom(dragon: DragonResponse): DragonModel {
    return new DragonModel(
      dragon.name,
      dragon.type,
      dragon.id,
      DragonModelMapper.formatDate(dragon.createdAt),
      dragon.histories);
  }

  public static mapFromList(response: DragonResponse[]): DragonModel[] {
    return response.map(dragon => DragonModelMapper.mapFrom(dragon));
  }

  private static formatDate(date: string): string {
    return moment(date, 'YYYY-MM-DDThh:mm:ss.SSSZ')
      .format('DD/MM/YYYY');
  }

}
