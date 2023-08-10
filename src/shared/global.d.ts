declare global {
  namespace Entities {
    interface EntityBase  {
        id? : number
    }
    export interface Profile extends EntityBase  {
      firstName: string;
      lastName: string;
    };
  }
}

export {}
