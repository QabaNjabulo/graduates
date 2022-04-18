import { RequestAccessService } from "@graduates/api/request-access/service/feature";
import { UseGuards } from "@nestjs/common";
import { Args, ID, Mutation, Resolver, Query } from "@nestjs/graphql";
import { ApiRequestAccessEntity } from "./api-request-access.entity";
// import { JwtAuthGuard } from "@graduates/api/auth"

@Resolver(of => ApiRequestAccessEntity)
export class ApiRequestAccessResolver {
<<<<<<< HEAD
    constructor(private requestAccessService: ApiRequestAccessService) {}

    @Mutation(returns => ApiRequestAccessEntity)
||||||| 569687cf
    constructor(private requestAccessService: ApiRequestAccessService) {}

    @Mutation(returns => ApiRequestAccessEntity, { nullable: true })
=======
    constructor(private requestAccessService: RequestAccessService) {}
    @Query(() =>String) 
    pingRequestAccess(){
      return "on";
    }
    @Mutation(returns => ApiRequestAccessEntity, { nullable: true })
    // @UseGuards(JwtAuthGuard)
>>>>>>> 006507d2d4dd612e235c3437e6ca32dc143e57bf
    // must add paramters to request
<<<<<<< HEAD
    async requestAccess(@Args('compID', { type: () => ID }) compId: string, @Args('userID', { type: () => ID }) userId: string, @Args('item') id: string): Promise<ApiRequestAccessEntity> {
        return this.requestAccessService.makeRequest();
||||||| 569687cf
    async requestAccess(@Args('compId', { type: () => ID }) compId: string, @Args('gradId', { type: () => ID }) gradId: string, @Args('item') item: string): Promise<ApiRequestAccessEntity> {
        enum Items {
            CV = "CV",
            Transcript = "Transcript",
            Academic = "Academic",
            Certificates = "Certificates",
            Capstone = "Capstone"
        };

        if (compId == "" || gradId == "" || item == "") // obviously empty elements are not allowed
            return null;

        // if new items become available add here
        if (!(item in Items)) // if a valid item has been requested
            return null;

        return this.requestAccessService.makeRequest();
=======
    async requestAccess(@Args('compId', { type: () => ID }) compId: string, @Args('gradId', { type: () => ID }) gradId: string, @Args('item') item: string): Promise<ApiRequestAccessEntity> {
        enum Items { // if new items become available add here
            CV,
            TRANSCRIPT,
            ACADEMIC_RECORD,
            CERTIFICATES,
            CAPSTONE_PROJECT
        };

        if (compId == "" || gradId == "" || item == "") // obviously empty elements are not allowed
            return null;

        if (!(item in Items)) // if an invalid item has been requested
            return null;

        return this.requestAccessService.getAccessEntity(compId, gradId, item);
>>>>>>> 006507d2d4dd612e235c3437e6ca32dc143e57bf
    }
}