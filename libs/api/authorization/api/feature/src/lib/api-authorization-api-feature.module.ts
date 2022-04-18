import { Module } from '@nestjs/common';
<<<<<<< HEAD
||||||| 6b659606
import { ApiAuthorizationServiceFeatureModule } from '@graduates/api/authorization/service/feature';
import { ApiAuthorizationResolver } from './api-authorization.resolver';
=======
//import { ApiAuthorizationServiceFeatureModule } from '@graduates/api/authorization/service/feature';
import { ApiAuthorizationResolver } from './api-authorization.resolver';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ApiAuthorizationService } from '@graduates/api/authorization/service/feature';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {ApiAuthorization} from '../../../shared/src/lib/api-authorization.entity';
import { QueryBus } from '@nestjs/cqrs';
>>>>>>> 09dc41ba2a6ffe47c8bce417e7a79f552c9eb3dc

@Module({
  controllers: [],
<<<<<<< HEAD
  providers: [],
  exports: [],
||||||| 6b659606
  providers: [ApiAuthorizationResolver],
  imports: [ApiAuthorizationServiceFeatureModule],
  exports: [ApiAuthorizationResolver],
=======
  providers: [ApiAuthorizationResolver, ApiAuthorizationService,ApiAuthorization,QueryBus],
  imports: [],
  exports: [ApiAuthorizationResolver],
>>>>>>> 09dc41ba2a6ffe47c8bce417e7a79f552c9eb3dc
})
export class ApiAuthorizationApiFeatureModule {}
