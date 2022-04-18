import { Injectable } from '@nestjs/common';
<<<<<<< HEAD
||||||| 6b659606
import { ApiAccessStatusEntity } from "@graduates/api/access-status/api/feature";
@Injectable()
export class AccessStatusService {
    async getAccessStatus(companyID: string, gradID: string): Promise<ApiAccessStatusEntity[]> {
        const accessStatus = new ApiAccessStatusEntity();
        
        if (gradID == "42") {
            accessStatus.item = "CV";
            accessStatus.accessStatus = "Pending";
        } else {
            accessStatus.item = "Academic Record";
            accessStatus.accessStatus = "Rejected";
        }
=======
import { AccessStatusRepository } from "@graduates/api/access-status/repository/feature";
import { Item } from '@prisma/client';
import { ApiAccessStatusEntity } from '@graduates/api/access-status/api/shared';

@Injectable()
export class AccessStatusService {
    constructor(
        private readonly repository: AccessStatusRepository
      ) {}
>>>>>>> 09dc41ba2a6ffe47c8bce417e7a79f552c9eb3dc

<<<<<<< HEAD
@Injectable()
export class AccessStatusService {}
||||||| 6b659606
        return [accessStatus];
      }
}
=======
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
>>>>>>> 09dc41ba2a6ffe47c8bce417e7a79f552c9eb3dc
