import { ApiAccessStatusEntity } from "@graduates/api/access-status/api/shared";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ApiAccessStatusService {
    async getAll(id: string): Promise<ApiAccessStatusEntity[]> {

        const accessStatus = new ApiAccessStatusEntity();
        if (id == "42") {
            accessStatus.userID = "u00000000";
            accessStatus.item = "CV";
            accessStatus.accessStatus = "Pending";
        } else {
<<<<<<< HEAD
            accessStatus.userID = "u00000001";
            accessStatus.item = "Academic Record";
||||||| 0fcdbe12
            accessStatus.item = "Academic Record";
=======
            accessStatus.item = "ACADEMIC_RECORD";
>>>>>>> 47d81b5cd23036d60776e518bea209416d577121
            accessStatus.accessStatus = "Rejected";
        }

        return [accessStatus];
    }
}