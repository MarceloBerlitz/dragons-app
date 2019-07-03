export class DragonListModel {
  constructor(
    public name: string,
    public type: string,
    public id?: string,
    public createdAt?: string,
    public histories?: any[]
  ) {}
}
