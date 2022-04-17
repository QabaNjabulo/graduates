import { ApiStorage } from '@graduates/api/storage/api/shared/data-access';
import { ApiStorageServiceFeatureModule } from '@graduates/api/storage/service/feature';
import { Query, Resolver } from '@nestjs/graphql';
//import { FirebaseService } from '@graduates/api/storage/repository/data-access'
@Resolver(() => ApiStorage)
export class ApiStorageResolver {
<<<<<<< HEAD
  constructor(private storageService: ApiStorageServiceFeatureModule) {}
||||||| 569687cf
  constructor(private storageService: ApiStorageServiceFeatureModule,
              ) {}
  @Query(() =>String)
  async download(
    @Args("userId")userID:string,
    @Args("fileCategory")fileCategory:string
  ): Promise<string| boolean> {
    const res = await this.storageService.getFile(userID , fileCategory);
    if(res == null){
      return false
    }
    else{
      return res;
    }
  }
  @Query(() =>String)
  async delete(
    @Args("userId")userID:string,
    @Args("fileCategory")fileCategory:string
  ): Promise<number| boolean> {
    const res = await this.storageService.deleteFile(userID , fileCategory);
    if(res == null){
      return false
    }
    else{
      return res;
    }
  }
  @Mutation(returns => Boolean , { name: 'File' })
  async upload(
    @Args("filename")fileName:string,
    @Args("userId")userID:string,
     @Args("fileCategory")fileCategory:string,
    @Args("fileExtension")fileExtension:string,
    @Args('file', { type: () => GraphQLUpload }) file: FileUpload
  ): Promise<boolean|ApiStorageInput> {
    try {
      const { createReadStream } = file;
      const stream = createReadStream();
      const chunks = [];
      const buff = await new Promise<Buffer>((resolve, reject) => {
        let buff: Buffer;
        stream.on('data', function (chunk) {
          chunks.push(chunk);
        });
        stream.on('end', function () {
          buff = Buffer.concat(chunks);
          resolve(buffer);
        });
        stream.on('error', reject);
      });
      const buffer = Buffer.concat(chunks);
      const base64 = buffer.toString('base64');
      if(base64.length==0) {
        return false;
      }
      const storage = new ApiStorage();
      storage.fileAsString = base64;
      if(fileCategory=="CV"){
        storage.fileCategory = FileCategory.CV 
      }
      if(fileCategory=="Transcript"){
        storage.fileCategory = FileCategory.DEGREE
  
      }
      if(fileCategory=="Academic Record"){
        storage.fileCategory = FileCategory.ACADEMIC_RECORD
      }
      storage.userId = userID;
      storage.fileExtension = fileExtension;
      return await this.storageService.create(storage);
    } catch (err) {
      return false;
    }
}
=======
  constructor(private storageService: ApiStorageServiceFeatureModule,
              ) {}
  @Query(() =>String)
  async download(
    @Args("userId")userID:string,
    @Args("fileCategory")fileCategory:string
  ): Promise<string| boolean> {
    const res = await this.storageService.getFile(userID , fileCategory);
    if(res == null){
      return false
    }
    else{
      return res;
    }
   
  }
  @Query(() =>String)
  async delete(
    @Args("userId")userID:string,
    @Args("fileCategory")fileCategory:string
  ): Promise<number| boolean> {
    const res = await this.storageService.deleteFile(userID , fileCategory);
    
    if(res == null){
      return false
    }
    else{
      return res;
    }
  }
  @Mutation(returns => String)
  async upload(
    @Args("filename")fileName:string,
    @Args("userId")userID:string,
     @Args("fileCategory")fileCategory:string,
    @Args("fileExtension")fileExtension:string,
    @Args('file') file:string
  ): Promise<boolean|ApiStorageInput> {
      const storage = new ApiStorage();
      console.log(fileCategory)
      storage.fileAsString = file;
      if(fileCategory=="CV"){
        storage.fileCategory = FileCategory.CV 
      }
      if(fileCategory=="Transcript"){
        storage.fileCategory = FileCategory.DEGREE
  
      }
      if(fileCategory=="Academic Record"){
        storage.fileCategory = FileCategory.ACADEMIC_RECORD
      }
      storage.userId = userID;
      storage.fileExtension = fileExtension;
      return await this.storageService.create(storage);
  }
  @Query(() =>String)
  pingStorage(){
    return "on";
  }
}
>>>>>>> 006507d2d4dd612e235c3437e6ca32dc143e57bf

<<<<<<< HEAD
  @Query(() => [ApiStorage])
  storage(): Promise<ApiStorage[]> {
    return this.storageService.get_all();
  }
}
||||||| 569687cf
}

=======

>>>>>>> 006507d2d4dd612e235c3437e6ca32dc143e57bf
