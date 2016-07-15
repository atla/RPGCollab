export class Project {
constructor(
  public name?: string,
  public _id?: string,
  public subtitle?: string,
  public description?: string,
  public created?: Date,
  public hidden?: Boolean,
  public meta?: {
    votes: Number;
    favs: Number;
  } ){}
}