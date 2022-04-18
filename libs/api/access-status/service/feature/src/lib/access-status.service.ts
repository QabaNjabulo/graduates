import { Injectable } from '@nestjs/common';
<<<<<<< HEAD

||||||| 0fcdbe12
import { ApiAccessStatusEntity } from "@graduates/api/access-status/api/feature";
import { AccessStatusRepository } from "@graduates/api/access-status/repository/feature";
import { Item } from '@prisma/client';
=======
import { AccessStatusRepository } from "@graduates/api/access-status/repository/feature";
import { Item } from '@prisma/client';
import { ApiAccessStatusEntity } from '@graduates/api/access-status/api/shared';

>>>>>>> 47d81b5cd23036d60776e518bea209416d577121
@Injectable()
<<<<<<< HEAD
export class AccessStatusService {}
||||||| 0fcdbe12
export class AccessStatusService {
    constructor(
        private readonly repository: AccessStatusRepository
      ) {}

    async getAccessStatus(companyID: string, gradID: string): Promise<ApiAccessStatusEntity[]> {
        const result = await this.repository.findRequestByStudIdCompId(gradID, companyID);
        const arrAccessEntities = [];             

        for(let i = 0; i < result.length ; i++)
        {
            const accessStatus = new ApiAccessStatusEntity();
            accessStatus.item =  result[i].ItemId;
            if(result[i].Accepted === false)
            accessStatus.accessStatus = "Pending";
            else
            accessStatus.accessStatus = "Download";

            arrAccessEntities.push(accessStatus);
        }
    
        // if (gradID == "42") {
        //     accessStatus.item = "CV";
        //     accessStatus.accessStatus = "Pending";
        // } else {
        //     accessStatus.item = "Academic Record";
        //     accessStatus.accessStatus = "Rejected";
        // }

        return arrAccessEntities;
      }
}
=======
export class AccessStatusService {
    constructor(
        private readonly repository: AccessStatusRepository
      ) {}

    async getAccessStatus(companyID: string, gradID: string): Promise<ApiAccessStatusEntity[]> {
        const result = await this.repository.findRequestByStudIdCompId(gradID, companyID);
        const arrAccessEntities = [];         
            
        for(let i = 0; i < result.length ; i++)
        {
            const accessStatus = new ApiAccessStatusEntity();

            accessStatus.item =  result[i].ItemId;
            if(result[i].Accepted === false)
              accessStatus.accessStatus = "Pending";
            else
              accessStatus.accessStatus = "Download";

            arrAccessEntities.push(accessStatus);
        }
    
        return arrAccessEntities;
      }
}
>>>>>>> 47d81b5cd23036d60776e518bea209416d577121
