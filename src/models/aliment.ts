class Aliment{

private _name:string ;
  private _type:string ;

  constructor(name:string, type:string){
      this._name = name;
      this._type = type;
  }
  
  public get name():string  {
      return  this._name;
  }

  
  public set name(value : string) {
      this._name = value;
  }

  public get type():string {
      return  this._type;
  }

  
  public set type(value: string) {
      this._type = value;
  }
}

 export default Aliment;
 