export class DragonListModel {
  constructor(
    public id: string,
    public createdAt: string,
    public name: string,
    public type: string,
    public histories: any[]
  ) {}
}