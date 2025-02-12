import { Resolver, Query, ID, Args } from "@nestjs/graphql";
import { ApiAccessStatusEntity } from "@graduates/api/access-status/api/shared";
import { AccessStatusService } from "@graduates/api/access-status/service/feature";

@Resolver(of => ApiAccessStatusEntity)
export class ApiAccessStatusResolver {
    constructor(private accessStatusService: AccessStatusService) {}

<<<<<<< HEAD
    @Query(returns => [ApiAccessStatusEntity])
    async status(@Args('compID', { type: () => ID }) id: string): Promise<ApiAccessStatusEntity[]> {
        return this.accessStatusService.getAll(id);
||||||| 569687cf
    @Query(returns => [ApiAccessStatusEntity], { nullable: true })
    async status(@Args('compId', { type: () => ID }) compId: string, @Args('gradId', { type: () => ID }) gradId: string): Promise<ApiAccessStatusEntity[]> {
        if (compId == "" || gradId == "") // obviously empty elements are not allowed
            return null;

        return this.accessStatusService.getAll(compId, gradId);
=======
    @Query(returns => [ApiAccessStatusEntity], { nullable: true })
    async status(@Args('compId', { type: () => ID }) compId: string, @Args('gradId', { type: () => ID }) gradId: string): Promise<ApiAccessStatusEntity[]> {
        if (compId == "" || gradId == "") // obviously empty elements are not allowed
            return null;

        const items = ["CV", "Transcript", "Academic Record", "Certificates", "Capstone Project"];
        const enumItems = items.map((x) => x.toUpperCase().replace(" ", "_"));

        const entities = await this.accessStatusService.getAccessStatus(compId, gradId);
        
        for (const e of entities) {
            const i = enumItems.indexOf(e.item);

            e.item = items[i];
            items.splice(i, 1);
            enumItems.splice(i, 1);
        }

        for (const i of items) {
            const e = new ApiAccessStatusEntity();
            e.accessStatus = "Private";
            e.item = i;
            entities.push(e);
        }

        return entities;
    }
    @Query(() =>String) 
    pingAccessStatus(){
      return "on";
>>>>>>> 006507d2d4dd612e235c3437e6ca32dc143e57bf
    }
}