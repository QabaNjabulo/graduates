import { Module } from '@nestjs/common';
<<<<<<< HEAD
||||||| 0fcdbe12
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
>>>>>>> 47d81b5cd23036d60776e518bea209416d577121

@Module({
  controllers: [],
<<<<<<< HEAD
  providers: [],
  exports: [],
||||||| 0fcdbe12
  providers: [ApiAuthorizationResolver],
  imports: [ApiAuthorizationServiceFeatureModule],
  exports: [ApiAuthorizationResolver],
=======
  providers: [ApiAuthorizationResolver, ApiAuthorizationService,ApiAuthorization,QueryBus],
  imports: [],
  exports: [ApiAuthorizationResolver],
>>>>>>> 47d81b5cd23036d60776e518bea209416d577121
})
export class ApiAuthorizationApiFeatureModule {}
