declare global {
  namespace Data {
    interface ColorGame {
      origin: "self" | "shared";
      hash: string;
      result: string[];
    }
  }

  namespace Entities {
    interface EntityBase {
      id?: number;
    }
    export interface Profile extends EntityBase {
      firstName: string;
      lastName: string;
    }

    export interface Color extends EntityBase {
      origin: "self" | "shared";
      hash: string;
      result: string[];
    }

    export interface Transaction extends EntityBase {
      telNo: string;
      tranx_code: string;
      tranx_date: string;
      tranx_timestamp: string;
      receiver_name: string;
      sender_name: string;
      amount_humanized: string;
      fee_breakdown: string;
      fee_total: string;
      amount_transferred: string;
      code_1: string;
      code_2: string;
    }
  }

  namespace UI {
    interface UIBase {
      name: string;
    }
    export interface PageRoute extends UIBase {
      route: string;
    }
  }
}

export {};
