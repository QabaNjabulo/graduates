import { ApiRequestAccessEntity } from "../../../../api/feature/src/lib/api-request-access.entity";

import { Injectable } from '@nestjs/common';

import { QueryBus } from '@nestjs/cqrs';
import { Item } from '@prisma/client';
import { RequestAccessRepository } from "@graduates/api-request-access-repository-feature";

@Injectable()

export class RequestAccessService {
  constructor(
    private readonly repository: RequestAccessRepository
  ) {}

  async getAccessEntity(companyID: string, userID: string, itemID: string): Promise<ApiRequestAccessEntity> {
      // create item strings based on the itemID

      if(itemID === 'ACADEMIC_RECORD'){
        const result =this.repository.insertRequest(userID, companyID, Item.ACADEMIC_RECORD, false);
        const entity = {

          companyID: (await result).CompId,
  
          userID: (await result).StudId,
  
          item: (await result).ItemId,
  
        };
        return entity;
      }else if(itemID === 'CV'){
        const result =this.repository.insertRequest(userID, companyID, Item.CV, false);
        const entity = {

          companyID: (await result).CompId,
  
          userID: (await result).StudId,

          item: (await result).ItemId,
  
        };
        return entity;
      }else if(itemID === 'CAPSTONE_PROJECT'){
        const result =this.repository.insertRequest(userID, companyID, Item.CAPSTONE_PROJECT, false);
        const entity = {

          companyID: (await result).CompId,
  
          userID: (await result).StudId,
  
          item: (await result).ItemId,
  
        };
        return entity;
<<<<<<< HEAD
      }else if(itemID === 'CERTFICATE'){
        const result =this.repository.insertRequest(userID, companyID, Item.CERTFICATE, false);
||||||| 0fcdbe12
      }else if(itemID === 'CERTIFICATE'){
        const result =this.repository.insertRequest(userID, companyID, Item.CERTIFICATE, false);
=======
      }else if(itemID === 'CERTIFICATES'){
        const result =this.repository.insertRequest(userID, companyID, Item.CERTIFICATES, false);
>>>>>>> 47d81b5cd23036d60776e518bea209416d577121
        const entity = {

          companyID: (await result).CompId,
  
          userID: (await result).StudId,
  
          item: (await result).ItemId,
  
        };
        return entity;
      }else if(itemID === 'TRANSCRIPT'){
        const result =this.repository.insertRequest(userID, companyID, Item.TRANSCRIPT, false);
        const entity = {

          companyID: (await result).CompId,
  
          userID: (await result).StudId,
  
          item: (await result).ItemId,
  
        };
        return entity;
      }
      return undefined;
    }
}